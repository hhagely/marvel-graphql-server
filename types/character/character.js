import Url from '../misc/url';
import Image from '../misc/image';
import ComicList from '../misc/comicList';
import StoryList from '../misc/storyList';
import EventList from '../misc/eventList';
import SeriesList from '../misc/seriesList';

const Character = `
type Character {
  id: Int
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

export default () => [
	Character,
	Url,
	Image,
	...ComicList,
	...StoryList,
	...EventList,
	...SeriesList
];
