import React, { useState } from "react";
import TitleLarge from "../Campaigns/TitleLarge";
import Button from "../Campaigns/Button";
import ListMd from "../Campaigns/ListMd";
import TextField from "@mui/material/TextField";

// Component styles
const styles = {
  section: {
    border: "1px solid #1CB9B3",
    borderRadius: "0 0.25rem 0.25rem 0.25rem",
    margin: "0 0.5rem 0.5rem 0.5rem",
    height: "42.25rem",
    padding: "0.5rem",
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gridTemplateRows: "repeat(12 ,1fr)",
    gridGap: "0.25rem",
  },
  titleLeft: {
    gridColumn: "1 / span 3",
  },
  titleRight: {
    gridColumn: "4 / span 3",
  },
  charactersContainer: {
    gridColumn: "1 / span 2",
    gridRow: "2 / span 11",
  },
  btnBar: {
    gridColumn: "3 / span 4",
    gridRowStart: "2",
    display: "flex",
    justifyContent: "space-around",
  },
  adventureList: {
    gridColumn: "3 / span 4",
    gridRow: "3 / span 10",
  },
};

export default function SingleHeadspace(props) {
  return (
    <>
      <section style={styles.section}>
        <div style={styles.titleLeft}>
          <TitleLarge
            placeholder="headspace post title"
            title={props.headspaceArray.title}
          />
        </div>
        <div>
          {/* <TextField
          id="outlined-multiline-flexible"
          label="userPost"
          rows={4}
          defaultValue={props.headspaceArray.body}
          /> */}
        </div>
      </section>
    </>
  );
}
