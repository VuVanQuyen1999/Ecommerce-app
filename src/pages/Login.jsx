import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import { string, object } from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/user/userSlice";

const Login = () => {
  const authState = useSelector((state) => state?.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let Schema = object({
    email: string()
      .email("Email Should Be Valid")
      .required("Email is Required"),
    password: string().required("Password is Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });
  useEffect(() => {
    if (authState?.user !== null && authState?.isError === false) {
      navigate("/");
    }
  }, [authState]);
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title={"Login"} />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form
                onSubmit={formik.handleSubmit}
                action=""
                className="d-flex flex-column gap-15"
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
                <div className="mt-1">
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
                  <Link to="/forgot-password">Forgot Your Password?</Link>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Login
                    </button>
                    <Link to="/signup" className="signup button border-0">
                      Sign Up
                    </Link>
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

export default Login;
