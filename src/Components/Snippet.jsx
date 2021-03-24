import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Fade from "react-reveal/Fade";
import domain from "../util/domain";

const Snippet = ({
  title,
  description,
  code,
  _id,
  getSnippet,
  setAddSnippet,
  snippet,
  setEditSnippet,
  EditSnippet,
}) => {
  const deleteSnippet = async () => {
    try {
      if (window.confirm("Do you want to delete ?")) {
        await axios.delete("" + domain + "/snippet/" + _id + "");
        getSnippet();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const editSnippet = async () => {
    try {
      setAddSnippet(true);
      setEditSnippet(snippet);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <div>
        <div>
          {title && <h1>{title}</h1>}
          <div className="underline"></div>
          <h5>{description}</h5>
        </div>

        <Fade left>
          
          <pre>
          <code>{code}</code>
          </pre>
          
        </Fade>

        <Button
          variant="contained"
          color="secondary"
          className="btn"
          onClick={deleteSnippet}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className="btn"
          onClick={editSnippet}
        >
          Edit
        </Button>
      </div>
    </Wrapper>
  );
};

export default Snippet;

//============Styled====================

const Wrapper = styled.section`
  color: #f6f6f8;
  border-radius: 2%;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  justify-self: center;
  width: 100%;
  background:#444447;

  pre {
    background: #585454;
    border-radius: 2%;
    display: block;
  font-family: monospace;
  white-space: pre;
  margin: 1em 0;
  }
`;
