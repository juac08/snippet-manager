import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import Snippet from "./Snippet";
import Button from "@material-ui/core/Button";
import CreateSnippet from "./CreateSnippet";
import UserContext from "../Context/UserContext";
import Hero from '../Components/hero.svg'
import domain from "../util/domain";

const Home = () => {
  const [snippets, setSnippets] = useState([]);
  const [addSnippet, setAddSnippet] = React.useState(false);
  const [EditSnippet, setEditSnippet] = React.useState();
  const { user } = useContext(UserContext);

  const getSnippet = async () => {
    try {
      const response = await axios.get(""+domain+"/snippet/");
      setSnippets(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if(!user) return;
    getSnippet();
  }, [user]);

  // =========SORTING=================
  let sortedSnippets = [...snippets];
  sortedSnippets = sortedSnippets.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
  return (
    <>
      <div>
        {!user && (
          <div className='container'>
          <h1 className='message'>Welcome to Snippet Manager</h1>
          <img src={Hero} alt="hero"/>
          </div>
          )}
        {!addSnippet && user && (
          <div className='st'>
            <h1>Add new Snippet</h1>
            <Button
              onClick={() => setAddSnippet(true)}
              variant="contained"
              color="secondary"
           className="btn"
            >
              Add Snippet
            </Button>
          </div>
        )}
        {addSnippet && (
          <div className="login-wrapper" style={{background:'white'}}>
          <div className='form-control'>
          <h1 style={{textAlign:'center'}}>Add Snippet</h1>
          <div className="underline"></div>
            <CreateSnippet
              addSnippet={addSnippet}
              getSnippet={getSnippet}
              setAddSnippet={setAddSnippet}
              EditSnippet={EditSnippet}
              setEditSnippet={setEditSnippet}
            />
            <Button
              style={{width:'100%'}}
              onClick={() => {
                setAddSnippet(false);
                setEditSnippet(undefined);
              }}
              variant="contained"
              color="secondary"
            >
              Close
            </Button>
            </div>
          </div>
        )}
      </div>
      <Wrapper>
        {sortedSnippets.map((snippet) => {
          const { _id, title, code, description } = snippet;
          return (
            <div key={_id} className='snip'>
              <Snippet
                title={title}
                description={description}
                code={code}
                _id={_id}
                getSnippet={getSnippet}
                setAddSnippet={setAddSnippet}
                snippet={snippet}
                setEditSnippet={setEditSnippet}
                EditSnippet={EditSnippet}
              />
            </div>
          );
        })}
      </Wrapper>
    </>
  );
};

export default Home;

//============Styled====================

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
justify-content:center;
background:white;

  .snip{
    text-align: center;
    padding: 1rem;
    line-height: 2rem;
  }
  Button {
    margin: 0.5rem;
    
  }
  
 
`;
