import { Typography, makeStyles } from "@material-ui/core";
import { MoreHorizIcon } from "@material-ui/icons/MoreHoriz";

const useStyle = makeStyles((theme) => ({
  title: {
    display: "flex",
    margin: theme.spacing(1),
  },
  titleText:{
    flexGrow:1,
    fontSize: "1.2rem",
    fontWeight: "bold"
  }
}));

const ListTitle = () => {
  const classes = useStyle();
  return (
    <div className={classes.title}>
      <Typography className={classes.titleText}>To do</Typography>
      <MoreHorizIcon />
    </div>
  );
};

export default ListTitle;
