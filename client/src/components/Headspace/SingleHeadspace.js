import React, { useState } from "react";
import TitleLarge from "../Campaigns/TitleLarge";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_SINGLE_USERPOST } from "../../utils/queries";
import { ADD_USERPOST, ADD_COMMENT } from "../../utils/mutations";
import Auth from '../../utils/auth';
import Button from '../Campaigns/Button';


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
  },
  commentBtn: {
    fontSize: '1rem',
    margin: '0.5rem 0',
    padding: '.5rem 1.5rem',
  },
  commentBtnDiv: {
    display: 'flex',
    flexDirection: 'row',
    height: 'fit-content'
  }
};

export default function SingleHeadspace(props) {
  // const { loading, data } = useQuery(QUERY_SINGLE_USERPOST, {
  //   variables: 
  // });
  // const userPost = data?.userPost || [];

  // check if this is a new post
  const initialComments = (props.userPost.subject === 'unsavedPost')
    ? [] : props.userPost.comments;

  const [comments, setComments] = useState(initialComments);

  // saving a post
  const [title, setTitle] = useState(props.userPost);
  const [body, setBody] = useState(props.userPost);
  const [newComment, setNewComment] = useState('');

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const [addUserPost] = useMutation(ADD_USERPOST, {
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

  const saveComment = async (event) => {
    console.log('hit save comment');
    console.log(newComment);
    try {
      const { data } = await addComment({
        variables: {
          userPostId: props.userPost._id,
          commentBody: newComment,
          commentWriter: Auth.getProfile().data.username,
        },
      });

      setNewComment('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleFormSubmit = async (event) => {
    try {
      const subject = 'savedPost';
      const { data } = await addUserPost({
        variables: {
          body,
          title,
          subject,
          username: Auth.getProfile().data.username,
        },
      });
      // TODO - DO BETTER LATER
      // This is such a crap way to do this, but reloading data and changing tabs has been so much trouble and I don't have the bandwidth to keep fighting with it - Josh
      //window.location.reload();

    } catch (err) {
      console.error(err);
    }
  };




  const handleTitleChange = (event) => {
    const value = event.target.value;
    setTitle(value);
  };
  const handleBodyChange = (event) => {
    const value = event.target.value;
    setBody(value);
  };
  const handleCommentChange = (event) => {
    const value = event.target.value;
    setNewComment(value);
  }

  return (
    <>
      <section style={styles.section}>
        <div>
          {/* Post Title */}
          <TitleLarge
            placeholder="headspace post title"
            title={props.userPost.title}
            onChange={handleTitleChange}
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
                onChange={handleBodyChange}
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

          {props.userPost.subject === 'unsavedPost' ? (

            <div>
              <div
                style={styles.addBtnDiv}
                onClick={() => {
                  handleFormSubmit()
                }}
              >
                <Button
                  title='save'
                />
              </div>
            </div>

          ) : (
            <>

              {/* Comments */}
              <div style={styles.commentSection}>
                <div style={styles.commentBtnDiv}>
                  <div
                    style={styles.commentBtn}
                    onClick={() => {
                      const newComment = comments.concat({
                        commentBody: 'unsaved new comment',
                      });

                      setComments(newComment);
                    }}
                  >
                    <Button
                      title='add new comment'
                    />
                  </div>
                  <div
                    style={styles.commentBtn}
                    onClick={() => {
                      saveComment()
                    }}
                  >
                    <Button
                      title='save new comment'
                    />
                  </div>
                </div>
                {comments.flatMap((card, index) => {
                  return (
                    <div style={styles.commentCard} key={index}>
                      <textarea
                        style={styles.commentText}
                        defaultValue={card.commentBody}
                        onChange={handleCommentChange}
                      ></textarea>
                    </div>
                  );
                })}
              </div>
            </>
          )}

        </form>
      </section>
    </>
  );
}
