import React from 'react';
import {addHotDogAC, changesNewHotDogDataAC, closeModalAC,} from "../../../redux/reducers/hotdogs-reducer";
import {connect} from "react-redux";
import Form from './Form';
import {reset} from "redux-form";

let mapStateToProps = (state) => {
    return {
        modal: state.hotDogsPage.modal
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        modalClose: (e) => {
            e.preventDefault();
            dispatch(closeModalAC());
        },
        createNewHotDog: (hotDog) => {
            dispatch(addHotDogAC(hotDog));
            //known issue of this project. Does not work.
            dispatch(reset('addHotDogForm'))
        },
        changeNewHotDogField: (attributeName, attributeValue) => {
            dispatch(changesNewHotDogDataAC(attributeName, attributeValue))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);