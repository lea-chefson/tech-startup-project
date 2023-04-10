import {Link} from "react-router-dom";
import { useEffect, useState } from 'react';

const NewsCard = ({ props, id, url }) => {
  const [data, setAlldata] = useState([]); // <-- array
  let i = id

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch("http://localhost:1337/api/articles?populate=%2A")
      .then((response) => response.json())
      .then(({ data }) => setAlldata(data)); // <-- save the data array
  }, []);
;


{/*http://localhost:1337/api/articles?populate=%2A${data.attributes.formats.thumbnail.url}*/}

  return (
    <div className="news_wrap">
    <Link to={`/news-blog/${i}`} className="news_card">
       {data.slice(i,i+1).map(data =>
         <img
         src={`http://localhost:1337${data.attributes.media.data[0].attributes.formats.small.url}`} alt={data.title}
       />
       )}
       
      <div className="news_card_content">
        {data.slice(i,i+1).map(data => // <-- map Alldata array
        <h2>{data.attributes.Title}</h2>
      )}
      {data.slice(i,i+1).map(data => // <-- map Alldata array
         <p>{data.attributes.description}</p>
      )}
      </div>
    </Link>
    </div>
  );
};

export default NewsCard;
