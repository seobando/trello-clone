import {
  InputBase,
  Paper,
  makeStyles,
  IconButton,
  Button,
  Fade,
} from "@material-ui/core";
import React, { useState } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const useStyle = makeStyles((theme) => ({
  card: {
    width: "280px",
    margin: theme.spacing(0, 1, 1, 1),
    paddingBottom: theme.spacing(4),
  },
  input: {
    margin: theme.spacing(1),
  },
  confirm: {
    display: "flex",
    margin: theme.spacing(0, 1, 1, 1),
  },
  btnConfirm: {
    background: "#5aac44",
    color: "#fff",
    "&:hover": {
      background: Fade("#5aac44", 0.75),
    },
    options: {
      flexGrow: 1,
    },
  },
}));

const AddCardOrListText = () => {
  const classes = useStyle();
  const [title, setTitle] = useState("");
  return (
    <>
      <Paper className={classes.card}>
        <InputBase
          multiline
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a title for this card..."
          inputProps={{ className: classes.input }}
        />
      </Paper>
      <div className={classes.confirm}>
        <div className={classes.options}>
          <Button className={classes.btnConfirm}>Add card</Button>
          <IconButton>
            <ClearIcon />
          </IconButton>
        </div>
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </div>
    </>
  );
};

export default AddCardOrListText;
