const { gql } = require('apollo-server-express');

const typeDefs = gql`
   type User {
    _id: ID!
    username: String!
    password: String!
    todos: [Todo]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Todo {
    title: String!
    deadline: Int!
    repeat: Boolean!
    repeatTime: Int
  }

  type Query {
    user: [User]
    oneUser: User
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addTodo(profileId: ID!, title: String!, deadline: Int!, repeat: Boolean!, repeatTime: Int): User
    deleteUser(profileId: ID!): User
  }
`;

module.exports = typeDefs;
