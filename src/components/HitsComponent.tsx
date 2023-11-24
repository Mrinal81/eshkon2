import React from 'react';
import { Hit } from 'react-instantsearch-core';
import Link from 'next/link';

interface ContentfulDataItem {
  objectID: string;
  title: string;
  content: string;
  slug: string;
  excerpt: string;
}

const HitsComponent: React.FC<{ hit: Hit<ContentfulDataItem> }> = ({ hit }) => {
  return (
    <div>
      <h2>
        <Link href={`/posts/${hit.slug}`}>
          <a>{hit.title}</a>
        </Link>
      </h2>
      <p>{hit.excerpt}</p>
    </div>
  );
};

export default HitsComponent;
