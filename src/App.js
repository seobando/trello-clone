import "./App.css";
import { makeStyles } from "@material-ui/core";
import TrelloList from "./components/TrelloList";
import background_image from "./imagenes/car.jpg";
import AddCardOrList from "./components/AddCardOrList";

const useStyle = makeStyles((theme) => ({
  root: {
    minWidth:"100vw",
    minHeight: "100vh",
    overflowY: "auto",
    backgroundImage: `url(${background_image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  container: {
    display: "flex",
  },
}));

function App() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <TrelloList />
        <TrelloList />
        <TrelloList />
        <TrelloList />
        <TrelloList />
        <div><AddCardOrList type="list"/></div>
      </div>
    </div>
  );
}

export default App;
