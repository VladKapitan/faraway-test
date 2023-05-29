import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import CharacterEdit from '../pages/CharacterEdit';

const mockStore = configureStore([]);

describe('CharacterEdit', () => {
    let store: ReturnType<typeof mockStore>;

    beforeEach(() => {
        store = mockStore({
            characters: {
                characters: [
                    {
                        name: 'Luke Skywalker',
                        url: 'https://swapi.dev/api/people/1/',
                        height: '172',
                        hair_color: 'blond',
                        skin_color: 'fair',
                        eye_color: 'blue',
                        birth_year: '19BBY',
                        gender: 'male',
                        homeworld: 'https://swapi.dev/api/planets/1/',
                        films: [],
                        species: [],
                        vehicles: [],
                        starships: [],
                        created: '2014-12-09T13:50:51.644000Z',
                        edited: '2014-12-20T21:17:56.891000Z',
                    },
                ],
                status: 'succeeded',
                error: null,
            },
        });
    });

    it('renders without errors', () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/edit/1']}>
                    <Routes>
                        <Route path="/edit/:id" element={<CharacterEdit/>}/>
                    </Routes>
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByText('Edit character')).toBeInTheDocument();
    });

    it('updates character name', () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/edit/1']}>
                    <Routes>
                        <Route path="/edit/:id" element={<CharacterEdit/>}/>
                    </Routes>
                </MemoryRouter>
            </Provider>
        );

        const nameInput = screen.getByTestId('charter_name');
        expect(nameInput).toBeInTheDocument();

        // Type 'Anakin Skywalker #2' into the name input
        fireEvent.change(nameInput, {target: {value: 'Anakin Skywalker #2'}});
        //@ts-ignore
        expect(nameInput.value).toBe('Anakin Skywalker #2');
    });
});