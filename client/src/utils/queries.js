import { gql } from '@apollo/client';

export const ONE_USER = gql`
query OneUser($profileId: ID!) {
    oneUser(profileId: $profileId) {
      _id
      username
      password
      todos {
        _id
        title
        deadline
        repeat
        repeatTime
      }
    }
  }
`;