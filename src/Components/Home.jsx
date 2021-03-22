import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Snippet from "./Snippet";
import Button from "@material-ui/core/Button";
import CreateSnippet from "./CreateSnippet";

const Home = () => {
  const [snippets, setSnippets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [addSnippet, setAddSnippet] = React.useState(false);
  const [EditSnippet, setEditSnippet] = React.useState();

  const getSnippet = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/snippet/");
      setSnippets(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSnippet();
  }, []);
  if (loading) {
    return <h1>Loading....</h1>;
  }
 

  return (
    <>
      <div>
        {!addSnippet && (
          <div className="form-control">
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
          <div className="form-control">
            <CreateSnippet
              addSnippet={addSnippet}
              getSnippet={getSnippet}
              setAddSnippet={setAddSnippet}
              EditSnippet={EditSnippet}
              setEditSnippet={setEditSnippet}
            />
            <Button
              className="btn"
              onClick={() => setAddSnippet(false)}
              variant="contained"
              color="secondary"
            >
              Close
            </Button>
          </div>
        )}
      </div>
      <Wrapper>
        {snippets.map((snippet) => {
          const { _id, title, code, description } = snippet;
          return (
            <div key={_id}>
              <Snippet
                title={title}
                description={description}
                code={code}
                id={_id}
                getSnippet={getSnippet}
                setLoading={setLoading}
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
  place-items: center;
  background: #ffffff;

  div {
    text-align: center;
    padding: 1rem;
    width: 100%;
    height: 100%;
    line-height: 2rem;
  }
  Button {
    margin: 0.5rem;
  }
`;
