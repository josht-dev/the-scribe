import React, { useState } from "react";
import TitleLarge from "../Campaigns/TitleLarge";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_SINGLE_USERPOST } from "../../utils/queries";
import { ADD_USERPOST } from "../../utils/mutations";
import Auth from '../../utils/auth';


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
    height: 'calc(100% - 0.5rem)',
    width: '100%',
    marginTop: "0.5rem 0",
    boxShadow: '0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
    borderRadius: "0.5rem",
  },
  postInput: {
    display: "flex",
    resize: "none",
    outline: 'none',
    border: 'none',
    width: "100%",
    height: "100%",
    fontSize: "1.5rem",
    fontWeight: 500,
    padding: '0.5rem',
    lineHeight: "3rem",
    borderRadius: "0.5rem",
  },
  commentSection: {
    gridColumn: "2 / span 1",
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: "0.5rem",
    margin: "0.5rem",
  },
  commentCard: {
    display: "flex",
    width: "100%",
    height: "fit-content",
    fontWeight: 500,
    borderRadius: "0.25rem",
    marginBottom: '0.5rem',
    boxShadow: '0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
  },
  commentText: {
    display: "flex",
    resize: "none",
    outline: 'none',
    border: 'none',
    width: "100%",
    height: "100%",
    fontSize: "0.75rem",
    fontWeight: 500,
    padding: '0.5rem',
    borderRadius: "0.25rem",
  }
};

export default function SingleHeadspace(props) {
  // const { loading, data } = useQuery(QUERY_SINGLE_USERPOST, {
  //   variables: 
  // });
  // const userPost = data?.userPost || [];

  const [ reRender, setReRender ] = useState(false);

console.log(props.currentTab);

  // check if this is a new post
  const initialComments = (props.userPost.subject === 'unsavedPost')
    ? [] : props.userPost.comments;

  const [comments, setComments] = useState(initialComments);

  // saving a post
  const [title, setTitle] = useState(props.userPost);
  const [body, setBody] = useState(props.userPost);

  const [addUserPost, { error }] = useMutation(ADD_USERPOST, {
    update(cache, { data: { addUserPost } }) {
      try {
        const { userPost } = cache.readQuery({ query: QUERY_SINGLE_USERPOST });

        cache.writeQuery({
          query: QUERY_SINGLE_USERPOST,
          data: { thoughts: [addUserPost, ...userPost] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    try {
      const { data } = await addUserPost({
        variables: {
          body,
          title,
          username: Auth.getProfile().data.username,
        },
      });

      setTitle('')
      setBody('')

    } catch (err) {
      console.error(err);
    }
  };

  console.log('post user');
  console.log(props.userPost.username);

  console.log('me');
  console.log(props.username);


  const handleChange = (event) => {
    console.log('handlechange hit');
    const { name, value } = event.target;
    setTitle(value);
    setBody(value.length);
  };

  return (
    <>
      <section style={styles.section}>
        <div>
          {/* Post Title */}
          <TitleLarge
            placeholder="headspace post title"
            title={props.userPost.title}
            onChange={handleChange}
          />
        </div>
        {/* Headspace Post Body (Column 1 of the Grid) */}
        <form
          style={styles.pandCSection}
          onSubmit={handleFormSubmit}
        >

          <div style={styles.postDiv}>

            {props.userPost.username === props.username ? (
              <textarea
                style={styles.postInput}
                type="text"
                defaultValue={props.userPost.body}
                onChange={handleChange}
              ></textarea>
            ) : (
              <textarea
                style={styles.postInput}
                type="text"
                defaultValue={props.userPost.body}
                readOnly
              ></textarea>
            )}

          </div>
          {/* Comments */}
          <div style={styles.commentSection}>
            {comments.flatMap((card, index) => {
              return (
                <div style={styles.commentCard} key={index}>
                  <textarea
                    style={styles.commentText}
                    defaultValue={card.commentBody}
                  ></textarea>
                </div>
              );
            })}
          </div>



        </form>
      </section>
    </>
  );
}
