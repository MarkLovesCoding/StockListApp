import React from 'react';
const Modal=function(props){
   const showHideModal = props.showModal ? "modal display-flex":"modal display-none";
   let text = props.modalText;
      return (
      <div className={showHideModal}>
          <p>{text}</p>
       </div>
      )

}
export default Modal
