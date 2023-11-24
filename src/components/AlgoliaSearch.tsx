import { useState, useEffect } from 'react';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch';
import { fetchContentfulData } from '../lib/contentful/client';
import HitsComponent from './HitsComponent';

interface ContentfulDataItem {
  objectID: string;
  title: string;
  content: string;
  slug: string;
  excerpt: string;
}

let counter = 0;

function generateUniqueID() {
  counter += 1;
  return `generatedID_${counter}`;
}

const AlgoliaSearch: React.FC = () => {
  const [searchState, setSearchState] = useState({});
  const [contentfulData, setContentfulData] = useState<ContentfulDataItem[]>([]);
  const [searchResults, setSearchResults] = useState<ContentfulDataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchContentfulData();
      setContentfulData(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (contentfulData.length > 0) {
      const client = algoliasearch(
        process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
        process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_API_KEY || ''
      );

      const index = client.initIndex(process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || '');

      // Update or save objects in the index
      const objectsToSave = contentfulData.map((item) => {
        // Ensure each item has a unique objectID
        if (!item.objectID) {
          item.objectID = generateUniqueID(); // Implement your own function
        }
        return item;
      });

      index
        .saveObjects(objectsToSave)
        .then((response) => {
          console.log('Objects saved:', response);
        })
        .catch((error) => {
          console.error('Error saving objects to Algolia:', error);
        });
    }
  }, [contentfulData]);

  return (
    <InstantSearch
      searchClient={algoliasearch(
        process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
        process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY || ''
      )}
      indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || ''}
      searchState={searchState}
      onSearchStateChange={(searchState) => setSearchState(searchState)}
    >
      <SearchBox
        onSubmit={(event) => {
          const query = event.currentTarget.value;
          const results = contentfulData.filter((post) =>
            post.title.toLowerCase().includes(query.toLowerCase())
          );
          setSearchResults(results);
        }}
      />
      <Hits<ContentfulDataItem> hitComponent={HitsComponent} />
    </InstantSearch>
  );
};

export default AlgoliaSearch;
