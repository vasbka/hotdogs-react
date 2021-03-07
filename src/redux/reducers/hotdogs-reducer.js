import * as axios from "axios";

const CHANGE_NEW_HOT_DOG_DATA = 'CHANGE-NEW-HOT-DOG-DATA';
const ADD_HOT_DOD = 'ADD-HOT-DOG';
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';
const SET_HOT_DOGS = 'SET-HOT-DOGS';
const EDIT_HOT_DOG = 'EDIT-HOT-DOG';
const CHANGE_EDITING_HOT_DOG_DATA = 'CHANGE-EDIT-HOT-DOG-DATA';
const UPDATE_EDITING_HOT_DOG = 'UPDATE-EDIT-HOT-DOG';
const DELETE_EDITING_HOT_DOG = 'DELETE-EDITING-HOT-DOG';

let initialState = {
    hotDogs: [],
    modal: {
        modal: false,
        name: "",
        price: "",
        description: "",
        imageLink: "",
        isNameAlreadyExists: false
    },
    //Pros - dont need edit attribute on each hot-dog.
    //Cons - cant edited few hot-dogs at the same time.
    editId: 0,
    editHotDogData: {
        id: "",
        name: "",
        price: "",
        description: "",
        imageLink: ""
    }
};
const hotDogReducer = (state = initialState, action) => {
    let newState = {...state};
    if (action.type === SET_HOT_DOGS) {
        newState.hotDogs = action.hotDogs;
    }
    if (action.type === OPEN_MODAL) {
        newState.modal.modal = true;
    }
    if (action.type === CLOSE_MODAL) {
        newState.modal.modal = false;
    }

    if (action.type === CHANGE_NEW_HOT_DOG_DATA) {
        let inputName = action.name;
        newState.modal[inputName] = action.value;
    }
    if (action.type === ADD_HOT_DOD) {
        //Not sure that it is the best idea for doing this like this
        newState.hotDogs.push(action.hotDog);
        newState.modal = {...state.modal,
            modal: false,
            name: '',
            description: '',
            price: '',
            imageLink: '',
        }
    }
    if (action.type === EDIT_HOT_DOG) {
        newState.editId = action.id;
        newState.editHotDogData = {...state.hotDogs.filter(item => item.id === action.id)[0]}
    }
    if (action.type === CHANGE_EDITING_HOT_DOG_DATA) {
        let inputName = action.name;
        newState.editHotDogData[inputName] = action.value;
    }
    if (action.type === UPDATE_EDITING_HOT_DOG) {
        newState.hotDogs = newState.hotDogs.map(item => {
            if (item.id === action.hotDog.id) {
                return {...action.hotDog};
            }
            return item;
        })
        newState.editId = 0;
    }

    if (action.type === DELETE_EDITING_HOT_DOG) {
        newState.hotDogs = newState.hotDogs.filter(item => item.id !== state.editId);
    }

    return newState;
}

export let setHotDogsAC = (hotDogs) => ({type: SET_HOT_DOGS, hotDogs})
export let addHotDogAC = (hotDog) => ({type: ADD_HOT_DOD, hotDog})
export let changesNewHotDogDataAC = (name, value) => ({type: CHANGE_NEW_HOT_DOG_DATA, name, value})
export let openModalAC = () => ({type: OPEN_MODAL})
export let closeModalAC = () => ({type: CLOSE_MODAL})
export let editHotDogAC = (id) => ({type: EDIT_HOT_DOG, id})
export let changeEditingHotDogDataAC = (name, value) => ({type: CHANGE_EDITING_HOT_DOG_DATA, name, value})
export let updateEditingHotDogAC = (hotDog) => ({type: UPDATE_EDITING_HOT_DOG, hotDog})
export let deleteEditingHotDogAC = () => ({type: DELETE_EDITING_HOT_DOG})

export default hotDogReducer;