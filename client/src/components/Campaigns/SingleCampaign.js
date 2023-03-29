import React from 'react';
import TitleLarge from './TitleLarge';

export default function SingleCampaign(props) {

  const styles = {
    section: {
      border: '1px solid #1CB9B3',
      borderRadius: '0 0.25rem 0.25rem 0.25rem',
      margin: '0 0.5rem 0.5rem 0.5rem',
      height: '42.25rem',
      padding: '0.5rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      columnGap: '0.25rem'
    },
    titleBar: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    },
    titleLeft: {
      gridColumn: '1 / span 3'
    },
    titleRight: {
      gridColumn: '4 / span 3'
    }
  }
  console.log(props.campaign);

  return (
    <section style={styles.section}>
      
        <div style={styles.titleLeft}>
          <TitleLarge
            placeholder='campaign title'
            title={props.title}
          />
        </div>
        <div style={styles.titleRight}>
          <TitleLarge
            placeholder='game system'
            title={props.game}
          />
        </div>
     
    </section >
  );
}