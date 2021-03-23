import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Fade from "react-reveal/Fade";


const Snippet = ({ title, description, code, _id, getSnippet,setAddSnippet,snippet,setEditSnippet,EditSnippet}) => {
  const deleteSnippet = async () => {
    try {
      if(window.confirm("Do you want to delete ?")){
        await axios.delete("http://localhost:5000/snippet/" + _id + "");
        getSnippet();
      }
     
    } catch (error) {
      console.log(error);
    }
  };
  const editSnippet =async ()=>{
    try {
    setAddSnippet(true);
    setEditSnippet(snippet)
   
    } catch (error) {
      console.log(error);
    }
  }
 
  return (
    <Wrapper>
      <div>
      <div>
      {title && <h1>{title}</h1>}
        <h5>{description}</h5>
      </div>
        
        <Fade left><pre>
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
        <Button variant="contained" color="secondary" className="btn" onClick={editSnippet}>
          Edit
        </Button>
      </div>
    </Wrapper>
  );
};

export default Snippet;

//============Styled====================

const Wrapper = styled.section`
  background: #f0f0f1;
  color: #161414;
  border-radius:2%;


  pre{
  background:whitesmoke;
  border-radius:2%;
  text-align:center;
  }
  
`;
