import { CATS } from "../../app/shared/CATS";

export const selectAllCats = () => {
    return CATS;
}

export const selectCatById = (id) => {
    return CATS.find((cat) => cat.id === id);
};
