const express = require('express');
const app = express();

//1st argument (path or url) 2nd call back function (insaid 2 arg)
app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Authentication with Google');
});

app.get('/protected', (req, res) => {
  res.send('Hello From Mariya !!');
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
