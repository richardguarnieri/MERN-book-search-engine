// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
              }
              throw new AuthenticationError('You need to be logged in!');
            }
        },

    Mutation: {
        login: async (parent, args, context) => {},
        addUser: async (parent, args, context) => {},
        saveBook: async (parent, args, context) => {},
        removeBook: async (parent, args, context) => {},
    }
}