import { CATS } from "../../app/shared/CATS";

export const selectAllCats = () => {
    return CATS;
}

export const selectRandomCat = () => {
    return CATS[Math.floor(CATS.length * Math.random())];
}
