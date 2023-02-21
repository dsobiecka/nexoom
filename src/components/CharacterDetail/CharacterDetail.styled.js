import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  max-width: 80%;
  margin: 2.5rem auto;
  box-shadow: 0 16px 24px 0 rgb(0 0 0 / 12%);
  padding: 2rem;
  border-radius: 32px;
  width: 500px;

  button {
    position: relative;
    background: #444;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    padding: 0.75rem 1.5rem;
    margin-top: 2rem;
    transition: 0.5s;
    cursor: pointer;

    span {
      position: relative;
      z-index: 1;
    }

    i {
      position: absolute;
      inset: 0;
      display: block;
    }

    i:before {
      content: "";
      position: absolute;
      top: -8px;
      left: 80%;
      width: 10px;
      height: 10px;
      border: 2px solid #3AB1C8;
      background: #27282c;
      transform: translateX(-50%);
      transition: 0.5s;
    }

    i:after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 20%;
      width: 10px;
      height: 10px;
      border: 2px solid #3AB1C8;
      background: #27282c;
      transform: translateX(-50%);
      transition: 0.5s;
    }
  }

  button:hover {
    letter-spacing: 0.25rem;
    background: #3AB1C8;
    color: #3AB1C8;
    box-shadow: 0 0 30px 0px #3ab1c8;

    i:before {
      left: 20%;
      width: 20px;
    }

    i:after {
      left: 80%;
      width: 20px;
    }
  }

  button:before {
    content: "";
    position: absolute;
    inset: 2px;
    background: #27282c;
  }

  &.zoom-out {
    animation: zoomOut 0.6s ease-in-out;
  }

  @keyframes zoomOut {
    from {
      opacity: 1;
      transform: scale(1);
    }

    to {
      opacity: 0;
      transform: scale(0);
    }
  }


`;
