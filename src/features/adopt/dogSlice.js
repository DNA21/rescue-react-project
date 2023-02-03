import { DOGS } from "../../app/shared/DOGS";

export const selectAllDogs = () => {
    return DOGS;
};

export const selectDogById = (id) => {
    return DOGS.find((dog) => dog.id === id);
}
