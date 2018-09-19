import axios from 'axios';
import { ts, hash, apikey } from './config';

import { AuthenticationError } from 'apollo-server';

export const RootQuery = `
	type Query {
		getCharacters(nameStartsWith: String, limit: Int, offset: Int): CharacterDataWrapper,
		getCharacter(characterId: Int): CharacterDataWrapper,
		getComics(titleStartsWith: String, limit: Int, offset: Int): ComicDataWrapper,
		getComic(comicId: Int): ComicDataWrapper,
		getEvents(nameStartsWith: String, limit: Int, offset: Int): EventDataWrapper,
		getEvent(eventId: Int): EventDataWrapper,
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
		getCharacters: (
			parent,
			{ nameStartsWith, limit, offset },
			context,
			info
		) => {
			return axios
				.get('http://gateway.marvel.com/v1/public/characters', {
					params: {
						ts,
						apikey,
						hash,
						limit,
						nameStartsWith,
						offset
					}
				})
				.then((response) => {
					console.log(response.data);
					return response.data;
				})
				.catch((err) => {
					console.log(err);
				});
		},
		getCharacter: (parent, { characterId }, context, info) => {
			return axios
				.get(`http://gateway.marvel.com/v1/public/characters/${characterId}`, {
					params: {
						ts,
						apikey,
						hash
					}
				})
				.then((response) => {
					console.log(response.data);
					return response.data;
				})
				.catch((err) => {
					console.log(err);
				});
		},
		getComics: (parent, { titleStartsWith, limit, offset }, context, info) => {
			return axios
				.get('http://gateway.marvel.com/v1/public/comics', {
					params: {
						ts,
						apikey,
						hash,
						limit,
						titleStartsWith,
						offset
					}
				})
				.then((response) => {
					console.log(response.data);
					return response.data;
				})
				.catch((err) => {
					console.log(err);
				});
		},
		getComic: (parent, { comicId }, context, info) => {
			return axios
				.get(`http://gateway.marvel.com/v1/public/comics/${comicId}`)
				.then((response) => {
					console.log(response.data);
					return response.data;
				})
				.catch((err) => {
					console.log(err);
				});
		},
		getEvents: (parent, { nameStartsWith, limit, offset }, context, info) => {
			return axios
				.get('http://gateway.marvel.com/v1/public/events', {
					params: {
						ts,
						apikey,
						hash,
						limit,
						nameStartsWith,
						offset
					}
				})
				.then((response) => {
					console.log(response.data);
					return response.data;
				})
				.catch((err) => {
					console.log(err);
				});
		},
		getEvent: (parent, { eventId }, context, info) => {
			return axios
				.get(`http://gateway.marvel.com/v1/public/events/${eventId}`)
				.then((response) => {
					console.log(response.data);
					return response.data;
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
