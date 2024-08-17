import css from "./ImageModal.module.css";
import Modal from 'react-modal';
export default function ImageModal({ isOpen, onRequestClose, imageSrc, altDesc }) {
    return (   
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Image Modal Window"
            className={css.modalwindow}
        >
        <img src={imageSrc} alt={altDesc} className={css.modalimage} />
        
        </Modal>
    )
}