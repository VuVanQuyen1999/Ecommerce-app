import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import { useFormik } from "formik";
import { object, string, number } from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../features/user/userSlice";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";

const Profile = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state?.auth?.user);
  const [edit, setEdit] = useState(true);
  console.log(userState);

  const profileSchema = object({
    email: string()
      .email("Email Should Be Valid")
      .required("Email Address is Required"),
    firstname: string().required("First Name is Required"),
    lastname: string().required("Last Name is Required"),
    mobile: number().required("Mobile is Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: userState?.email,
      firstname: userState?.firstname,
      lastname: userState?.lastname,
      mobile: userState?.mobile,
    },
    validationSchema: profileSchema,
    onSubmit: (values) => {
      dispatch(updateProfile(values));
      setEdit(true);
    },
  });

  return (
    <>
      <BreadCrumb title="My Profile"></BreadCrumb>
      <Container>
        <div className="row cart-wrapper home-wrapper-2 py-5">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="my-3">Update Profile</h3>
              <FiEdit
                className="fs-3"
                style={{ cursor: "pointer" }}
                onClick={() => setEdit(false)}
              ></FiEdit>
            </div>
          </div>
          <div className="col-12">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="example1" className="form-label">
                  First Name
                </label>
                <input
                  disabled={edit}
                  type="text"
                  name="firstname"
                  className="form-control"
                  id="example1"
                  value={formik.values.firstname}
                  onChange={formik.handleChange("firstname")}
                  onBlur={formik.handleBlur("firstname")}
                />
              </div>
              <div className="error">
                {formik.touched.firstname && formik.errors.firstname}
              </div>

              <div className="mb-3">
                <label htmlFor="example2" className="form-label">
                  Last Name
                </label>
                <input
                  disabled={edit}
                  type="text"
                  name="lastname"
                  className="form-control"
                  id="example2"
                  value={formik.values.lastname}
                  onChange={formik.handleChange("lastname")}
                  onBlur={formik.handleBlur("lastname")}
                />
              </div>
              <div className="error">
                {formik.touched.lastname && formik.errors.lastname}
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  disabled={edit}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  aria-describedby="emailHelp"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                />
              </div>
              <div className="error">
                {formik.touched.email && formik.errors.email}
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputMobile1" className="form-label">
                  Mobile No
                </label>
                <input
                  disabled={edit}
                  type="number"
                  name="mobile"
                  className="form-control"
                  id="exampleInputMobile1"
                  value={formik.values.mobile}
                  onChange={formik.handleChange("mobile")}
                  onBlur={formik.handleBlur("mobile")}
                />
              </div>
              <div className="error">
                {formik.touched.mobile && formik.errors.mobile}
              </div>

              {edit === false && (
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              )}
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Profile;
