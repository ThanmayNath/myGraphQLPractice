const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    password: String!
    email: String!
  }

  type Post {
    id: Int!
    userID: Int!
    title: String!
    description: String!
    path: String!
  }

  type Query {
    users: [User!]!
    user(id: Int!): User
    posts: [Post!]!
  }
`;

module.exports = { typeDefs };
