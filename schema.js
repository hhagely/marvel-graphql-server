import axios from 'axios';
import { ts, hash, apikey } from './config';

import Character from './types/character';
import { AuthenticationError } from 'apollo-server';

export const RootQuery = `
	type Query {
		getCharacters: [Character]
		authenticationError: String
	}
`;

export const SchemaDefinition = `
	schema {
		query: Query
	}
`;

export const resolvers = {
	Query: {
		getCharacters: (parent, args, context, info) => {
			return axios
				.get('http://gateway.marvel.com/v1/public/characters', {
					params: {
						ts,
						apikey,
						hash
						// limit: 50
						// nameStartsWith
					}
				})
				.then((response) => {
					console.log(response.data.data.results);
					return response.data.data.results;
				})
				.catch((err) => {
					console.log(err);
				});
		},
		authenticationError: (parent, args, context) => {
			throw new AuthenticationError();
		}
	}
};
