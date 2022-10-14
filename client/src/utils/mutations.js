import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TODO = gql`
  mutation addTodo($profileId: ID!, $title: String!, $repeat: Boolean!, $repeatTime: Int, $creation: Int) {
    addTodo(profileId: $profileId, title: $title, repeat: $repeat, repeatTime: $repeatTime, creation: $creation) {
      _id
      username
      password
      todos {
        _id
        title
        repeat
        repeatTime
        creation
      }
    }
  }
`;