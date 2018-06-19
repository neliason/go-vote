module.exports = function (app, passport) {
  app.route('/logout')
    .get((req, res) => {
      req.logout();
      res.redirect('/login');
    });

  app.route('/api/user')
    .get((req, res) => {
      if (req.user) {
        res.json(req.user.github);
      } else {
        res.json({});
      }
    });

  app.route('/auth/github')
    .get(passport.authenticate('github'));

  app.route('/auth/github/callback')
    .get(passport.authenticate('github', {
      successRedirect: '/',
      failureRedirect: '/login',
    }));
};
