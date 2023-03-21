import "./App.css";
import { makeStyles } from "@material-ui/core";
import TrelloList from "./components/TrelloList";

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    overflowY: "auto",
  },
  container:{
    display:"flex"
  }
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
      </div>
    </div>
  );
}

export default App;
