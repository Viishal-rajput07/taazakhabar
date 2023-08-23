import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.category}&apiKey=d393bd8cc8574ba1bc80805a10849067&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  render() {
    const handlePrevClick = async () => {
      console.log("prev");
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.category}&apiKey=d393bd8cc8574ba1bc80805a10849067&page=${
        this.state.page - 1
      }&pagesize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading: false,
      });
    };
    const handleNextClick = async () => {
      console.log("Next");
      if (
        !(
          this.state.page + 1 >
          Math.ceil(this.state.totalResults / this.props.pageSize)
        )
      ) {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.category}&apiKey=d393bd8cc8574ba1bc80805a10849067&page=${
          this.state.page + 1
        }&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles,
          loading: false,
        });
      }
    };

    return (
      <div className="container m-auto my-5">
        <h1 className="text-center">Stay Updated with TaazaKhabar</h1>
        <h2 className="text-center">Top Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 50) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 100)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="my-3 container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark btn-sm"
            onClick={handlePrevClick}
          >
            &larr; Previous
          </button>
          <button className="btn btn-dark btn-sm" onClick={handleNextClick}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
