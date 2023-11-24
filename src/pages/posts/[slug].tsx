const contentful = require('contentful');

interface ContentfulItem {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    content: string;
    date: string;
    coverImage: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    author: string; 
    excerpt: string;
    slug: string;
  };
}

export const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export const fetchContentfulData = async () => {
  try {
    const response = await client.getEntries({ content_type: 'post' });
    return response.items.map((item: ContentfulItem) => ({
      objectID: item.sys.id,
      title: item.fields.title,
      content: item.fields.content,
      date: item.fields.date,
      image: item.fields.coverImage.fields.file.url,
      author: item.fields.author,
      excerpt: item.fields.excerpt,
      slug: item.fields.slug,
    }));
  } catch (error) {
    console.error('Error fetching Contentful data', error);
    return [];
  }
};
