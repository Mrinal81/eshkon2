// import Search from '../components/Search';

interface HomepageProps {
  onSearch: (query: string) => void;
}

const Homepage: React.FC<HomepageProps> = () => {
  return (
    <div className='th'>
      <h1 className="title-heading">
        <p>Click On Post to see Blogs </p>
        {/* <Search  /> */}
      </h1>
    </div>
  );
};

export default Homepage;
