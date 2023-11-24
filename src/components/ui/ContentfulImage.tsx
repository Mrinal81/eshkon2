import Image from 'next/image';

interface ContentfulLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

const contentfulLoader = ({ src, width, quality }: ContentfulLoaderProps): string => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ContentfulImage = (props: React.ComponentProps<typeof Image>): JSX.Element => {
  return <Image loader={contentfulLoader} {...props} />;
};

export default ContentfulImage;
