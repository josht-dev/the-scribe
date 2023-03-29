import React from 'react';
import TitleLarge from './TitleLarge';

export default function SingleCampaign(props) {

  const styles = {
    section: {
      border: '1px solid #1CB9B3',
      borderRadius: '0 0.25rem 0.25rem 0.25rem',
      margin: '0 0.5rem 0.5rem 0.5rem',
      height: '42.25rem',
      padding: '0.5rem'
    },
    titleBar: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      border: '1px solid black'
    }
  }
  console.log(props.campaign);

  return (
    <section style={styles.section}>
      <div style={styles.titleBar}>
        <TitleLarge
          placeholder='campaign title'
          title={props.title}
        />
        <TitleLarge
          placeholder='game system'
          title={props.game}
        />
      </div>

    </section>
  );
}