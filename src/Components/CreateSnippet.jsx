import React from "react";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import axios from "axios";

const CreateSnippet = ({ addSnippet,getSnippet,setAddSnippet,EditSnippet,setEditSnippet}) => {
  let initialValues = {
    title: '',
    description: "",
    code: "",
  };
  if(EditSnippet){
    initialValues ={
        title:EditSnippet.title,
        description:EditSnippet.description,
        code:EditSnippet.code
    }
  }
  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    code: Yup.string().required("Required"),
  });
 

  const onSubmit = async (values,initialValues) => {
    try {
        if(!EditSnippet){
            await axios.post("http://localhost:5000/snippet/",values);  
    setAddSnippet(false)
    getSnippet();  
        }else{
           
            
            await axios.put("http://localhost:5000/snippet/"+EditSnippet._id +"",values);
            setAddSnippet(false)
            getSnippet(); 
            setEditSnippet(undefined)
        }
     
      } catch (error) {
        console.log(error);
      }
  };
  return (
    <div>
      {addSnippet && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              <FormikControl
                control="input"
                type="text"
                label="Title"
                name="title"
                placeholder="Enter Title"
              />
              <FormikControl
                control="input"
                type="text"
                label="Description"
                name="description"
                placeholder="Enter Description"
              />
              <FormikControl
                control="textarea"
                type="text"
                label="Code"
                name="code"
                placeholder="Enter Code"
              />

              <div className="btn">
                <Button style={{width:'100%'}}
                  type="submit"
                  disabled={!formik.isValid}
                  variant="contained"
                  color="secondary"
                  onClick={onSubmit}
                >
                  Save
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default CreateSnippet;
