import React from "react";
import { Container, Button } from "@material-ui/core";
const Pagination = ({ postPerPage, totalPost, paginate, lastPost }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleClick = (number) => {
    paginate(number);
  };
  return (
    <Container>
      {pageNumbers.map((number, index) => (
        <Button
          variant={number * 5 === lastPost ? "contained" : "outlined"}
          color="primary"
          key={index}
          onClick={() => handleClick(number)}
        >
          {number}
        </Button>
      ))}
    </Container>
  );
};

export default Pagination;
