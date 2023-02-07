import { ANIMALS } from "../../app/shared/ANIMALS";

export const selectAllAnimals = () => {
    return ANIMALS;
};

export const selectAnimalById = (id) => {
    return ANIMALS.find((animal) => animal.id === id);
};

export const selectAllDogs = () => {
    return ANIMALS.find((animal) => animal.animal === 'dog');
};

export const selectAllCats = () => {
    return ANIMALS.find((animal) => animal.animal === 'cat');
};
