import React from 'react';
import {render, screen} from '@testing-library/react';
import {MemoryRouter, Route} from 'react-router-dom';
import App from './App';
import CharacterList from './components/CharacterList/CharacterList';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';

describe('App', () => {
    test('renders CharacterList on the home route', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <App/>
            </MemoryRouter>
        );

        expect(screen.getByText('CharacterList')).toBeInTheDocument();
    });

    test('renders CharacterDetail on the character/:id route', () => {
        const mockId = '1';
        render(
            <MemoryRouter initialEntries={[`/character/${mockId}`]}>
                <App/>
            </MemoryRouter>
        );

        expect(screen.getByText(`CharacterDetail ${mockId}`)).toBeInTheDocument();
    });

    test('renders 404 on an unknown route', () => {
        render(
            <MemoryRouter initialEntries={['/unknown']}>
                <App/>
            </MemoryRouter>
        );

        expect(screen.getByText('404')).toBeInTheDocument();
    });
});

describe('CharacterList', () => {
    test('renders correctly', () => {
        render(<CharacterList/>);

        expect(screen.getByText('CharacterList')).toBeInTheDocument();
    });
});

describe('CharacterDetail', () => {
    test('renders correctly', () => {
        const mockId = '1';
        render(
            <Route path={`/character/${mockId}`}>
                <CharacterDetail/>
            </Route>
        );

        expect(screen.getByText(`CharacterDetail ${mockId}`)).toBeInTheDocument();
    });
});
