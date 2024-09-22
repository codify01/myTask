import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import BtnOne from "../../components/Buttons/BtnOne";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const Login = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };
  return (
    <div className="flex items-center h-screen mx-auto px-3">
      <div className="border dark:border-neutral-500 border-neutral-400 p-5 rounded-md dark:bg-neutral-800 bg-neutral-200 space-y-10">
        <div className="text-center">
          <h2 className="font-bold text-3xl text-center text-pry">myTask</h2>
          <h2>Sign in to your Account</h2>
          <p>Welcome back to myTask, your effectiveness is our goal 😇</p>
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4 w-full flex flex-col">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm text-gray-900 dark:text-white">
                  Email Address
                </label>
                <Field
                  type="email"
                  name="email"
                  className="bg-neutral-500/60 border border-neutral-500 text-accent-black text-sm rounded-md outline-none block w-full p-3 dark:bg-neutral-900/60 dark:border-gray-800 dark:text-white"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm text-gray-900 dark:text-white">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  className="bg-neutral-500/60 border border-neutral-500 text-accent-black text-sm rounded-md outline-none block w-full p-3 dark:bg-neutral-900/60 dark:border-gray-800 dark:text-white"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-10 py-3 mx-auto bg-pry hover:bg-pry/80 w-full rounded"
              >{isSubmitting ? "Logging in..." : "Login"}</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
