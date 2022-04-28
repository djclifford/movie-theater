import { useSelector } from "react-redux";

export const FilmDetails = () => {
  const films = useSelector(state => state.films);
  const showings = useSelector(state => state.showings);
  const currentDate = new Date(useSelector(state => state.currentDate));
  const film = films[0] || {};

  return (
    <>
      <div style={{ ...styles.container }} className='mdl-card mdl-shadow--2dp'>
        <div style={{}}>
          <h1>{film.title}</h1>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '1 1 30%' }}>
            <img src={FilmDetails.poster} alt="" style={styles.poster} />
          </div>
          <div style={{ flex: '1 1 70%' }}>
            <h1>{film.title}</h1>
            <h2>{film.tagline}</h2>
            <p>{film.overview}</p>
            <p>Viewer's ratings: <span>Vote_average</span> / <span>Vote_count</span></p>
            <p>{film.release_date}</p>
            <p>{film.runtime}</p>
            <a href="HOMEPAGE" target="movie_site">{film.homepage}</a>
            Pick dates will go here
            Showing times will go here
          </div>
        </div>
      </div>
    </>
  );
}
const styles = {};