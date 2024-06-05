export default function MangaInput(props) {
  const {
    handleAddManga,
    mangaValue,
    setMangaValue,
    posterUrl,
    setPosterUrl,
    description,
    setDescription,
    releaseDate,
    setReleaseDate,
  } = props;

  return (
    <header>
      <div className="input-container">
        <input
          required
          value={mangaValue}
          onChange={(e) => setMangaValue(e.target.value)}
          placeholder="Entrez le titre du manga"
        />
        <br />
        <input
          value={posterUrl}
          onChange={(e) => setPosterUrl(e.target.value)}
          placeholder="Entrez l'URL du poster"
        />
        <br />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Entrez la description"
        />
        <br />
        <input
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
          placeholder="Entrez la date de sortie"
        />
        <br />
        <button onClick={handleAddManga}>Ajouter</button>
      </div>
    </header>
  );
}
