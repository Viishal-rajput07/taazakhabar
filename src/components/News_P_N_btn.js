import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";


export class News extends Component {

   CapitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: false,
    };
    document.title = `${this.CapitalizeFirstLetter(this.props.category)} - TaazaKhabar`
  }
  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.category}&apiKey=d393bd8cc8574ba1bc80805a10849067&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
  this.updateNews()
   }

  render() {
    const handlePrevClick = async () => {
      this.setState({page: this.state.page - 1});
      this.updateNews();
    };
    const handleNextClick = async () => {
      this.setState({page: this.state.page + 1});
      this.updateNews();
    };

    return (
      <div className="container m-auto my-5">
        <h1 className="text-center">Stay Updated with {('TaazaKhabar').toUpperCase()}</h1>
        <h2 className="text-center">Top {this.CapitalizeFirstLetter(this.props.category)} HeadLines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={
                      element.description
                        ? element.description
                        : ""
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
        <div className="my-3 container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark btn-sm"
            onClick={handlePrevClick}>
          
            &larr; Previous
          </button>
          <button 
          disabled={this.state.page + 1 >Math.ceil(this.state.totalResults / this.props.pageSize)}
          className="btn btn-dark btn-sm"
          onClick={handleNextClick}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
