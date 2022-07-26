import React from "react";
import * as ReactRedux from "react-redux";
import { filterPokemons2 } from "../../../actions/allPokeActions";
import { handleSound } from "../../Auxiliaries/Auxiliaries";
import style from "./CreatedBy.module.css";

function CreatedBy({ setCurrentPage }) {
  const dispatch = ReactRedux.useDispatch();
  const handleCreated = (event) => {
    event.preventDefault();
    dispatch(filterPokemons2(event.target.value));
    setCurrentPage(0);
  };
  return (
    <div className={style.mainDiv}>
      <select
        onMouseDown={handleSound}
        onMouseEnter={handleSound}
        onChange={(event) => {
          handleCreated(event);
        }}
      >
        <option> ORIGIN </option>
        <option
          value="all"
          // onClick={(event) => {
          //   handleCreated(event);
          // }}
        >
          All
        </option>
        <option
          value="API"
          // onClick={(event) => {
          //   handleCreated(event);
          // }}
        >
          API
        </option>
        <option
          value="DB"
          // onClick={(event) => {
          //   handleCreated(event);
          // }}
        >
          DB
        </option>
      </select>
    </div>
  );
}

export default CreatedBy;
