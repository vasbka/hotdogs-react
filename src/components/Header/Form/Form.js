import React from 'react';
import {Field, reduxForm, reset} from 'redux-form'
import asyncValidate from './AsyncValidate.js'
import validate from './Validate'
import styles from './Form.module.scss'
import * as axios from "axios";

const renderField = ({
     input,
     placeholder,
     className,
     type,
     value,
     meta: {asyncValidating, touched, error},
     change
 }) => (
    <div>
        <div className={asyncValidating ? 'async-validating' : '' +  styles.inputWrapper}>
            <input {...input} type={type} placeholder={placeholder} value={value}
                onChange={e => change(e.target.name, e.target.value)}/>
            {error && <span className={styles.error}>{error}</span>}
            {asyncValidating && <div>Validating</div>}
        </div>
    </div>
)



const addNewHotDog = (hotDog, createNewHotDog) => {
    axios.post("http://localhost:5000/api/hot-dogs", {
        name: hotDog.name,
        description: hotDog.description,
        price: hotDog.price,
        imageLink: hotDog.imageLink
    })
        .then(response => {
            createNewHotDog(response.data)
        });
}
const AsyncValidationForm = (props, modal) => {

    return (
        <form className={styles.form}>
            <span>Add new hot-dog</span>
            <Field
                name="name"
                type="text"
                component={renderField}
                value={props.modal.name}
                placeholder="Name"
                change={props.changeNewHotDogField}
            />
            <Field
                name="description"
                type="text"
                component={renderField}
                value={props.modal.description}
                placeholder="Description"
                change={props.changeNewHotDogField}
            />
            <Field
                name="price"
                type="number"
                component={renderField}
                value={props.modal.price}
                placeholder="Price"
                change={props.changeNewHotDogField}
            />
            <Field
                name="imageLink"
                type="text"
                component={renderField}
                value={props.modal.imageLink}
                placeholder="Image link"
                change={props.changeNewHotDogField}
            />
            <div>
                <button type="submit" onClick={props.modalClose}>
                    No thanks
                </button>
                <button type="submit" onClick={(event) => {
                    event.preventDefault();
                    addNewHotDog(props.modal, props.createNewHotDog)
                }}>
                    Add
                </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'addHotDogForm',
    validate,
    asyncValidate,
    asyncBlurFields: ['name']
})(AsyncValidationForm)