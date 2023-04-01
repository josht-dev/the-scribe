import React from 'react';
import LabelInModal from './LabelInModal';

export default function ModalLarge(props) {
// Component styling
const styles = {
  modal: {
    border: '0.25rem solid #000',
    backgroundColor: '#fff',
    borderShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '0.25rem',
    height: '40rem',
    width: '56.25rem',
    position: 'absolute',
    marginRight: 'auto',
    marginLeft: 'calc((75rem - 56.25rem)/2)',
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridTemplateRows: 'repeat(12, 1fr)',
    gridGap: '0.25rem'
  }
}



// Render the modal based on the modalId sent
const switchModal = () => {
  switch (props.id) {
    case 'main-story':
      return (
        <>
          <LabelInModal 
            title={'main story'}
          />
        </>
      );  
    default:
      break;
  }

}

  return (
    <section style={styles.modal} id='ModalLarge'>
      {switchModal()}
    </section>
  );

}