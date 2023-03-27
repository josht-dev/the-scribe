import React from "react";

// TODO - Refactor to be more modular, just needed it working for now

// Testing data
const campaignArray = [
  {
    _id: 1,
    title: 'fist full of credits',
    game: 'ffg star wars',
    modifiedAt: '2023-01-08 16:42:33'
  },
  {
    _id: 2,
    title: 'title',
    game: 'dnd',
    modifiedAt: '2023-01-08 16:42:33'
  },
  {
    _id: 3,
    title: 'title',
    game: 'dnd',
    modifiedAt: '2023-01-08 16:42:33'
  },
  {
    _id: 4,
    title: 'title',
    game: 'dnd',
    modifiedAt: '2023-01-08 16:42:33'
  },
  {
    _id: 5,
    title: 'title',
    game: 'dnd',
    modifiedAt: '2023-01-08 16:42:33'
  },
  {
    _id: 6,
    title: 'title',
    game: 'dnd',
    modifiedAt: '2023-01-08 16:42:33'
  },
  {
    _id: 7,
    title: 'title',
    game: 'dnd',
    modifiedAt: '2023-01-08 16:42:33'
  },
  {
    _id: 8,
    title: 'title',
    game: 'dnd',
    modifiedAt: '2023-01-08 16:42:33'
  },
  {
    _id: 9,
    title: 'title',
    game: 'dnd',
    modifiedAt: '2023-01-08 16:42:33'
  },
  {
    _id: 10,
    title: 'title',
    game: 'dnd',
    modifiedAt: '2023-01-08 16:42:33'
  },
];

// Styling object
const styles = {
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 1
  },
  section: {
    position: 'absolute',
    top: '10rem',
    width: '75rem',
    height: '50rem',
    backgroundColor: '#fff',
    borderRadius: '.25rem',
    boxShadow: '0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
    zIndex: 2
  },
  titleDiv: {
    display: 'flex',
    alignItems: 'center',
    width: '75rem',
  },
  titleBtn: {
    margin: '0.5rem',
    padding: '.5rem 1.5rem',
    float: 'left',
    backgroundColor: '#1CB9B3',
    boxShadow: '0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
    borderRadius: '0.25rem',
    color: '#fff'
  },
  tabContainer: {
    margin: '0.5rem 0.5rem 0 0.5rem',
    display: 'flex'
  },
  tab: {
    padding: '0.5rem 1rem',
    marginRight: '0.25rem',
    borderWidth: '2px 2px 0px 2px',
    borderStyle: 'solid',
    borderColor: '#1CB9B3',
    borderRadius: '0.25rem 0.25rem 0 0',
    fontWeight: 500
  },
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

// Campaign specific content
const campaignData = () => {
  return (
    <>
      <div style={styles.titleDiv}>
        <span style={styles.titleBtn}>campaigns</span>
      </div>
      <div style={styles.tabContainer} id='tabContainer'>
        <span style={styles.tab} className='selectedTab'>your campaigns</span>
        <span style={styles.tab} className='' data-campaignid='1'>fist full of credits</span>
      </div>
      <div style={styles.listDivLarge} className='list-scroll'>
        {campaignArray.map(card => {
          return (
            <article style={styles.listCardLarge} key={card._id}>
              <span style={styles.listCardLargeTitle}>{card.title}</span>
              <div style={styles.listCardLargeDetails}>
                <span>game: {card.game}</span>
                <span>Updated: {card.modifiedAt}</span>
              </div>
            </article>
          ); 
        })}
      </div>
    </>
  );
}

export default function Campaigns() {
  return (
    <main style={styles.container}>
      <section style={styles.section}>
        {campaignData()}
      </section>
    </main>
  );

}