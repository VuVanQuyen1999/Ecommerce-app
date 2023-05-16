import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const ForgotPassword = () => {
    return (
        <>
            <Meta title={"Forgot Password"} />
            <BreadCrumb title={"Forgot Password"} />
            <Container class1="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3">
                                Reset Your Password
                            </h3>
                            <p className="text-center">
                                We will send you an email to reset your password
                            </p>
                            <form
                                action=""
                                className="d-flex flex-column gap-30"
                            >
                                <div className="">
                                    <CustomInput
                                        type="email"
                                        name="email"
                                        placeholder="Your email"
                                    />
                                </div>
                                <div className="">
                                    <div className="d-flex flex-column justify-content-center gap-15 align-items-center">
                                        <button className="button border-0 m-0">
                                            Submit
                                        </button>
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
