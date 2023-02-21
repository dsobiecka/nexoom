import React, {useState, useEffect} from "react";
import {useNavigate, useParams, useLocation} from "react-router-dom";
import axios from "axios";
import {Wrapper} from "./CharacterDetail.styled";

function CharacterDetail() {
    const navigate = useNavigate();
    const {id} = useParams();
    const location = useLocation();
    const [character, setCharacter] = useState(null);
    const {state} = location;
    const currentPage = state?.currentPage || 1;
    const [shouldAnimateOut, setShouldAnimateOut] = useState(false);

    useEffect(() => {
        async function fetchCharacter() {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
            setCharacter(response.data);
        }

        fetchCharacter();
    }, [id]);

    const handleBackClick = () => {
        setShouldAnimateOut(true);
        setTimeout(() => {
            navigate(-currentPage);
        }, 300); // Wait for animation to finish
    };

    if (!character) {
        return <div>Loading character...</div>;
    }

    const {name, status, species, gender, origin, location: lastLocation, image, episode} = character;

    return (
        <Wrapper className={shouldAnimateOut ? 'zoom-out' : ''}>
            <h1>{name}</h1>
            <img src={image} alt={name}/>
            <p>Status: {status}</p>
            <p>Species: {species}</p>
            <p>Gender: {gender}</p>
            <p>Origin: {origin.name}</p>
            <p>Last known location: {lastLocation.name}</p>
            <p>Number of episodes appearances: {episode.length}</p>
            <button onClick={handleBackClick}>
                <span>Back to characters</span><i></i>
            </button>
        </Wrapper>
    );
}


export default CharacterDetail;
