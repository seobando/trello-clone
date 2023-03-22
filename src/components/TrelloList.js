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

const TrelloList = ({ list }) => {
  const classes = useStyle();
  return (
    <Paper className={classes.root}>
      <CssBaseline />
      <ListTitle title={list.title} listId={list.id}/>
      {list.cards.map((card) => (
        <TrelloCard card={card} key={card.id} />
      ))}
      <AddCardOrList type="card" />
    </Paper>
  );
};

export default TrelloList;
