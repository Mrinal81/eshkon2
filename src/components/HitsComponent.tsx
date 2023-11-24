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
    <div className='algo'>
          <h3>{hit.title}</h3>
    </div>
  );
};

export default HitsComponent;