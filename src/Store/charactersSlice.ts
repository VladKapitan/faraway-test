import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Character} from "../Types/appTypes";

interface CharactersState {
    characters: Character[];
}

const initialState: CharactersState = {
    characters: [],
};

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        addCharacters(state, action: PayloadAction<Character[]>) {
            const newCharacters = action.payload;
            state.characters = newCharacters;
        },
        updateCharacter(state, action: PayloadAction<Character>) {
            const updatedCharacter = action.payload;
            const characterIndex = state.characters.findIndex((c) => c.url === updatedCharacter.url);
            if (characterIndex !== -1) {
                state.characters[characterIndex] = updatedCharacter;
            }
        },
    },
});

export const { updateCharacter, addCharacters  } = charactersSlice.actions;

export default charactersSlice.reducer;
