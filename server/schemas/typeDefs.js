const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Integer
    savedBooks: [Book]
  }
  
  type Book {
    bookId:String
    authors: [Book]
    description:String
    title:String
    image:String
    link:String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(book: Book): User
    removeBook(book: Book): User
  }
`;

module.exports = typeDefs;