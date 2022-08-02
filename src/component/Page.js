import {
  Container,
  makeStyles,
  Typography,
  Paper,
  Checkbox,
} from "@material-ui/core";
import { addItemId } from "../redux/action";
import { removeItemId } from "../redux/action";
import { useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => {
  return {
    main: {
      backgroundColor: "#e0f2f1",
      minHeight: "100vh",
      padding: "20px",
    },
    center: {
      textAlign: "center",
      padding: "20px 0",
    },
    table: {
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
    },
    items: {
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
      margin: "10px 0px",
    },
    footer: {
      display: "flex",
      justifyContent: "space-around",
    },
    btn: {
      backgroundColor: "#009688",
    },
    head: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "15px",
      },
    },
  };
});
const Page = ({ loading, posts }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleChange = (checked, id) => {
    if (checked) {
      dispatch(addItemId(id));
    } else {
      dispatch(removeItemId(id));
    }
  };
  return (
    <Container>
      {loading ? (
        <Typography variant="h1" className={classes.center}>
          Loading.....
        </Typography>
      ) : (
        <>
          <Paper className={classes.table}>
            <Typography variant="h4" className={classes.head}>
              ID
            </Typography>
            <Typography variant="h4" className={classes.head}>
              TITLE
            </Typography>
            <Typography variant="h4" className={classes.head}>
              COMPLETED
            </Typography>
          </Paper>
          {posts.map((item) => (
            <Paper key={item.id} className={classes.items}>
              <Typography variant="body1">{item.id}</Typography>
              <Typography variant="body1">{item.title}</Typography>
              <Checkbox
                onChange={(e) => handleChange(e.target.checked, item.id)}
                color="primary"
              />
            </Paper>
          ))}
        </>
      )}
    </Container>
  );
};

export default Page;
