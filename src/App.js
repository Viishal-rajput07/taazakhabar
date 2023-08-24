import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Route, Routes} from "react-router-dom";

class App extends Component {
  render() {
    let pageSize = 12
    let country = 'us'
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route  path="/" exact element={<News key="/" pageSize={pageSize} countryName={country} category={'general'} />}></Route>
            <Route  path="business" exact element={<News key="business" pageSize={pageSize} countryName={country} category={'business'} />}></Route>
             <Route  path="/entertainment" exact element={<News key="entertainment" pageSize={pageSize} countryName={country} category={'entertainment'} />}></Route>
            <Route  path="/general" exact element={<News key="general" pageSize={pageSize} countryName={country} category={'general'} />}></Route>
            <Route  path="/health" exact element={<News key="health" pageSize={pageSize} countryName={country} category={'health'} />}></Route>
            <Route  path="/science" exact element={<News key="science" pageSize={pageSize} countryName={country} category={'science'} />}></Route>
            <Route  path="/sports" exact element={<News key="sports" pageSize={pageSize} countryName={country} category={'sports'} />}></Route>
            <Route  path="/technology" exact element={<News key="technology" pageSize={pageSize} countryName={country} category={'technology'} />}></Route> 
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
