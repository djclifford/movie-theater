import seatImage from './bundledImages/seat.png';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './store/actions';
import { useEffect } from 'react';

export function PickSeats() {
  const dispatch = useDispatch();

  let table = { id: 0, table_number: 0, x: 1, y: 1, seats: [] };
  let seat = { id: 0, seat_number: 0, price: 10.75 };
  const currentDate = new Date(useSelector(state => state.currentDate));
  let currentShowing = { id: 0, film_id: 0, theater_id: 0, showing_time: new Date() };
  let currentFilm = { title: "A Cool Movie" };
  let currentTheater = { id: 0, name: "Theater #1" };

  const styles = {
    seatWrapper: {
      margin: "5px",
    },
    seatItself: {
      backgroundImage: `url(${seatImage})`,
      backgroundSize: "100% 100%",
      width: "30px",
      height: "30px",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "10px 10px 0px 0px",
    },
  };

  let showingId = 1;
  useEffect(() => {
    dispatch(actions.fetchReservationsForShowing(showingId));
  }, [showingId]);

  function reserveSeat(seat) {
    console.log(seat);
    dispatch(actions.addSeatToCart(seat, currentShowing));
  }

  return (
    <section style={styles.header} className="mdl-card mdl-shadow--2dp">
      <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
        <h1 className="mdl-card__title-text">Where would you like to sit?</h1>
      </div>

      <p>Watching {currentFilm.title} in {currentTheater.name} on {currentDate.toShowingDateString()} at {currentDate.toShowingTimeString()}</p>
      <section style={styles.tablesSection}>
        <p>LIST OF TABLES WILL GO HERE</p>
        <p>Here is one table:</p>
        <div style={styles.wrapper}>
          <div style={styles.tableWrapper}>
            <div style={{ ...styles.tableItself }}>{table.table_number}</div>
          </div>
          <div style={styles.seatsWrapper}>
            <div style={styles.seatWrapper}>
              <div style={{ ...styles.seatItself }} onClick={reserveSeat}>
                {seat.seat_number}
              </div>
            </div>
          </div>
        </div>
      </section>
      <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={styles.submitButton} >Check out</button>
    </section>
  );
}