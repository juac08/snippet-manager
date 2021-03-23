import React from "react";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import { Link ,useHistory} from "react-router-dom";
import axios from "axios";
import UserContext from "../Context/UserContext";


const RegistrationForm = () => {
  const {getUser} = React.useContext(UserContext);
  const history =useHistory();


  const initialValues = {
    email: "",
    password: "",
    passwordVerify: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    passwordVerify: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password must match")
      .required("Required"),
  });

  const onSubmit = async (values, onSubmitProps) => {
    onSubmitProps.resetForm();
    await axios.post('http://localhost:5000/auth/',values)
    history.push("/");
    await getUser();
  };
  return (
    <div className="form-control">
      <h1 style={{ margin: "1rem" }}>Register New Account</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
              placeholder="Enter Email"
            />

            <FormikControl
              control="input"
              type="password"
              label="Password"
              name="password"
              placeholder="Enter Password"
            />
            <FormikControl
              control="input"
              type="password"
              label="Confirm Password"
              name="passwordVerify"
              placeholder="Confirm Password"
            />
            <div className="btn">
              <Button
                type="submit"
                disabled={!formik.isValid}
                variant="contained"
                color="secondary"
              >
                Submit
              </Button>

              <div className="form-control">
                <p>
                  Already have a account?  
                  <Link to="/login">Login</Link>
                </p>

              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
