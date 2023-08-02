import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import { string, object, number } from "yup";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/user/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state?.auth);
  const navigate = useNavigate();

  let Schema = object({
    firstname: string().required("First Name is Required"),
    lastname: string().required("Last Name is Required"),
    email: string()
      .email("Email Should Be Valid")
      .required("Email is Required"),
    mobile: number().required("Mobile is Required"),
    password: string().required("Password is Required"),
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });

  useEffect(() => {
    if (authState?.createdUser !== null && authState?.isError === false) {
      navigate("/login");
    }
  }, [authState]);

  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title={"Sign Up"} />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <div className="">
                  <CustomInput
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    value={formik.values.firstname}
                    onChange={formik.handleChange("firstname")}
                    onBlr={formik.handleBlur("firstname")}
                  />
                </div>
                <div className="error">
                  {formik.touched.firstname && formik.errors.firstname}
                </div>
                <div className="">
                  <CustomInput
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={formik.values.lastname}
                    onChange={formik.handleChange("lastname")}
                    onBlr={formik.handleBlur("lastname")}
                  />
                </div>
                <div className="error">
                  {formik.touched.lastname && formik.errors.lastname}
                </div>
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
                  <CustomInput
                    type="tel"
                    name="mobile"
                    placeholder="Mobile number"
                    value={formik.values.mobile}
                    onChange={formik.handleChange("mobile")}
                    onBlr={formik.handleBlur("mobile")}
                  />
                </div>
                <div className="error">
                  {formik.touched.mobile && formik.errors.mobile}
                </div>
                <div className="">
                  <CustomInput
                    type="password"
                    name="password"
                    placeholder="Your password"
                    value={formik.values.password}
                    onChange={formik.handleChange("password")}
                    onBlr={formik.handleBlur("password")}
                  />
                </div>
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>
                <div className="">
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Create
                    </button>
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

export default SignUp;
