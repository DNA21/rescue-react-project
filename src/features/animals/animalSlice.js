import { ANIMALS } from "../../app/shared/ANIMALS";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    animalsArray: ANIMALS
};

const animalsSlice = createSlice({
    name: 'animals',
    initialState,
    reducers: {}
});

export const animalsReducer = animalsSlice.reducer;

export const selectAllAnimals = (state) => {
    return state.animals.animalsArray;
};

export const selectAnimalById = (id) => (state) => {
    return state.animals.animalsArray.find(
        (animal) => animal.id === parseInt(id));
};

export const selectAllDogs = (state) => {
    return state.animals.animalsArray.find(
        (animal) => animal.animal === 'dog');
};

export const selectAllCats = (state) => {
    return state.animals.animalsArray.find(
        (animal) => animal.animal === 'cat');
};
