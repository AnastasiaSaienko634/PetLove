"use client";
import HeaderWh from "@/components/HeaderWh/HeaderWh";
import css from "./page.module.css";
import Image from "next/image";
import register from "../../public/register.png";
import cat from "../../public/cat.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";

const Register = () => {
  return (
    <div className={css.registerPage}>
      <HeaderWh />
      <div className={css.containerRegister}>
        <div className={css.rightSide}>
          <Image
            className={css.registerImg}
            src={register}
            alt="Cat"
            priority
          />
          <div className={css.commentContainer}>
            <div className={css.coverImg}>
              <Image className={css.catImg} src={cat} alt="Cat" priority />
            </div>
            <div>
              <ul className={css.descComment}>
                <li>
                  <p className={css.nameComment}>Jack</p>
                </li>
                <li>
                  <p className={css.birthCat}>
                    Birthday:{" "}
                    <span className={css.spanBithCat}>18.10.2021</span>
                  </p>
                </li>
              </ul>
              <p className={css.descCat}>
                Jack is a gray Persian cat with green eyes. He loves to be
                pampered and groomed, and enjoys playing with toys.
              </p>
            </div>
          </div>
        </div>
        <div className={css.leftSide}>
          <h1 className={css.registerTitle}>Registration</h1>
          <p className={css.registerDescrip}>
            Thank you for your interest in our platform.
          </p>
          <Formik>
            <Form className={css.formRegister}>
              <Field className={css.fieldRegister} placeholder="Email" />
              <Field className={css.fieldRegister} placeholder="Password" />
              <Field
                className={css.fieldRegister}
                placeholder="Confirm password"
              />
              <button className={css.btnRegister}>Registration</button>
            </Form>
          </Formik>
          <div className={css.loginContainer}>
            <p className={css.textLink}>Already have an account?</p>{" "}
            <Link className={css.loginLink} href="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
