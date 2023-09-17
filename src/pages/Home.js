import React , {useEffect,useState} from 'react';
import axios from 'axios';
import Search from '../components/Search';

function Home() {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.punkapi.com/v2/beers')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);


  if (loading) {
    return <div>Loading...</div>;
  }
  

  return (

    <>
    <Search data={data} />  

      </>
  );
}

export default Home;
