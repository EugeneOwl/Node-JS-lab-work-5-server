const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    tasks(filter: String = ""): [Task]
    login(username: String!, password: String!): Login
    isAuthorized(token: String!): Boolean
  }
  
  type Login {
    token: String!
  }

  type Task {
    name: String
    status: String
    date_created: String
    time_created: String
    file: String
  }
`);

export { schema }
