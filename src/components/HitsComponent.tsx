import Link from 'next/link';
const HitsComponent = ({ hit}) => {

    
    return (
            <div className="algo">
                <p>{hit.title}</p>
            </div>
    );
  };
  
  export default HitsComponent;