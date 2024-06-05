import MangaCard from "./MangaCard";

export default function MangaList({ mangas, handleDeleteManga }) {
  return (
    <div className="main">
      {mangas.map((manga, index) => (
        <MangaCard
          key={index}
          manga={manga}
          handleDelete={() => handleDeleteManga(index)}
        />
      ))}
    </div>
  );
}
