import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <Meta title={"Login"} />
            <BreadCrumb title={"Login"} />
            <div className="login-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">Login</h3>
                                <form
                                    action=""
                                    className="d-flex flex-column gap-30"
                                >
                                    <div className="">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Your email"
                                        />
                                    </div>
                                    <div className="mt-1">
                                        <input
                                            type="password"
                                            className="form-control"
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
                </div>
            </div>
        </>
    );
};

export default Login;
