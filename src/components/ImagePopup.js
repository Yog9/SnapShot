import React from 'react';
import Modal from 'react-modal';
// import './imagePopup.scss';


const ImagePopup = ({show}) => {
    return (
        <Modal 
            className="imagePopupModal" 
            isOpen={show}
            overlayClassName="imagePopupOverlay"
            shouldCloseOnOverlayClick
        >
            
        </Modal>
    )
}

export default ImagePopup;