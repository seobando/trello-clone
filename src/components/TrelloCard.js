import { makeStyles, Paper } from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";

const useStyle = makeStyles((theme) => ({
  trelloCard: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
  },
}));

const TrelloCard = ({ card, index }) => {
  const classes = useStyle();
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Paper className={classes.trelloCard}>{card.title}</Paper>
        </div>
      )}
    </Draggable>
  );
};

export default TrelloCard;
