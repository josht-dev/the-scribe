import React from 'react';
import TitleLarge from './TitleLarge';
import Button from './Button';
import ListMd from './ListMd';

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
      gridTemplateRows: 'repeat(12 ,1fr)',
      gridGap: '0.25rem'
    },
    titleLeft: {
      gridColumn: '1 / span 3',
    },
    titleRight: {
      gridColumn: '4 / span 3',
    },
    charactersContainer: {
      gridColumn: '1 / span 2',
      gridRow: '2 / span 11',
      border: '1px solid black',
    },
    btnBar: {
      gridColumn: '3 / span 4',
      gridRowStart: '2',
      display: 'flex',
      justifyContent: 'space-around',
    },
    adventureList: {
      gridColumn: '3 / span 4',
      gridRow: '3 / span 10'
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
        <section style={styles.charactersContainer}>
      
        </section>
        <div style={styles.btnBar}>
          <Button 
            title='main story' 
          />
          <Button 
            title='side quests' 
          />
          <Button 
            title='player plots' 
          />
          <Button 
            title='timeline' 
          />
        </div>
        <section style={styles.adventureList}>
          <ListMd 
          
          />
        </section>
     
    </section >
  );
}