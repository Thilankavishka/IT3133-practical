import React from "react";
import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { sculptureList } from "./assets/data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "./components/Title";
import Photo from "./components/Photo";
import Artist from "./components/Artist";
import Description from "./components/Description";
import Buttons from "./components/Buttons";
import Darkmood from "./components/Darkmood";

function App() {
  const [index, setIndex] = useState(0);
  const [theme, setTheme] = useState(false);

  function nextTitle() {
    if (index > sculptureList.length - 2) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function previouseTitle() {
    if (index < 1) {
      setIndex(sculptureList.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function firstelement() {
    setIndex(0);
  }
  function lastelement() {
    setIndex(sculptureList.length - 1);
  }

  const handleTheme = () => {
    setTheme((pre) => !pre);
  };
  return (
    <div className={`${theme ? "bg-dark text-white" : "bg-white"}`}>
      <div className="absolute d-flex justify-content-end">
        <Darkmood handleTheme={handleTheme} />
      </div>
      <Row>
        <Title passtitle={sculptureList[index].name}></Title>
      </Row>
      <Row>
        <Col>
          <Photo passimage={sculptureList[index].url}></Photo>
        </Col>
        <Col>
          <Artist passArtistName={sculptureList[index].artist}></Artist>
          <Description
            passdescription={sculptureList[index].description}
          ></Description>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Buttons
          passnextfunc={nextTitle}
          passpreviousefunc={previouseTitle}
          passfirstelementfunc={firstelement}
          passlastelementfunc={lastelement}
        ></Buttons>
      </Row>
    </div>
  );
}

export default App;
