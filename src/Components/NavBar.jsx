import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Wrapper>
      <ul className="nav">
        <Link to="/">
          <h1>Snippet Manger</h1>
        </Link>
        <Link to="login">
          <li>Log in</li>
        </Link>
        <Link to="/register">
          <li>Register</li>
        </Link>
      </ul>
    </Wrapper>
  );
};

export default NavBar;

//============Styled====================
const Wrapper = styled.section`
  h1 {
    font-weight: bold;
  }
  ul {
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    background: #f2f0f5;
    padding: 1rem;
    font-size:1rem;
  }
  li {
    list-style: none;
    color:#8847eb
  }
  li:hover{
      color:#183ee7;
      transform:scaleX(1.2) scaleY(1.2);
      transition:all .5s linear;
  }
  a {
    text-decoration: none;
  }
`;
