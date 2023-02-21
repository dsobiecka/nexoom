import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import CharacterList from "./CharacterList";

jest.mock("axios", () => ({
    get: jest.fn(() =>
        Promise.resolve({
            data: {
                results: [
                    {
                        id: 1,
                        name: "Rick Sanchez",
                        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                    },
                    {
                        id: 2,
                        name: "Morty Smith",
                        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                    },
                ],
                info: {
                    pages: 3,
                },
            },
        })
    ),
}));

jest.mock("react-router-dom", () => ({
    Link: ({children}) => children,
    useLocation: () => ({
        search: "?page=1",
    }),
    useNavigate: () => jest.fn(),
}));

describe("CharacterList", () => {
    it("should render characters and pagination", async () => {
        render(<CharacterList/>);
        const titleElement = screen.getByAltText("title");
        const characterElements = screen.getAllByRole("link");
        const previousPageButton = screen.getByText("Previous Page");
        const nextPageButton = screen.getByText("Next Page");
        const pageStatus = screen.getByText("Page 1 of 3");

        expect(titleElement).toBeInTheDocument();
        expect(characterElements.length).toBe(2);
        expect(previousPageButton).toBeDisabled();
        expect(nextPageButton).toBeEnabled();
        expect(pageStatus).toBeInTheDocument();

        fireEvent.click(nextPageButton);

        expect(previousPageButton).toBeEnabled();
        expect(nextPageButton).toBeEnabled();
        expect(pageStatus).toHaveTextContent("Page 2 of 3");
    });
});
