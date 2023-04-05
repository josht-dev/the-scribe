import React, { useState } from "react";
import TitleLarge from "../Campaigns/TitleLarge";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { QUERY_SINGLE_USERPOST } from "../../utils/queries";
import { ADD_USERPOST } from "../../utils/mutations";
import { QUERY_USERPOSTS } from "../../utils/queries";

import Auth from "../../utils/auth";

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

export default function HeadSpaceForm(props) {
  const [userPostTitle, setUserPostTitle] = useState("");
  const [userPostSubject, setUserPostSubject] = useState("");
    const [userPostBody, setUserPostBody] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addUserPost, { error }] = useMutation(ADD_USERPOST, {
    update(cache, { data: { addUserPost } }) {
      try {
        const { userPosts } = cache.readQuery({ query: QUERY_USERPOSTS });

        cache.writeQuery({
          query: QUERY_USERPOSTS,
          data: { userPosts: [addUserPost, ...userPosts] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUserPost({
        variables: {
        //   title,
        //   subject,
        //   body,
          username: Auth.getProfile().data.username,
        },
      });

      setUserPostTitle("");
      setUserPostSubject("");
    setUserPostBody("");
      
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "title" && value.length <= 1000) {
      setUserPostTitle(value);
      setCharacterCount(value.length);
    }
    if (name === "subject" && value.length <= 50) {
     setUserPostSubject(value);
      setCharacterCount(value.length);
    }
    if (name === "body" && value.length <= 3000) {
      setUserPostBody(value);
      setCharacterCount(value.length);
    }
  };

  const { data } = useQuery(QUERY_SINGLE_USERPOST);
  const userPost = data?.userPost || [];
  return (
    <>
      <section style={styles.section}>
        
        <div>
          {/* Post Title */}
          <TitleLarge
            placeholder="headspace post title"
            title={userPost.title}
          />
        </div>
        
        <section style={styles.pandCSection}>
          <div>
            <textarea
              style={styles.postInput}
              type="text"
              defaultValue={userPost.body}
            ></textarea>
          </div>
          {/* Comments */}
          {/* <div style={styles.commentSection}>
            {props.userPosts.comments.map((card) => {
              <div style={styles.commentCard} key={card._id}>
                <textarea defaultValue={card.commentBody}></textarea>
              </div>;
            })}
          </div> */}
        </section>
      </section>
    </>
  );
}
