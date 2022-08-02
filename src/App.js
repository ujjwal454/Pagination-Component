import { useState, useEffect } from "react";
import { Container, makeStyles, Typography, Button } from "@material-ui/core";
import Page from "./component/Page";
import Pagination from "./component/Pagination";
import { useSelector } from "react-redux";
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
    Center: {
      margin: "20px auto",
      display: "block",
    },
    // btnGroup: {
    //   display: "flex",
    //   justifyContent: "center",
    //   alignItems: "center",
    // },
  };
});

function App() {
  const [post, setpost] = useState([]);
  const [loading, setloading] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage] = useState(5);
  const classes = useStyles();
  const Ids = useSelector((state) => state.alertId);
  useEffect(() => {
    const fetchData = () => {
      setloading(true);
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => {
          setpost(data);
          setloading(false);
        });
    };
    fetchData();
  }, []);
  const handleClick = () => {
    alert(`Selected Items id are ${Ids}`);
  };
  let indexOfLast = currentPage * postPerPage;
  let indexOfFirst = indexOfLast - postPerPage;
  let currentPosts = post.slice(indexOfFirst, indexOfLast);
  const pageNumber = (number) => {
    setcurrentPage(number);
  };
  return (
    <div className={classes.main}>
      <Container className={classes.cont}>
        <Typography variant="h4" className={classes.center}>
          Pagination Component By Ujjwal Gupta
        </Typography>
        <Page posts={currentPosts} loading={loading} />
        <Pagination
          postPerPage={postPerPage}
          totalPost={post.length}
          paginate={pageNumber}
          lastPost={indexOfLast}
        />
        <Button
          onClick={handleClick}
          color="primary"
          variant="contained"
          className={classes.Center}
        >
          Submit
        </Button>
      </Container>
    </div>
  );
}

export default App;
