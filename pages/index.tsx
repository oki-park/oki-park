import React from "react";
import Button from "@material-ui/core/Button";

const Home: React.FC = () => {
  const onClick = () => {
    alert("Hello!");
  };

  return (
    <Button color="primary" variant="contained" onClick={onClick}>
      Hello World
    </Button>
  );
};

export default Home;
