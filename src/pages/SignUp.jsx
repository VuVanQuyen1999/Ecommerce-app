import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const SignUp = () => {
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
                                className="d-flex flex-column gap-30"
                            >
                                <div className="">
                                    <CustomInput
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="">
                                    <CustomInput
                                        type="email"
                                        name="email"
                                        placeholder="Your email"
                                    />
                                </div>
                                <div className="">
                                    <CustomInput
                                        type="tel"
                                        name="mobile"
                                        placeholder="Mobile number"
                                    />
                                </div>
                                <div className="">
                                    <CustomInput
                                        type="password"
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
            </Container>
        </>
    );
};

export default SignUp;
