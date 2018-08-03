import Url from './url';
import ComicList from './comicList';
import StoryList from './storyList';
import EventList from './eventList';
import SeriesList from './seriesList';

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

export default [
	Character,
	Url,
	Image,
	ComicList,
	StoryList,
	EventList,
	SeriesList
];
