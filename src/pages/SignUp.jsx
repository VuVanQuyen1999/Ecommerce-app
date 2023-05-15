import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <>
            <Meta title={"Sign Up"} />
            <BreadCrumb title={"Sign Up"} />
            <div className="login-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">Sign Up</h3>
                                <form
                                    action=""
                                    className="d-flex flex-column gap-30"
                                >
                                    <div className="">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div className="">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Your email"
                                        />
                                    </div>
                                    <div className="">
                                        <input
                                            type="tel"
                                            className="form-control"
                                            name="mobile"
                                            placeholder="Mobile number"
                                        />
                                    </div>
                                    <div className="">
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="Your password"
                                        />
                                    </div>
                                    <div className="">
                                        <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                            <button
                                                className="button border-0"
                                                type="submit"
                                            >
                                                Create
                                            </button>
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

export default SignUp;
