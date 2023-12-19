import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import "./App.css";
import Home from "@p/Home";
import DefaultLayout from "./components/Layout/DefaultLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import snowImg from './assets/snow.png'
import Snowfall from "react-snowfall";
const snowflake1 = document.createElement('img')
snowflake1.src = snowImg
const images = [snowflake1, snowflake1]
console.log(images);
function App() {
  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          
          position: "relative",
        }}
      >
        <Router>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Layout = route.layout || DefaultLayout;
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </Router>
        <Snowfall color="#1b2a31" snowflakeCount="100" radius={[ 5.0, 7.0]} images={images}/>
      </div>
    </>
  );
}

export default App;
