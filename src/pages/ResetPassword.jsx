import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { string, object } from "yup";
import { toast } from "react-toastify";
import { resetPassword } from "../features/user/userSlice";

const ResetPassword = () => {
  const location = useLocation();
  const getToken = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let Schema = object({
    password: string().required("Password is Required"),
    confPassword: string().required("Confirm Password is Required"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      if (values.password === values.confPassword) {
        const data = { token: getToken, password: values.password };
        dispatch(resetPassword(data));
        navigate("/login");
      } else {
        toast.warning("Re-entered password must be the same");
      }
    },
  });

  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrumb title={"Reset Password"} />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Password</h3>
              <form
                action=""
                className="d-flex flex-column gap-30"
                onSubmit={formik.handleSubmit}
              >
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
                <div className="mt-1">
                  <CustomInput
                    type="password"
                    name="confPassword"
                    placeholder="Confirm your password"
                    value={formik.values.confPassword}
                    onChange={formik.handleChange("confPassword")}
                    onBlr={formik.handleBlur("confPassword")}
                  />
                </div>
                <div className="error">
                  {formik.touched.confPassword && formik.errors.confPassword}
                </div>
                <div className="">
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Confirm
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

export default ResetPassword;
