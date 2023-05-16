import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Login = () => {
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
                                <div className="mt-1">
                                    <CustomInput
                                        type="password"
                                        name="password"
                                        placeholder="Your password"
                                    />
                                </div>
                                <div className="">
                                    <Link to="/forgot-password">
                                        Forgot Your Password?
                                    </Link>
                                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button
                                            className="button border-0"
                                            type="submit"
                                        >
                                            Login
                                        </button>
                                        <Link
                                            to="/signup"
                                            className="signup button border-0"
                                        >
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
