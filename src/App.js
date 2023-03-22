import "./App.css";
import { makeStyles } from "@material-ui/core";
import TrelloList from "./components/TrelloList";
import background_image from "./imagenes/car.jpg";
import AddCardOrList from "./components/AddCardOrList";
import mockData from "./mockdata.js";
import React, { useState } from "react";
import ContextAPI from "./ContextAPI";

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

  return (
    <ContextAPI.Provider value={{ updateListTitle }}>
      <div className={classes.root}>
        <div className={classes.container}>
          {data.listIds.map((listID) => {
            const list = data.lists[listID];
            return <TrelloList list={list} key={listID} />;
          })}
          <div>
            <AddCardOrList type="list" />
          </div>
        </div>
      </div>
    </ContextAPI.Provider>
  );
}

export default App;
