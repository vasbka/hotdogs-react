import React from 'react';
import {
    addHotDogAC,
    changesNewHotDogDataAC,
    closeModalAC,
    openModalAC,
    setHotDogsAC
} from "../../redux/reducers/hotdogs-reducer";
import {connect} from "react-redux";
import Header from './Header';

let mapStateToProps = (state) => {
    return {
        hotDogsPage: state.hotDogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addHotDog: (hotDog) => {
            dispatch(addHotDogAC(hotDog));
        },
        setHotDogs: (hotDogs) => {
            dispatch(setHotDogsAC(hotDogs))
        },
        modalOpen: () => {
            dispatch(openModalAC());
        },
        modalClose: () => {
            dispatch(closeModalAC());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);