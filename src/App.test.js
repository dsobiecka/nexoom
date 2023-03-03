import React from 'react';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import App from './App';
import CharacterList from './components/CharacterList/CharacterList';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';

describe('App', () => {
    test('renders CharacterList on the home route', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <CharacterList/>
            </MemoryRouter>
        );
    });

    test('renders CharacterDetail on the character/:id route', () => {
        const mockId = '1';
        render(
            <MemoryRouter initialEntries={[`/character/${mockId}`]}>
                <CharacterDetail/>
            </MemoryRouter>
        );
    });
});

describe('CharacterList', () => {
    test('renders correctly', () => {
        render(
            <MemoryRouter>
                <CharacterList/>
            </MemoryRouter>
        );
    });
});

describe('CharacterDetail', () => {
    test('renders correctly', () => {
        const mockId = '1';
        render(
            <MemoryRouter initialEntries={[`/character/${mockId}`]}>
                <CharacterDetail/>
            </MemoryRouter>
        );
    });
});
