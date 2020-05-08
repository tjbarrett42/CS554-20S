const express = require("express");
const router = express.Router();
const data = require("../data");
const users = data.users;
const bluebird = require('bluebird');
// const flat = require('flat');
// const unflatten = flat.unflatten;
const redis = require('redis');
const client = redis.createClient();

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

router.get("/people/history", async (req, res) => {
  const lastUsers = [];

  response.send(lastUsers);

  try {
    // respond with array of last 20 users from the recently viewed list
    // within this array, print entire user information
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/people/:id", async (req, res) => {
  const id = req.params.id;

  // if (user has cache entry in redis) {
  //    render cache entry result
  let cacheForUserDataExists = await client.getAsync('id');
  if (cacheForUserDataExists) {
    res.send(cacheForUserDataExists);
  }

  // } else {
    //    query the data module for the person
    //    if (getById() does not resolve) {
    //      fail the request
    //    } else {
    //      send JSON
    //      cache the result
  // }

  try {

  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
