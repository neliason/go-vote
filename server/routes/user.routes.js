const path = process.cwd();
import { isLoggedIn } from '../util/common';

module.exports = function (app, passport) {
  app.route('/logout')
    .get((req, res) => {
      req.logout();
      res.redirect('/login');
    });

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
