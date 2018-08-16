import { ApolloServer } from 'apollo-server';
import { SchemaDefinition, RootQuery, resolvers } from './schema';
import CharacterDataWrapper from './types/character/characterDataWrapper';
import ComicDataWrapper from './types/comic/comicDataWrapper';
import EventDataWrapper from './types/event/eventDataWrapper';

const server = new ApolloServer({
	typeDefs: [
		SchemaDefinition,
		RootQuery,
		CharacterDataWrapper,
		ComicDataWrapper,
		EventDataWrapper
	],
	resolvers
	// formatError: (error) => {
	// 	console.log(`stack trace: ${error.extensions.exception.stacktrace}`);
	// }
});

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
