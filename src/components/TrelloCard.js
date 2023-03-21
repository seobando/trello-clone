import { makeStyles, Paper } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  trelloCard: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
  },
}));

const TrelloCard = () => {
  const classes = useStyle();
  return (
    <div>
      <Paper className={classes.trelloCard}>Card</Paper>
    </div>
  );
};

export default TrelloCard;
