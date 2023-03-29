import React from 'react';
import TitleLarge from './TitleLarge';

export default function SingleCampaign(props) {

  const styles = {
    divLarge: {
      border: '1px solid #1CB9B3',
      borderRadius: '0 0.25rem 0.25rem 0.25rem',
      margin: '0 0.5rem 0.5rem 0.5rem',
      height: '42.25rem'
    }
  }
  console.log(props.campaign);

  return (
    <div style={styles.divLarge}>
      <TitleLarge 
        placeholder='campaign title'
        title={props.title}
      />
      <TitleLarge 
        placeholder='game system'
        title={props.game}
      />


    </div>
  );
}