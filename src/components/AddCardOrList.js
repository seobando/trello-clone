import {
  alpha,
  Collapse,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
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
    "&:hover": {
      backgroundColor: alpha("#000", 0.25),
    },
  },
}));

const AddCardOrList = ({ type }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(true);
  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <AddCardOrListText type={type} setOpen={setOpen}/>
      </Collapse>
      <Collapse in={!open}>
        <Paper className={classes.addCardOrListText} onClick={()=>setOpen(true)}>
          <Typography>
            {type === "card" ? "+ Add a card" : " + Add another list"}
          </Typography>
        </Paper>
      </Collapse>
    </div>
  );
};

export default AddCardOrList;
