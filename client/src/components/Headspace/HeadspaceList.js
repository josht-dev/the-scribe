import React from "react";

// Styling object
const styles = {
  listDivLarge: {
    border: '1px solid #1CB9B3',
    borderRadius: '0 0.25rem 0.25rem 0.25rem',
    margin: '0 0.5rem 0.5rem 0.5rem',
    height: '42.25rem',
    backgroundColor: '#F5F5F5',
  },
  listCardLarge: {
    backgroundColor: '#fff',
    boxShadow: '0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
    borderRadius: '0.25rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '0.5rem',
    height: '20%'
  },
  listCardLargeTitle: {
    width: '70%',
    margin: '0 0.5rem',
    fontSize: '2rem'
  },
  listCardLargeDetails: {
    display: 'flex',
    flexDirection: 'column'
  },
};

export default function HeadspaceList(props) {

  // Event listener for headspace card click
  const onAddBtnClick = (event) => {
    // Get the campaign id and title from the article data attributes
    const title = () => {
      const childTitle = event.nativeEvent.srcElement.parentElement.dataset.title;
      const parentTitle = event.nativeEvent.srcElement.dataset.title;
      const nestedTitle = event.nativeEvent.srcElement.parentElement.parentElement.dataset.title;

      return childTitle || parentTitle || nestedTitle;
    }
    const id = () => {
      const childId = event.nativeEvent.srcElement.parentElement.dataset.campaignid;
      const parentId = event.nativeEvent.srcElement.dataset.campaignid;
      const nestedId = event.nativeEvent.srcElement.parentElement.parentElement.dataset.campaignid;

      return childId || parentId || nestedId;
    }

    const propObj = {
      id: id(),
      title: title()
    }

    // Check if tab with campaignid/key already exists
    let dup = false;
    for (let i = 0; i < props.tabList.length; i++) {
      if (props.tabList[i].id === propObj.id) {
        dup = true;
      }
    }

    if (!dup) {
      // Add a new tab
      props.setTabList(props.tabList.concat(propObj));
    } else {
      return;
    }

  }

  if(!props.userPosts.length){
    return (
<>
<h3>No User Posts Here</h3>
</>
)
    
      
  }
  return (

    <section style={styles.listDivLarge} className='list-scroll'>
      {props.userPosts && props.userPosts.map(userPost => {
        return (
          <article
            style={styles.listCardLarge}
            key={props.userPost._id}
            data-campaignid={props.userPost._id}
            data-title={props.userPost.title}
            onClick={onAddBtnClick}
          >
            <span style={styles.listCardLargeTitle}>{props.userPost.title}</span>
            <div style={styles.listCardLargeDetails}>
              <span>Created At: {userPost.createdAt}</span>
            </div>
          </article>
        );
      })}
    </section>
  );
}