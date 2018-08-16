const Event = `
  type Event {
    id: Int,
    title: String,
    description: String,
    resourceURI: String,
    urls: [Url],
    modified: String,
    start: String,
    end: String,
    thumbnail: Image,
    comics: ComicList,
    stories: StoryList,
    series: SeriesList,
    characters: CharacterList,
    creators: CreatorList,
    next: EventSummary,
    previous: EventSummary
  }
`;

export default Event;
