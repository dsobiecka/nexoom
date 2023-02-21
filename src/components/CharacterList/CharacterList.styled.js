import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 2rem;

  img {
    margin: 0 auto;
    display: block;
    max-width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Pagination = styled.div`
  text-align: center;
  position: fixed;
  z-index: 100;
  top: 10px;
  right: 10px;
  background: white;
  padding: 2rem;
  box-shadow: 0 16px 24px 0 rgb(0 0 0 / 12%);

  button {
    cursor: pointer;
  }

  span {
    padding-top: 1rem;
    display: block;
  }
`;

export const Element = styled.div`
  margin-bottom: 3%;
  box-shadow: 0 16px 24px 0 rgb(0 0 0 / 12%);

  p {
    text-align: center;
  }
`;
