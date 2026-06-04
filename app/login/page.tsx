"use client";
import React from "react";
import HeaderWh from "@/components/HeaderWh/HeaderWh";
import css from "./page.module.css";
import Image from "next/image";
import login from "../../public/login.png";
import dog from "../../public/dog.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import * as Yup from "yup";

const LoginSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid Email")
    .required("Email is required"),

  password: Yup.string()
    .min(7, "Minimum 7 characters")
    .required("Password is required"),
  confirmPs: Yup.string()
    .min(7, "Minimum 7 characters")
    .required("Password is required"),
});

const LogIn = () => {
  return (
    <div className={css.loginPage}>
      <HeaderWh />
      <div className={css.containerLogin}>
        <div className={css.rightSide}>
          <Image className={css.registerImg} src={login} alt="Cat" priority />
          <div className={css.commentContainer}>
            <div className={css.coverImg}>
              <Image className={css.catImg} src={dog} alt="Cat" priority />
            </div>
            <div>
              <ul className={css.descComment}>
                <li>
                  <p className={css.nameComment}>Rich</p>
                </li>
                <li>
                  <p className={css.birthCat}>
                    Birthday:{" "}
                    <span className={css.spanBithCat}>21.09.2020</span>
                  </p>
                </li>
              </ul>
              <p className={css.descCat}>
                Rich would be the perfect addition to an active family that
                loves to play and go on walks. I bet he would love having a
                doggy playmate too!
              </p>
            </div>
          </div>
        </div>
        <div className={css.leftSide}>
          <h1 className={css.loginTitle}>Log in</h1>
          <p className={css.loginDescrip}>
            Welcome! Please enter your credentials to login to the platform:
          </p>
          <Formik
            validationSchema={LoginSchema}
            initialValues={{
              name: "",
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form className={css.formLogin}>
              <Field
                name="email"
                className={css.fieldLogin}
                placeholder="Email"
              />
              <ErrorMessage
                name="email"
                component="p"
                className={css.errField}
              />
              <Field
                name="password"
                className={css.fieldLogin}
                placeholder="Password"
              />
              <ErrorMessage
                name="password"
                component="p"
                className={css.errField}
              />

              <button className={css.btnLogin}>Log In</button>
            </Form>
          </Formik>
          <div className={css.registerContainer}>
            <p className={css.textLink}>Don’t have an account?</p>{" "}
            <Link className={css.registerLink} href="/register">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
