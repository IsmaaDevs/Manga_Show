export default function MangaCard({ manga, handleDelete }) {
  return (
    <div
      className="mangaItem"
      style={{ backgroundImage: `url(${manga.posterUrl})` }}
    >
      <div className="mangaDetails">
        <h3>{manga.title}</h3>
        <p>{manga.description}</p>
        <p>Release Date: {manga.releaseDate}</p>
        <div className="actionsContainer">
          <button onClick={handleDelete}>Supprimer</button>
        </div>
      </div>
    </div>
  );
}
