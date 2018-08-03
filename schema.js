import Character from './types/character';
import { makeExecutableSchema } from './node_modules/graphql-tools';

const RootQuery = `
  type RootQuery {
    character(id: Int): Character
  }
`;

const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`;

const resolvers = {};

export default makeExecutableSchema({
	typeDefs: [SchemaDefinition, RootQuery, Character],
	resolvers: {}
});
