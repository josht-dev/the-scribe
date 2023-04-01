import React from 'react';

export default function ModalLarge() {
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
    marginLeft: 'calc((75rem - 56.25rem)/2)'
  }
}

  return (
    <section style={styles.modal}>



    </section>
  );

}