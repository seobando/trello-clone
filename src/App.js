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

  const onDragEnd = () => {};

  return (
    <ContextAPI.Provider value={{ updateListTitle, addCard, addList }}>
      <div className={classes.root}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="12345" type="list" direction="horizontal">
            {(provided) => (
              <div
                className={classes.container}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {data.listIds.map((listID, index) => {
                  const list = data.lists[listID];
                  return <TrelloList list={list} key={listID} index={index} />;
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
