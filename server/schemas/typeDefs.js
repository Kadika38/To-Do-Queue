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
    deleteUser(profileId: ID!): User

    addTodo(profileId: ID!, title: String!, deadline: Int!, repeat: Boolean!, repeatTime: Int): User
    deleteTodo(profileId: ID!, todoId: ID!): User
  }
`;

module.exports = typeDefs;
