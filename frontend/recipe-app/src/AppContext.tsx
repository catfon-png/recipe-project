import {createContext} from 'react';

interface IAppContext {
    recipe: string;
    setRecipe: (recipe : string) => void
}

export const AppContext = createContext<IAppContext>({
    recipe: '',
    setRecipe: (recipe) => {}
});