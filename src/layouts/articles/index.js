import axios from "axios";
import { uid } from "uid";
import { createContext, useEffect, useState } from "react";

import { changeDateFormat, dateToMonthBefore } from "../../helpers";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArticleCard from "../../components/ArticleCard";
import FilterBar from "../FilterBar";

import "./index.css";
import { Button } from "react-bootstrap";
import ArticleHeroCard from "../../components/ArticleHeroCard";
import SideNav from "../SideNav";

export const linkContext = createContext();

function Articles({ query }) {
  const [newsApiInitialState, setNewsApiInitialState] = useState({
    q: query,
    from: dateToMonthBefore(new Date().toLocaleDateString()),
    to: changeDateFormat(new Date().toLocaleDateString()),
    sortBy: "relevancy",
    language: " ",
    searchIn: "title",
    domains: "",
    excludedDomains: "",
  });
  const [articles, setArticles] = useState([]);
  const [readMore, setReadMore] = useState(11);

  const urlFormatter = ({ q, from, to, language, searchIn, sortBy }) => {
    return (
      "https://newsapi.org/v2/everything?" +
      `q=${q}&` +
      `from=${from}&` +
      `to=${to}&` +
      `language=${language}&` +
      `searchIn=${searchIn}&` +
      `sortBy=${sortBy}&` +
      `apiKey=${process.env.REACT_APP_NewsAPI_Key}`
    );
  };

  const [url, setUrl] = useState(urlFormatter(newsApiInitialState));

  async function getRequest(URL) {
    await axios.get(URL).then((res) => {
      setArticles(res.data.articles);
      return;
    });

    return;
  }
  useEffect(() => {
    setNewsApiInitialState((pre) => {
      return { ...pre, q: query };
    });
  }, [query]);

  useEffect(() => {
    setUrl(urlFormatter(newsApiInitialState));
  }, [newsApiInitialState]);

  useEffect(() => {
    getRequest(url);
  }, [url]);

  const incrementReadMore = () => {
    const incrementValue = 12;

    setReadMore((pre) => {
      if (articles.length - pre > incrementValue) {
        return pre + incrementValue;
      } else {
        return articles.length - 1;
      }
    });
  };

  const articlesClone = articles.slice();

  return (
    <Row>
      <Row>
        <linkContext.Provider
          value={{ setNewsApiInitialState: setNewsApiInitialState }}
        >
          <SideNav />
          <FilterBar />
        </linkContext.Provider>
      </Row>
      {!articlesClone.length && <div>No articles Found</div>}
      <Col>
        <Row>
          {articlesClone.splice(0, readMore).map((article, index) => {
            if (index === 0) {
              return (
                <Col
                  key={uid()}
                  xs={12}
                  md={12}
                  lg={8}
                  xl={6}
                  className="newsCard"
                >
                  <ArticleHeroCard
                    image={articlesClone[0].urlToImage}
                    title={articlesClone[0].title}
                    content={articlesClone[0].content}
                    url={articlesClone[0].url}
                  />
                </Col>
              );
            } else {
              return (
                <Col
                  key={uid()}
                  xs={12}
                  md={6}
                  lg={4}
                  xl={3}
                  className="newsCard"
                >
                  <ArticleCard
                    image={article.urlToImage}
                    title={article.title}
                    content={article.content}
                    url={article.url}
                  />
                </Col>
              );
            }
          })}
        </Row>
      </Col>

      <Row>
        <Col>
          {readMore >= articles.length - 1 || (
            <Button onClick={incrementReadMore} className="readMore">
              Read More
            </Button>
          )}
        </Col>
      </Row>
    </Row>
  );
}

export default Articles;
