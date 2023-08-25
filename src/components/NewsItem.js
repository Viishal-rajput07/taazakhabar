import React from "react";

export const NewsItem =(props) =>{
  
    let { title, description, imageUrl, newsUrl, author, publishedAt } = props;
    let d = new Date();
    return (
      <div className="container">
        <div className="card my-3">
          <img
            src={
              !imageUrl
                ? "https://www.livemint.com/lm-img/img/2023/08/21/600x338/US_dollars_1687198939824_1692622129582.jpg"
                : imageUrl
            }
            className="card-img-top "
            alt="d"
          />
          <div className="card-body">
            <h5 className="card-title text-center">{title}</h5>
            
            <p className="card-text">{description}...</p>
            <h5><span className="badge bg-secondary">On: {d.toUTCString(publishedAt)}</span></h5>
            <p><span className="badge bg-secondary">By: {!author?'UnKnown': author}</span></p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-dark btn-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
