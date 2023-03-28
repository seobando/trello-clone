import "./App.css";
import { makeStyles } from "@material-ui/core";
import TrelloList from "./components/TrelloList";
import background_image from "./imagenes/car.jpg";
import AddCardOrList from "./components/AddCardOrList";
import mockData from "./mockdata.js";
import React, { useState } from "react";
import ContextAPI from "./ContextAPI";
import uuid from "react-uuid";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const useStyle = makeStyles((theme) => ({
  root: {
    minWidth: "100vw",
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
  const [data, setData] = useState(mockData);

  const updateListTitle = (updatedTitle, listId) => {
    const list = data.lists[listId];
    list.title = updatedTitle;
    setData({
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    });
  };

  const addCard = (title, listId) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title: title,
    };
    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];
    setData({
      ...data,
      list: {
        ...data.lists,
        [listId]: list,
      },
    });
  };
  const addList = (title) => {
    const newListId = uuid();
    setData({
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: {
          id: newListId,
          title: title,
          cards: [],
        },
      },
    });
  };

  const onDragEnd = (result) => {
    const {
      destination,
      destination: { droppableId: destdroppableId, index: destIndex },
      source,
      source: { droppableId: sourcedroppableId, index: sourceIndex },
      draggableId,
      type,
    } = result;
    console.table([
      {
        sourcedroppableId,
        destdroppableId,
        draggableId,
      },
    ]);

    console.table([
      {
        type,
        sourceIndex,
        destIndex,
      },
    ]);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }    

    if (type === "list") {
      const newListIds = data.listIds;
      newListIds.splice(sourceIndex, 1);
      newListIds.splice(destIndex, 0, draggableId);
      return;
    }

    const sourceList = data.lists[sourcedroppableId];
    const destinationList = data.lists[destdroppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];

    console.table([
      {
        draggingCard,
        sourceList,
        destinationList,
      },
    ]);

    if (sourcedroppableId === destdroppableId) {
      sourceList.cards.splice(sourceIndex, 1);
      destinationList.cards.splice(destIndex, 0, draggingCard);
      setData({
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      });
    } else {
      sourceList.cards.splice(sourceIndex, 1);
      destinationList.cards.splice(destIndex, 0, draggingCard);
      setData({
        ...data.lists,
        [sourceList.id]: sourceList,
        [destinationList.id]: destinationList,
      });
    }
  };

  return (
    <ContextAPI.Provider value={{ updateListTitle, addCard, addList }}>
      <div className={classes.root}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="all-lists" type="list" direction="horizontal">
            {(provided) => (
              <div
                className={classes.container}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {data.listIds.map((listId, index) => {
                  const list = data.lists[listId];
                  return <TrelloList list={list} key={listId} index={index} />;
                })}
                <div>
                  <AddCardOrList type="list" />
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </ContextAPI.Provider>
  );
}

export default App;
