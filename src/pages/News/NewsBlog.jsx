import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import NewsCard from "../../components/Card/NewsCard";
import { useParams } from 'react-router-dom'
import {Link} from "react-router-dom";
import { useEffect, useState } from 'react';

const NewsBlog = () => {
  const { id } = useParams()

  const [data, setAlldata] = useState([]); // <-- array
  let i = id

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch("http://localhost:1337/api/articles?populate=%2A")
      .then((response) => response.json())
      .then(({ data }) => setAlldata(data)); // <-- save the data array
  }, []);
;

  return (
    <main className="news_detail_page">
      <div className="cs_container">
        <div className="cs_row news_detail_row">
          <div className="news_detail_sec">
            {data.slice(i,i+1).map(data => // <-- map Alldata array
             <Fade bottom duration={1000} delay={100}>
        <h2>{data.attributes.Title}</h2>
        </Fade>
      )} 
      {data.slice(i,i+1).map(data => // <-- map Alldata array
             <Fade bottom duration={1000} delay={100}>
        <h4>{data.attributes.description}</h4>
        </Fade>
      )} 
           
            <Zoom bottom duration={1500} delay={150}>
              <div className="news_detail_img d_flex justify_content_center align_items_center">
              {data.slice(i,i+1).map(data =>
         <img
         src={`http://localhost:1337${data.attributes.media.data[0].attributes.formats.small.url}`} alt={data.title}
       />
       )}
              </div>
            </Zoom>
            <Fade bottom duration={1000} delay={200}>
              <p>
              The Grand Museum of Art has recently opened its doors to the public, showcasing an impressive collection of contemporary and classical artworks from around the world. With over 10,000 square meters of exhibition space and more than 1,000 pieces on display, the museum offers a rich cultural experience for visitors of all ages. The grand opening ceremony was attended by local and international dignitaries, including prominent artists, curators, and collectors. The museum is expected to attract millions of visitors annually and become a leading destination for art enthusiasts from around the globe.
              </p>
            </Fade>
          </div>
          <div className="news_detail_related_sec">
            <Fade top duration={1000} delay={120}>
              <h2>Related News</h2>
            </Fade>
            <div className="news_card_row">
              {[...new Array(0)].map((v, i) => (
                <div key={i} className="news_col">
                  <NewsCard
                    url="/news-blog"
                    data={{
                      img: "https://cdn.pixabay.com/photo/2018/04/05/23/59/nature-3294632_1280.jpg",
                      title: "21 Feburary 2019",
                      desc: "Impact Solar is ready to sell electricity to Haad Thip PCL",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewsBlog;
