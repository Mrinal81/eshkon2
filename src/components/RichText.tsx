import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface RichTextProps {
  content: any;
  className?: string;
}

const options = {};

const RichText: React.FC<RichTextProps> = ({ content, className }) => {
  return <div className={className}>{documentToReactComponents(content, options)}</div>;
};

export default RichText;