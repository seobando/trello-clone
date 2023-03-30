import { Paper, CssBaseline, makeStyles } from "@material-ui/core";
import { Draggable, Droppable } from "react-beautiful-dnd";
import AddCardOrList from "./AddCardOrList";
import ListTitle from "./ListTitle";
import TrelloCard from "./TrelloCard";

const useStyle = makeStyles((theme) => ({
  root: {
    minWidth: "300px",
    background: "#ebecf0",
    margin: theme.spacing(1),
  },
  taksList:{
    padding: "8px",
    transition: "background-color 0.2s ease",
    flexGrow: "1",
    minHeight: "100px",
  }
}));

const TrelloList = ({ list, index }) => {
  const classes = useStyle();
  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps}>
          <Paper className={classes.root} {...provided.dragHandleProps}>
            <CssBaseline />
            <ListTitle title={list.title} listId={list.id} />
            <Droppable droppableId={list.id} type="card">
              {(provided) => (
                <div className={classes.taksList} ref={provided.innerRef} {...provided.droppableProps}>
                  {list.cards.map((card, index) => (
                    <TrelloCard card={card} key={card.id} index={index} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <AddCardOrList type="card" listId={list.id} />
          </Paper>
        </div>
      )}
    </Draggable>
  );
};

export default TrelloList;
