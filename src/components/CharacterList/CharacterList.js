import React, {useState, useEffect} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {Wrapper, Container, Element, Pagination} from "./CharacterList.styled";
import titleImg from '../../images/title.png';

function CharacterList() {
    const navigate = useNavigate();
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const currentPageFromURL = queryParams.get("page") || 1;

    useEffect(() => {
        setCurrentPage(parseInt(currentPageFromURL, 10));
        axios
            .get(`https://rickandmortyapi.com/api/character?page=${currentPageFromURL}`)
            .then((response) => {
                setCharacters(response.data.results);
                setTotalPages(response.data.info.pages);
                setCurrentPage(Number(currentPageFromURL));
            })
            .catch((error) => {
                console.log(error);
            });
    }, [currentPageFromURL]);

    const handleNextPage = () => {
        navigate(`?page=${currentPage + 1}`);
    };

    const handlePreviousPage = () => {
        navigate(`?page=${currentPage - 1}`);
    };

    return (
        <Wrapper>
            <img src={titleImg} alt="title"/>
            <Container>
                {characters.map((character) => (
                    <Element key={character.id}>
                        <Link
                            to={{pathname: `/character/${character.id}`, state: {currentPage}}}
                        >
                            <img src={character.image} alt={character.name}/>
                            <p>{character.name}</p>
                        </Link>
                    </Element>
                ))}
            </Container>
            <Pagination>
                <div>
                    <button onClick={handlePreviousPage} disabled={currentPageFromURL <= "1"}>
                        Previous Page
                    </button>
                    <button onClick={handleNextPage} disabled={currentPageFromURL === totalPages.toString()}>
                        Next Page
                    </button>
                </div>
                <span>Page {currentPageFromURL} of {totalPages}</span>
            </Pagination>
        </Wrapper>
    );
}

export default CharacterList;
