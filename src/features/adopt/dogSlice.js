import { DOGS } from "../../app/shared/DOGS";

export const selectAllDogs = () => {
    return DOGS;
};

export const selectRandomDog = () => {
    return DOGS[Math.floor(DOGS.length * Math.random())];
};
