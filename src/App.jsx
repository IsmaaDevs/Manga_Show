import { useState, useEffect } from "react";
import MangaInput from "./components/MangaInput";
import MangaList from "./components/MangaList";
import mangaData from "./database/bdd.json";

function App() {
  const [mangas, setMangas] = useState([]);
  const [mangaValue, setMangaValue] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [description, setDescription] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  useEffect(() => {
    const storedMangas = localStorage.getItem("mangas");
    if (storedMangas) {
      setMangas(JSON.parse(storedMangas).mangas);
    } else {
      setMangas(mangaData.mangas);
    }
  }, []);

  function persistData(newList) {
    localStorage.setItem("mangas", JSON.stringify({ mangas: newList }));
  }

  function handleAddManga() {
    const newManga = {
      title: mangaValue,
      posterUrl: posterUrl,
      description: description,
      releaseDate: releaseDate,
    };
    const newMangaList = [...mangas, newManga];
    persistData(newMangaList);
    setMangas(newMangaList);
    setMangaValue("");
    setPosterUrl("");
    setDescription("");
    setReleaseDate("");
  }

  function handleDeleteManga(index) {
    const newMangaList = mangas.filter(
      (manga, mangaIndex) => mangaIndex !== index
    );
    persistData(newMangaList);
    setMangas(newMangaList);
  }

  return (
    <>
      <MangaInput
        mangaValue={mangaValue}
        setMangaValue={setMangaValue}
        posterUrl={posterUrl}
        setPosterUrl={setPosterUrl}
        description={description}
        setDescription={setDescription}
        releaseDate={releaseDate}
        setReleaseDate={setReleaseDate}
        handleAddManga={handleAddManga}
      />
      <MangaList handleDeleteManga={handleDeleteManga} mangas={mangas} />
    </>
  );
}

export default App;
