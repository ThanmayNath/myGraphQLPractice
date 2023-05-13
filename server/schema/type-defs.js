const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    password: String!
    email: String!
  }

  type Query {
    users: [User!]!
    user(id: Int!): User
  }
`;

module.exports = { typeDefs };
