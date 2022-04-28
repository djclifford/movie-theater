import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/actions";

export function LandingPage() {
  const dispatch = useDispatch();
  const films = useSelector(state => state.films);
  const showings = useSelector(state => state.showings);

  const currentDate = new Date(useSelector(state => state.currentDate));
  const [film] = films;

  const styles = {
    pickDateWrapper: {
      backgroundColor: 'rgba(0,0,0,0.1',
      padding: '1em',
    },
    days: {
      color: 'rgba(0,0,0,0.75)',
      fontSize: '1.2em',
      padding: '1em',
      cursor: 'pointer',
    }
  }

  return (
    <>
      <section style={styles.header} className="mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title">
          <span className="mdl-card__title-text">Showings for {currentDate.toShowingDateString()}</span>
        </div>
        <div style={styles.pickDateWrapper}>
          {Date.getArrayOfDays(7).map(date => (
            <span style={styles.days} key={date}>{date.toShortDayOfWeekString()}</span>
          ))}
        </div>
      </section>
      <section style={styles.filmsWrapper}>
        {films.map(film => (
          <section key={film.id} style={styles.wrapper} className="mdl-card mdl-shadow--2dp">
            <div style={styles.innerWrapper}>
              <div style={styles.posterDiv}>
                <img src={film.poster_path} alt="" style={styles.poster} />
              </div>
              <div style={styles.textDiv}>
                <p style={styles.title}>{film.title}</p>
                <p style={styles.runtimeP}>{film.runtime}</p>
                <p style={styles.tagline}>{film.tagline}</p>
              </div>
            </div>
            <div style={styles.showings}>
              Showing times will go here
            </div>
          </section>

        ))}
      </section>
    </>
  );
}