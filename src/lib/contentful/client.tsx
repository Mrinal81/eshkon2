const contentful = require('contentful');

export const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});


export const fetchContentfulData = async () => {
  try {
    const response = await client.getEntries({ content_type: 'post' });
    return response.items.map((item) => ({
      objectID: item.sys.id,
      // Add other fields you want to search here
      title: item.fields.title,
      content: item.fields.content,
      date: item.fields.date,
      image: item.fields.coverImage,
      author: item.fields.author,
      excerpt: item.fields.excerpt,
      slug: item.fields.slug
    }));
  } catch (error) {
    console.error('Error fetching Contentful data', error);
    return [];
  }
};