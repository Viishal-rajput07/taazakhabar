import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Route, Routes} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route  path="/" exact element={<News key="general" pageSize={15} countryName={'in'} category={'general'} />}></Route>
            <Route  path="business" exact element={<News key="business" pageSize={15} countryName={'in'} category={'business'} />}></Route>
             <Route  path="/entertainment" exact element={<News key="entertainment" pageSize={15} countryName={'in'} category={'entertainment'} />}></Route>
            <Route  path="/general" exact element={<News key="general" pageSize={15} countryName={'in'} category={'general'} />}></Route>
            <Route  path="/health" exact element={<News key="health" pageSize={15} countryName={'in'} category={'health'} />}></Route>
            <Route  path="/science" exact element={<News key="science" pageSize={15} countryName={'in'} category={'science'} />}></Route>
            <Route  path="/sports" exact element={<News key="sports" pageSize={15} countryName={'in'} category={'sports'} />}></Route>
            <Route  path="/technology" exact element={<News key="technology" pageSize={15} countryName={'in'} category={'technology'} />}></Route> 
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
