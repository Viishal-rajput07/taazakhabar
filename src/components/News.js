import React, {useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

const News= (props)=>{

const [articles, setArticles] = useState([])
const [page, setPage] = useState(1)
const [loading, setLoading] = useState(true)
const [totalResults, setTotalResults] = useState(0)


const CapitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

  const updateNews= async() =>{
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.countryName}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    setLoading(true );
    let data = await fetch(url);
    props.setProgress(30)
    let parsedData = await data.json();
    props.setProgress(70)
      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
    props.setProgress(100)
  }

  useEffect(()=>{
      document.title = `${CapitalizeFirstLetter( props.category)} - TaazaKhabar`;
      updateNews();
  })


  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.countryName}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
  };


    return (
      <>
        <h1 className="text-center" style={{marginTop: '30px'}}>
          Stay Updated with {"TaazaKhabar".toUpperCase()}
        </h1>
        <h2 className="text-center" style={{marginBottom: '50px'}}>
          Top {CapitalizeFirstLetter(props.category)} HeadLines
        </h2>
        {/* {loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={ <Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      publishedAt={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
            }

News.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 12,
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
