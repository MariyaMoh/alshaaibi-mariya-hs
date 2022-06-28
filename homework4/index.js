const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('./auth');

function isLoggden(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}
const app = express();
app.use(session({ secret: 'cats' }));
app.use(passport.initialize());
app.use(passport.session());

//1st argument (path or url) 2nd call back function (insaid 2 arg)
app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Authentication with Google');
});

app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

app.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/failure',
  })
);

app.get('/auth/failure', (req, res) => {
  res.send('something went wrong!!');
});

app.get('/protected', isLoggden, (req, res) => {
  res.send('Hello');
});

app.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('GoodBye!!');
});
app.listen(3000, () => console.log('listening omn port 3000'));

//swagger

/**
 * @swagger
 * components:
 *  schemas:
 *    Student:
 *      type:object
 *      required:
 *        - name
 *        -country
 *      properties:
 *        id:
 *          type: string
 *          description: auto generated id of the students
 *        name:
 *          type: string
 *          description: the student name
 *        country:
 *          type: string
 *          description: the student country
 *      example:
 *         id: d5fa_asz
 *         name: Maria
 *         country: Oman
 *
 */
