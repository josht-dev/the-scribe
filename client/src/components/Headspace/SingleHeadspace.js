import React, { useState } from "react";
import TitleLarge from "../Campaigns/TitleLarge";

// Component styles
const styles = {
  section: {
    border: "1px solid #1CB9B3",
    borderRadius: "0 0.25rem 0.25rem 0.25rem",
    margin: "0 0.5rem 0.5rem 0.5rem",
    height: "42.25rem",
    padding: "0.5rem",
    // display: "grid",
    // gridTemplateColumns: "repeat(6, 1fr)",
    // gridTemplateRows: "repeat(12 ,1fr)",
    // gridGap: "0.25rem",
  },
  pandCSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr",
    gridGap: "0.25rem",
    height: "calc(100% - 4.5rem)",
    width: "100%",
    border: "1px solid red",
  },
  postInput: {
    display: "flex",
    gridColumn: "1 / span 1",
    resize: "none",
    width: "100%",
    height: "80%",
    fontSize: "1.5rem",
    fontWeight: 500,
    padding: "0.5rem",
    margin: "0.5rem",
    border: "1px solid #1CB9B3",
    borderRadius: "0 0.25rem 0.25rem 0.25rem",
    lineHeight: "3rem",
  },
  commentSection: {
    gridColumn: "2 / span 1",
  },
  commentCard: {
    display: "flex",
    width: "30%",
    height: "4rem",
    border: "none",
    fontSize: "1rem",
    fontWeight: 500,
    padding: "0.5rem",
    margin: "0.5rem",
    borderRadius: "0 0.25rem 0.25rem 0.25rem",
  },
  test: {
    gridColumn: "1 / span 1",
    border: "1px solid black",
  },
};

export default function SingleHeadspace(props) {
  console.log(props);
  return (
    <>
      <section style={styles.section}>
        <div>
          {/* Post Title */}
          <TitleLarge
            placeholder="headspace post title"
            title={props.headspaceArray.title}
          />
        </div>
        {/* Headspace Post Body (Column 1 of the Grid) */}
        <section style={styles.pandCSection}>
          <div>
            <textarea
              style={styles.postInput}
              type="text"
              defaultValue={props.headspaceArray.body}
            ></textarea>
          </div>
          {/* Comments */}
          <div style={styles.commentSection}>
            {props.headspaceArray.comments.map((card) => {
              <div style={styles.commentCard} key={card._id}>
                <textarea defaultValue={card.commentBody}></textarea>
              </div>;
            })}
          </div>
        </section>
      </section>
    </>
  );
}
