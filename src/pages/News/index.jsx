import { Fade } from "react-reveal";
import "./style.css";
import news_bg from "../../assets/images/teambg.jpg";
import NewsCard from "../../components/Card/NewsCard";
import Rest_api from "./news_rest";
import { useEffect, useState } from 'react';

const News = () => {

  const [data, setAlldata] = useState([]); // <-- array


  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch("http://localhost:1337/api/articles?populate=%2A")
      .then((response) => response.json())
      .then(({ data }) => setAlldata(data)); // <-- save the data array
  }, []);
;
  return (
    <main className="news">
      <div
        className="img_content"
        style={{
          "--background": `url(${news_bg})`,
        }}
      >
        <div className="overlay"></div>
        <Fade top duration={1000}>
          <h2 className="text_primary">OUR NEWS</h2>
        </Fade>
      </div>
      <section className="cs_container">
        <div className="news_card_row">
        {data?.map((v, i) => (
            <div key={i} className="news_col">
              <NewsCard
                url="/news-blog"
                id={i}   
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default News;
