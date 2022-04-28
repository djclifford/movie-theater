import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/actions";


export const Login = () => {
  const dispatch = useDispatch();
  
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordButtonText, setShowPasswordButtonText] = useState("Show");

  function login(e) {
    e.preventDefault();
    dispatch(actions.login(
      e.target['email'].value, e.target['password'].value));
  }

  return (
    <section style={styles.wrapper} className="mdl-card mdl-shadow--2dp">
      <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
        <h1 className="mdl-card__title-text">Login</h1>
      </div>
      <div className="mdl-card__supporting-text">
        <div>
          <p>First time user? <a href="/account">Register</a></p>
        </div>
        <form onSubmit={login}>

          <div style={styles.inputDivs}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={styles.inputDivs}>
              <input id="email" className="mdl-textfield__input" />

              <label className="mdl-textfield__label" htmlFor="email">Email</label>
            </div>
          </div>

          <div style={styles.inputDivs}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={styles.inputDivs}>
              <input id="password" className="mdl-textfield__input" type={showPassword ? "text" : "password"} />
              <label className="mdl-textfield__label" htmlFor="password">Password</label>
            </div>
          </div>

          <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
            onClick={() => {
              setShowPassword(!showPassword);
              setShowPasswordButtonText(showPassword ? "Show" : "Hide");
            }
            }>
            {showPasswordButtonText}
          </button>

          <input type="submit" value="Login" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={styles.submitButton} />

        </form>
      </div>
    </section>
  );
}
const styles = {};