const path = process.cwd();

module.exports = function (app, passport) {

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect('/login');
    }
  }

  // app.route('/')
  //   .get(isLoggedIn, (req, res) => {
  //     res.sendFile(path + '/public/index.html');
  //   });

  // app.route('/login')
  //   .get((req, res) => {
  //     res.sendFile(path + '/public/login.html');
  //   });

  app.route('/logout')
    .get((req, res) => {
      req.logout();
      res.redirect('/login');
    });

  // app.route('/profile')
  //   .get(isLoggedIn, (req, res) => {
  //     res.sendFile(path + '/public/profile.html');
  //   });

  app.route('/api/user')
    .get(isLoggedIn, (req, res) => {
      res.json(req.user.github);
    });

  app.route('/auth/github')
    .get(passport.authenticate('github'));

  app.route('/auth/github/callback')
    .get(passport.authenticate('github', {
      successRedirect: '/',
      failureRedirect: '/login',
    }));
};
