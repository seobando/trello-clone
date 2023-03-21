import { Paper, CssBaseline, makeStyles } from "@material-ui/core";
import AddCardOrList from "./AddCardOrList";
import ListTitle from "./ListTitle";
import TrelloCard from "./TrelloCard";

const useStyle = makeStyles((theme) => ({
  root: {
    minWidth: "300px",
    background: "#ebecf0",
    margin: theme.spacing(1),
  },
}));

const TrelloList = () => {
  const classes = useStyle();
  return (
    <Paper className={classes.root}>
      <CssBaseline />
      <ListTitle />
      <TrelloCard />
      <AddCardOrList />
    </Paper>
  );
};

export default TrelloList;
