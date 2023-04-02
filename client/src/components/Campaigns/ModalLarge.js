import React from 'react';
import LabelInModal from './LabelInModal';
import InputAndLabel from '../InputAndLabel';

export default function ModalLarge(props) {
  // Component styling
  const styles = {
    modal: {
      border: '0.2rem solid #000',
      boxSizing: 'border-box',
      backgroundColor: '#fff',
      borderShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '0.5rem',
      height: '40rem',
      width: '56.25rem',
      position: 'absolute',
      marginRight: 'auto',
      marginLeft: 'calc((75rem - 56.25rem)/2)',
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gridTemplateRows: 'repeat(12, 1fr)',
      gridGap: '0.25rem'
    },
    mainAdversary: {
      gridColumn: '1 / span 2',
      gridRow: '2 / span 1',
      marginLeft: '0.5rem'
    }
  }

  console.log(props);

  // Render the modal based on the modalId sent
  const switchModal = () => {
    switch (props.id) {
      case 'main-story':
        return (
          <section style={styles.modal} id='ModalLarge'>
            <LabelInModal
              title={props.title}
            />
            <div style={styles.mainAdversary}>
              <InputAndLabel 
                label='main adversary' 
                value={props.modalData.bigBad}
              />
            </div>
          </section>
        );
      default:
        break;
    }

  }

  return (
    <>
      {switchModal()}
    </>
  );

}