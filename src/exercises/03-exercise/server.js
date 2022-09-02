const express = require("express");
const userData = require("./user-data");

/**
 * 1. Define the app and assign it to the `app` const
 */
const app = express();

/**
 * 2. Add the `express.json()` middleware to use it for all the requests
 */
app.use(express.json());

/**
 * 3. Define a GET request handler for the `/user-data` endpoint
 *    that returns a status code of 200
 *    and an object with a property named `data` and as values
 *    the contents of the `userData` object required above
 */
app.get("/user-data", (req, res) => {
  res.status(200).send({
    data: { ...userData },
  });
});

/**
 * 4. Define a DELETE request handler for the `/users/:userId` endpoint
 *
 * 4.1 For this step you should capture the `userId` request param
 *     to return a response to the client with its contents
 *
 * 4.2 Send a status code of 200
 *
 * 4.3 A response with the following shape:
 *     { `data`: `Deleted ${userId}` }
 */
app.delete("/users/:userId", (req, res) => {
  const { userId } = req.params;

  res.status(200).send({
    data: `Deleted ${userId}`,
  });
});

/**
 * 5. Define a PATCH request handler for the `/users/:userId` endpoint
 *
 * 5.1 Capture the `userId` request param to return a response to the client with its contents
 *
 * 5.2 Capture the `firstName` and `lastName` properties from the request body
 *     In order to be able to access them you should have enabled the express.json() middleware
 *
 * 5.3 Send a status code of 200
 *
 * 5.4 A response with the following shape:
 *     `data`: {
 *        `id`: the user id from the request params
 *        `firstName`: the firstName property from the request body
 *        `lastName`: the lastName property from the request body
 *     }
 */
app.patch("/users/:userId", (req, res) => {
  const { userId } = req.params;
  const { firstName, lastName } = req.body;

  res.status(200).send({
    data: {
      id: userId,
      firstName: firstName,
      lastName: lastName,
    },
  });
});

app.get("/", (req,res)=> {
  res.send(`Connected correctly to the server`)
})

module.exports = app;
