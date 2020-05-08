// const mongoCollections = require("../config/mongoCollections");
// const users = mongoCollections.users;

const users = './dummyData';

let exportedMethods = {
  getById(id) {
    return users().then(postCollection => {
      return postCollection.findOne({ _id: id }).then(user => {
        if (!user) throw "User not found";
        return user;
      });
    });
  }
};

module.exports = exportedMethods;
