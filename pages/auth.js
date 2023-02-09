import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import styles from "../styles/login.module.scss";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { LoginInput } from "@/components/inputs/loginInput";
import { useState } from "react";
import { CircledIconBtn } from "@/components/buttons/circledIconBtn";
import { getProviders, signIn } from "next-auth/react";
import axios from "axios";
import { ClockSpinner } from "@/components/loaders/ClockLoader";
import { Router } from "next/router";

const login_initialValues = {
  email: "",
  password: "",
};
const signup_initialValues = {
  username: "",
  reg_email: "",
  reg_password: "",
  conf_password: "",
};
const auth = ({ providers }) => {
  const [loginUser, setLoginUser] = useState(login_initialValues);
  const [signupUser, setSignupUser] = useState(signup_initialValues);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { email, password } = loginUser;
  const { username, reg_email, reg_password, conf_password } = signupUser;

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };
  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupUser({ ...signupUser, [name]: value });
  };
  const validation = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
  });
  const reg_validation = Yup.object({
    username: Yup.string().required("Username is required"),
    reg_email: Yup.string()
      .required("Email is required")
      .email("Please enter a valid email"),
    reg_password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be no less than 6 characters"),
    conf_password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be no less than 6 characters")
      .oneOf([Yup.ref("reg_password")], "Passwords must match!"),
  });
  const handleSignup = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("api/auth/signup", {
        username,
        reg_email,
        reg_password,
      });
      setLoading(false);
      setSignupUser(data.result.response);
      setMessage("Account created Successfully");
      Router.push("/");
    } catch (er) {
      setLoading(false);
      if (er.response.status == 400) {
        console.log(er.response.status);
        setError(er.response.data);
      } else {
        console.log(er.response.status == 400);
      }
    }
  };
  // const handleLogin = async () => {
  //   try {
  //     setLoading(true);
  //     const data = {
  //       redirect: false,
  //       email,
  //       password,
  //     };
  //     const res = await signIn("credentials", data);
  //     setLoading(false);
  //     console.log(res);
  //   } catch (error) {}
  // };
  return (
    <>
      {loading && <ClockSpinner />}
      <Header />

      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back_svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              We'd happy to join us <Link href="/">Go to Store</Link>
            </span>
          </div>
          <div className={styles.login__form}>
            <h1>Sign in</h1>
            <p>Get access to one of the best Eshopping service in the world</p>
            <Formik
              enableReinitialize
              initialValues={{ email, password }}
              validationSchema={validation}
              onSubmit={handleLogin}
            >
              {(form) => (
                <Form>
                  <LoginInput
                    type="text"
                    name="email"
                    icon="email"
                    placeholder="User Address"
                    // onChange={handleLoginChange}
                  />
                  <LoginInput
                    type="password"
                    name="password"
                    icon="password"
                    placeholder="User Password"
                    onChange={handleLoginChange}
                  />
                  <CircledIconBtn type="submit" text="Submit" />
                  <div className={styles.forgot}>
                    <Link href="/forgot">Forgot Password</Link>
                  </div>
                </Form>
              )}
            </Formik>
            <div className={styles.login__socials}>
              <span className={styles.or}>Or continue with</span>
              <div className={styles.login__socials_wrap}>
                {providers.map((provider) => (
                  <div key={provider.name}>
                    <button
                      className={styles.social__btn}
                      onClick={() => signIn(provider.id)}
                    >
                      <img src={`/images/${provider.id}.png`} alt="" />
                      Sign in with {provider.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.login__container}>
          <div className={styles.login__form}>
            <h1>Sign up</h1>
            <p>Get access to one of the best E-shopping service in the world</p>
            <Formik
              enableReinitialize
              initialValues={{
                reg_email,
                reg_password,
                username,
                conf_password,
              }}
              validationSchema={reg_validation}
              onSubmit={handleSignup}
            >
              {(form) => (
                <Form>
                  <LoginInput
                    type="text"
                    name="username"
                    icon="user"
                    placeholder="User name"
                    onChange={handleSignupChange}
                  />
                  <LoginInput
                    type="text"
                    name="reg_email"
                    icon="email"
                    placeholder="User Address"
                    onChange={handleSignupChange}
                  />
                  <LoginInput
                    type="password"
                    name="reg_password"
                    icon="password"
                    placeholder="User Password"
                    onChange={handleSignupChange}
                  />
                  <LoginInput
                    type="password"
                    name="conf_password"
                    icon="password"
                    placeholder="Re-type Password"
                    onChange={handleSignupChange}
                  />
                  <CircledIconBtn type="submit" text="Submit" />
                </Form>
              )}
            </Formik>
            {error && <h6 className="text-red-500">{error}</h6>}
            {message && <h6 className="text-green-500">{message}</h6>}
          </div>
        </div>
      </div>
      <Footer country="Liberia" />
    </>
  );
};
export const getServerSideProps = async (context) => {
  const providers = Object.values(await getProviders());
  return {
    props: {
      providers,
    },
  };
};
export default auth;
