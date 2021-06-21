import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";
import Footer from "./components/Footer";
import ParticlesBackground from "./ParticleBackground";

function App() {
  const [pages] = useState([
    {
      name: "about me",
    },
    { name: "portfolio" },
    { name: "contact" },
    {
      name: "resume",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <ParticlesBackground />
      <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      }}
      >
        <Header>
          <Nav
            pages={pages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          ></Nav>
        </Header>
        <main>
          <Page currentPage={currentPage}></Page>
        </main>
        <Footer />
      </div>  
    </div>
  );
}

export default App;
