import { Collapse, Fade, makeStyles, Paper, Typography } from "@material-ui/core";
import { useState } from "react";
import AddCardOrListText from "./AddCardOrListText";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "300px",
    marginTop: theme.spacing(1),
  },
  addCardOrListText: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(0, 1, 1, 1),
    background: "#ebecf0",
    "&:hover":{
        backgroundColor: Fade("#000",0.25)
    }
  },
}));

const AddCardOrList = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <AddCardOrListText />
      </Collapse>
      <Collapse in={!open}>
        <Paper className={classes.addCardOrListText}>
          <Typography>+ Add a card</Typography>
        </Paper>
      </Collapse>
    </div>
  );
};

export default AddCardOrList;
