import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";

function MainNav() {
  return (
    <header>
      <div className={classes.logo}>Øen:AudioPlayer</div>
      <nav className={classes.nav}>
        <div className={classes.links}>|</div>
        <Link to="/" className={classes.links}>
          Audio.Player
        </Link>
        <div className={classes.links}>|</div>
        <Link to="/List" className={classes.links}>
          Audio.List
        </Link>
        <div className={classes.links}>|</div>
      </nav>
    </header>
  );
}

export default MainNav;
