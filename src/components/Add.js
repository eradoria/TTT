import React, { useReducer } from "react";
import { Navigate, useNavigate } from "react-router";
import TextField from "@mui/material/TextField";
import Map from "./Map";
import state from "../redux/state";
import { ContactPageSharp } from "@mui/icons-material";

const intialFormState = {
  Player: "",
  Rank: "",
};

const formReducer = (state, action) => {
  console.log(action);
  return {
    ...state,
    [action.input]: action.value,
  };
};

const Add = (props) => {
  console.log("props being called here", props);
  const navigate = useNavigate();

  const [formState, dispatch] = useReducer(formReducer, intialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const action = {
      input: name,
      value: value,
    };
    dispatch(action);
  };

  const handleListing = (e) => {
    e.preventDefault();
    const payload = { ...formState };
    console.log("payload here", payload);
    payload.id = props.listings.length + 1;
    props.addListing(payload);

    navigate("/");
  };

  return (
    <>
      <div className="add-container">
        <div className="form">
          <input
            type="text"
            name="Player"
            placeholder="Name"
            onChange={handleChange}
          />

          <input
            type="text"
            name="Rank"
            placeholder="Rank"
            onChange={handleChange}
          />

          <button className="add-button" onClick={handleListing}>
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Add;
