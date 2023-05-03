import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FavouriteBtn = () => {
  const [disable, setDisable] = useState(false);
  const handleFavouriteBtn = () => {
    toast.success("my favourite item here");
    setDisable(true);
  };
  return (
    <div>
      <Button
        disabled={disable ? true : false}
        onClick={handleFavouriteBtn}
        variant="danger"
      >
        Favourite Button
      </Button>{" "}
      <ToastContainer />
    </div>
  );
};

export default FavouriteBtn;
