import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import Navbar from "./Components/Navbar";
import "./index.css";
import HeroSection from "./Components/HeroSection";
import Section from "./Components/Section";

const ENDPOINT = "https://qtify-backend-labs.crio.do/";

const App = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    axios
      .get(`${ENDPOINT}/albums/top`)
      .then((res) => {
        setTopAlbums(res.data);
      })
      .catch((error) => {
        console.error("Error fetching top albums:", error);
      });

    axios
      .get(`${ENDPOINT}/albums/new`)
      .then((res) => {
        setNewAlbums(res.data);
      })
      .catch((error) => {
        console.error("Error fetching new albums:", error);
      });
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <Section title="Top Albums" data={topAlbums} />
        <Section title="New Albums" data={newAlbums} />
      </div>
    </>
  );
};
export default App;
