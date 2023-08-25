import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  let pageSize = 12;
  let country = "in";
  let apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <LoadingBar height={3} color="red" progress={progress} />

        <Routes>
          <Route
            path="/"
            exact
            element={
              <News
                setProgress={setProgress}
                key="/"
                pageSize={pageSize}
                apiKey={apiKey}
                countryName={country}
                category={"general"}
              />
            }
          ></Route>
          <Route
            path="business"
            exact
            element={
              <News
                setProgress={setProgress}
                key="business"
                pageSize={pageSize}
                apiKey={apiKey}
                countryName={country}
                category={"business"}
              />
            }
          ></Route>
          <Route
            path="/entertainment"
            exact
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                pageSize={pageSize}
                apiKey={apiKey}
                countryName={country}
                category={"entertainment"}
              />
            }
          ></Route>
          <Route
            path="/general"
            exact
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                apiKey={apiKey}
                countryName={country}
                category={"general"}
              />
            }
          ></Route>
          <Route
            path="/health"
            exact
            element={
              <News
                setProgress={setProgress}
                key="health"
                pageSize={pageSize}
                apiKey={apiKey}
                countryName={country}
                category={"health"}
              />
            }
          ></Route>
          <Route
            path="/science"
            exact
            element={
              <News
                setProgress={setProgress}
                key="science"
                pageSize={pageSize}
                apiKey={apiKey}
                countryName={country}
                category={"science"}
              />
            }
          ></Route>
          <Route
            path="/sports"
            exact
            element={
              <News
                setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
                apiKey={apiKey}
                countryName={country}
                category={"sports"}
              />
            }
          ></Route>
          <Route
            path="/technology"
            exact
            element={
              <News
                setProgress={setProgress}
                key="technology"
                pageSize={pageSize}
                apiKey={apiKey}
                countryName={country}
                category={"technology"}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
