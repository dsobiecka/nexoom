import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import {MemoryRouter, Route} from "react-router-dom";
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
            <MemoryRouter initialEntries={[`/character/2`]}>
                <Route path="/character/:id">
                    <CharacterDetail/>
                </Route>
            </MemoryRouter>
        );

        expect(await screen.findByText(/loading character/i)).toBeInTheDocument();

        expect(screen.getByText(characterData.name)).toBeInTheDocument();
        expect(screen.getByAltText(characterData.name)).toBeInTheDocument();
        expect(screen.getByText(/status/i)).toHaveTextContent(characterData.status);
        expect(screen.getByText(/species/i)).toHaveTextContent(characterData.species);
        expect(screen.getByText(/gender/i)).toHaveTextContent(characterData.gender);
        expect(screen.getByText(/origin/i)).toHaveTextContent(characterData.origin.name);
        expect(screen.getByText(/last known location/i)).toHaveTextContent(characterData.location.name);
        expect(screen.getByText(/number of episodes appearances/i)).toHaveTextContent(characterData.episode.length);

        userEvent.click(screen.getByRole("button"));
        expect(window.location.pathname).toEqual("/characters");
    });
});
