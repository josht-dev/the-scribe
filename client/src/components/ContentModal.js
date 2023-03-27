import React from 'react';

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
  }
}

export default function ContentModal() {
  return (
    <main style={styles.container}>
      <section style={styles.section}>

      </section>
    </main>
  );
}