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
    _id: ID!
    title: String!
    repeat: Boolean!
    repeatTime: Int
    creation: Int
  }

  type Query {
    user: [User]
    oneUser(profileId: ID!): User
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    deleteUser(profileId: ID!): User

    addTodo(profileId: ID!, title: String!, repeat: Boolean!, repeatTime: Int, creation: Int): User
    deleteTodo(profileId: ID!, todoId: ID!): User
  }
`;

module.exports = typeDefs;
