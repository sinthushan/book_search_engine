import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        user {
            _id
            username
            email
            bookCount
            savedBooks {
              title
            }
        }
        token
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addProfile(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;


export const SAVE_BOOK = gql`
  mutation saveBook($book: BookInput!) {
    saveBook(book: $book) {
        user {
            _id
            username
            email
            bookCount
            savedBooks {
              authors
              description
              title
              image
              link
            }
        }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
        user {
            _id
            username
            email
            bookCount
            savedBooks {
              authors
              description
              title
              image
              link
            }
        }
    }
  }
`;