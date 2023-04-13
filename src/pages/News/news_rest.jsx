import axios from 'axios';
import { useEffect, useState } from 'react';

const Rest_api = () => {
 const [data, setAlldata] = useState([]); // <-- array

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch("http://localhost:1337/api/articles/")
      .then((response) => response.json())
      .then(({ data }) => setAlldata(data)); // <-- save the data array
  }, []);
var i = 1
  console.log(data);
  return (
    <div>
      {data.slice(i,i+1).map(data => // <-- map Alldata array
        <p>{data.attributes.Title}</p>
      )}
    </div>
  );
}
    
    export default Rest_api;