import React from 'react';
import {
    changeEditingHotDogDataAC,
    changesNewHotDogDataAC, deleteEditingHotDogAC,
    editHotDogAC,
    setHotDogsAC, updateEditingHotDogAC
} from "../../../redux/reducers/hotdogs-reducer";
import {connect} from "react-redux";
import Hotdogs from './Hotdogs';

let mapStateToProps = (state) => {
    return {
        hotDogsPage: state.hotDogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setHotDogs: (hotDogs) => {
            dispatch(setHotDogsAC(hotDogs));
        },
        editHotDog: (id) => {
            dispatch(editHotDogAC(id));
        },
        changeEditingHotDogData: (attributeName, attributeValue) => {
            dispatch(changeEditingHotDogDataAC(attributeName, attributeValue))
        },
        updateEditingHotDogData: (hotDog) => {
            dispatch(updateEditingHotDogAC(hotDog));
        },
        deleteEditingHotDog: () => {
            dispatch(deleteEditingHotDogAC());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hotdogs);