import React from "react";
import styles from './Modal.module.scss'

const Modal = ({ handleClose, show, children }) => {
    const name = show ? styles.modalDisplay : styles.modalNone ;

    return (
        <div className={styles.modal + ' ' + name}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={handleClose}>&times;</span>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;