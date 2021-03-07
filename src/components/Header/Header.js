import React from 'react';
import logo from '../../logo.png';
import styles from './Header.module.scss';
import Modal from "../Modal/Modal";
import FormContainer from "./Form/FormContainer";

class Header extends React.Component {
    render() {
        let errorClass = this.props.hotDogsPage.modal.isNameAlreadyExists ? styles.dBlock : styles.dNone;
        return (
            <header className={styles.header}>
                <img src={logo} className={styles.img} alt="logo"/>
                <span>CRUD</span>
                <button className={styles.button} onClick={this.props.modalOpen}>Add hot-dog</button>
                <Modal show={this.props.hotDogsPage.modal.modal} handleClose={this.props.modalClose}>
                    <FormContainer modal={this.props.hotDogsPage.modal}/>
                </Modal>
            </header>
        );
    }
}

export default Header;
