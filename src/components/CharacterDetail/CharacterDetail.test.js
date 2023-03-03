import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import {MemoryRouter} from 'react-router-dom';
import CharacterDetail from "./CharacterDetail";

jest.mock("axios");

describe("CharacterDetail", () => {
    const characterData = {
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        gender: "Male",
        origin: {
            name: "Earth (C-137)",
        },
        location: {
            name: "Earth (Replacement Dimension)",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        episode: ["https://rickandmortyapi.com/api/episode/1"],
    };

    beforeEach(() => {
        axios.get.mockImplementationOnce(() => Promise.resolve({data: characterData}));
    });

    it("should display character information", async () => {
        render(
            <MemoryRouter>
                <CharacterDetail/>
            </MemoryRouter>
        );

        expect(await screen.findByText(/Loading character.../i)).toBeInTheDocument();

        expect(await screen.findByText(characterData.name)).toBeInTheDocument();
        expect(await screen.getByAltText(characterData.name)).toBeInTheDocument();
        expect(await screen.getByText(/status/i)).toHaveTextContent(characterData.status);
        expect(await screen.getByText(/species/i)).toHaveTextContent(characterData.species);
        expect(await screen.getByText(/gender/i)).toHaveTextContent(characterData.gender);
        expect(await screen.getByText(/origin/i)).toHaveTextContent(characterData.origin.name);
        expect(await screen.getByText(/last known location/i)).toHaveTextContent(characterData.location.name);
        expect(await screen.getByText(/number of episodes appearances/i)).toHaveTextContent(characterData.episode.length);

        userEvent.click(screen.getByRole("button"));
        expect(window.location.pathname).toEqual("/");
    });

});
