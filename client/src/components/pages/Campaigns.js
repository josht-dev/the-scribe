import React from "react";


// Testing data
const campaignArray = [
  {
    _id: 1,
    title: 'title',
    game: 'dnd',
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
    justifyContent: 'center'
  },
  section: {
    position: 'absolute',
    top: '10rem',
    width: '75rem',
    height: '50rem',
    backgroundColor: '#fff',
    borderRadius: '.25rem',
    boxShadow: '0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
    // TODO - Remove temporary border styling
    border: '1px solid black'
  },
  titleBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '.5rem 1.5rem',
    float: 'left',
    margin: '0.5rem',
    backgroundColor: '#1CB9B3',
    boxShadow: '0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
    borderRadius: '0.25rem',
    textTransform: 'uppercase',
    color: '#fff'
  }
};

// Campaign specific content
const campaignData = () => {

  

  return (
    <div style={styles.titleBtn}>
      campaigns
    </div>
    

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