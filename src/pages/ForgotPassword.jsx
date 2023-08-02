import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import { string, object } from "yup";
import { useDispatch } from "react-redux";
import { forgotPasswordToken } from "../features/user/userSlice";
const ForgotPassword = () => {
  const dispatch = useDispatch();

  let Schema = object({
    email: string()
      .email("Email Should Be Valid")
      .required("Email is Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      dispatch(forgotPasswordToken(values));
    },
  });
  return (
    <>
      <Meta title={"Forgot Password"} />
      <BreadCrumb title={"Forgot Password"} />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center">
                We will send you an email to reset your password
              </p>
              <form
                action=""
                className="d-flex flex-column gap-30"
                onSubmit={formik.handleSubmit}
              >
                <div className="">
                  <CustomInput
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onBlr={formik.handleBlur("email")}
                  />
                </div>
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>
                <div className="">
                  <div className="d-flex flex-column justify-content-center gap-15 align-items-center">
                    <button className="button border-0 m-0">Submit</button>
                    <Link to="/login">Cancel</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ForgotPassword;
