import css from "./ImageModal.module.css";
import Modal from 'react-modal';
export default function ImageModal({ isOpen, onRequestClose, imageSrc}) {
    return (   
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Image Modal Window"
            className={css.modalwindow}
            shouldCloseOnOverlayClick={true}
            ariaHideApp={true}
        >{imageSrc &&
            <>
            <img src={imageSrc} alt="modal img" className={css.modalimage} />
            </>}
       
        
        </Modal>
    )
}