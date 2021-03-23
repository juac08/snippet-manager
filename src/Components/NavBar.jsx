import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import UserContext from "../Context/UserContext";
import { Button } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router";
import domain from "../util/domain";


const NavBar = () => {
  const { user, getUser,isLogout} = useContext(UserContext);
  const history =useHistory();


  const logout = async () => {
    await axios.get(""+domain+"/auth/logout/");
    await getUser();
    history.push("/logout");
    isLogout(true);
  };

  return (
    <Wrapper>
      <ul className="nav">
        <Link to="/">
          <h1>Snippet Manger</h1>
        </Link>
        {!user ? (
          <>
            <Link to="login">
              <li>Log in</li>
            </Link>
            <Link to="/register">
              <li>Register</li>
            </Link>
          </>
        ) : (
          <Link to="/logout">
            <Button className="btn" color="primary" onClick={logout}>
              Logout
            </Button>
            
          </Link>
        )}
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
    background: rgb(253, 158, 6);
    padding: 1rem;
    font-size: 1rem;
  }
  li {
    list-style: none;
    color: #8847eb;
  }
  li:hover {
    color: #183ee7;
    transform: scaleX(1.2) scaleY(1.2);
    transition: all 0.5s linear;
  }
  a {
    text-decoration: none;
  }
`;
