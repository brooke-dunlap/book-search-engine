const typeDefs = `
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        bookCount: Int
        savedBooks [Book]
    }

    type Book {
        bookId: String!
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    input BookInput {
        bookId: String!
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type Auth {
        token: String!
        user: User!
    }
    
    type Query {
        me: User
    }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: bookInput!): User
        removeBook(bookdId: String!): User
    }
`;


module.exports = typeDefs;

