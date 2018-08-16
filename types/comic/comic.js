import TextObject from './textObject';
import Url from '../misc/url';
import SeriesSummary from '../misc/seriesSummary';
import ComicSummary from '../misc/comicSummary';
import ComicDate from './comicDate';
import ComicPrice from './comicPrice';
import CreatorList from './creatorList';
import CharacterList from '../misc/characterList';
import StoryList from '../misc/storyList';
import EventList from '../misc/eventList';
import Image from '../misc/image';

const Comic = `
  type Comic {
    id: Int,
    digitalId: Int,
    title: String,
    issueNumber: Float,
    variantDescription: String,
    description: String,
    modified: String,
    isbn: String,
    upc: String,
    diamondCode: String,
    ean: String,
    issn: String,
    format: String,
    pageCount: Int,
    textObjects: [TextObject],
    resourceURI: String,
    urls: [Url],
    series: SeriesSummary,
    variants: [ComicSummary],
    collections: [ComicSummary],
    collectedIssues: [ComicSummary],
    dates: [ComicDate],
    prices: [ComicPrice],
    thumbnail: Image,
    images: [Image],
    creators: CreatorList,
    characters: CharacterList,
    stories: StoryList,
    events: EventList
  }
`;

export default () => [
	Comic,
	TextObject,
	ComicDate,
	ComicPrice,
	...CreatorList,
	...CharacterList
];
