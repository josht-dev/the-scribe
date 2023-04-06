import React, { useState } from "react";
import TitleLarge from "../Campaigns/TitleLarge";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_USERPOST } from "../../utils/queries";

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
  },
  postDiv: {
    gridColumn: "1 / span 1",
    height: '100%',
    width: '100%',
    padding: "0.5rem",
    margin: "0.5rem",
  },
  postInput: {
    display: "flex",
    resize: "none",
    outline: 'none',
    width: "100%",
    height: "100%",
    fontSize: "1.5rem",
    fontWeight: 500,
    border: "1px solid #1CB9B3",
    borderRadius: "0 0.25rem 0.25rem 0.25rem",
    lineHeight: "3rem",
  },
  commentSection: {
    gridColumn: "2 / span 1",
    height: '100%',
    width: '100%',
    padding: "0.5rem",
    margin: "0.5rem",
    display: 'flex',
  },
  commentCard: {
    display: "flex",
    width: "100%",
    height: "10%",
    fontSize: "1rem",
    fontWeight: 500,
    border: "1px solid #1CB9B3",
    borderRadius: "0 0.25rem 0.25rem 0.25rem",
    padding: "0.25rem",
    margin: "0.5rem",
  },
  commentText: {
    display: "flex",
    resize: "none",
    outline: 'none',
    border: 'none',
    width: "100%",
    height: "100%",
    fontSize: "1rem",
    fontWeight: 500,
  }
};

export default function SingleHeadspace(props) {
  // const { loading, data } = useQuery(QUERY_SINGLE_USERPOST, {
  //   variables: 
  // });
  // const userPost = data?.userPost || [];
  const initialState = props.userPost.comments;

  const [comments, setComments] = useState(initialState);

  return (
    <>
      <section style={styles.section}>
        <div>
          {/* Post Title */}
          <TitleLarge
            placeholder="headspace post title"
            title={props.userPost.title}
          />
        </div>
        {/* Headspace Post Body (Column 1 of the Grid) */}
        <section style={styles.pandCSection}>
          <div style={styles.postDiv}>
            <textarea
              style={styles.postInput}
              type="text"
              defaultValue={props.userPost.body}
            ></textarea>
          </div>
          {/* Comments */}
          <div style={styles.commentSection}>
            {comments.flatMap((card, index) => {
              return (
                <div style={styles.commentCard} key={index}>
                  <textarea style={styles.commentText} defaultValue={card.commentBody}></textarea>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </>
  );
}
