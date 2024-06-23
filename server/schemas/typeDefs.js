const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]!
  }

  type Book {
    bookId: ID!
    description: String!
    authors: [String]
    title: String!
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }
    input BookInput {
    bookId: ID!
    description: String!
    authors: [String]
    title: String!
    image: String
    link: String
    }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(book: BookInput!): User
    removeBook(BookId: ID!): User
  }
`;

module.exports = typeDefs;
