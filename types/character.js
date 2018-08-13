import Url from './url';
import Image from './image';
import ComicList from './comicList';
import ComicSummary from './comicSummary';
import StoryList from './storyList';
import StorySummary from './storySummary';
import EventList from './eventList';
import EventSummary from './eventSummary';
import SeriesList from './seriesList';
import SeriesSummary from './seriesSummary';

const Character = `
type Character {
  id: String
  name: String
  description: String
  modified: String
  resourceUri: String
  urls: [Url]
  thumbnail: Image
  comics: ComicList
  stories: StoryList
  events: EventList
  series: SeriesList
}`;

// const Character = `
// type Character {
//   id: String
//   name: String
//   description: String
//   modified: String
//   resourceUri: String
// }`;

// export default Character;

export default () => [
	Character,
	Url,
	Image,
	...ComicList,
	...StoryList,
	...EventList,
	...SeriesList
];

// export default [
// 	Character,
// 	Url,
// 	Image,
// 	ComicList,
// 	ComicSummary,
// 	StoryList,
// 	StorySummary,
// 	EventList,
// 	EventSummary,
// 	SeriesList,
// 	SeriesSummary
// ];
