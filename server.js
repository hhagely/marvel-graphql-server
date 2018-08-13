import { ApolloServer } from 'apollo-server';
import { SchemaDefinition, RootQuery, resolvers } from './schema';
import Character from './types/character';

const server = new ApolloServer({
	typeDefs: [SchemaDefinition, RootQuery, Character],
	resolvers
	// formatError: (error) => {
	// 	console.log(`stack trace: ${error.extensions.exception.stacktrace}`);
	// }
});

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
