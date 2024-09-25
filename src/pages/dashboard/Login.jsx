import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../utilities/PageTitle";
import axios from "axios";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      
      const url = 'https://apitask.sunmence.com.ng/login.php';
      
      try {
        // Make the API call with axios
        const { data } = await axios.post(url, values, {withCredentials:true});
        
        console.log(data);
        // console.log(data.user);
        if(data.status === 'success'){
          localStorage.setItem('token', data.token)
          console.log("Login Successfully");
        navigate('/user/dashboard');
        }else{
          console.error("Login failed")
        }

      } catch (error) {
        // Handle errors here
        console.error('Error fetching data', error);

      } finally {
        // Always set submitting to false after the API call completes
        setSubmitting(false);
        resetForm()
      }
    },


  });

  return (
    <div className="flex items-center justify-center h-screen mx-auto px-3">
      <PageTitle title={'Log in'} />
      <div className="border dark:border-neutral-500 border-neutral-400 p-5 rounded-md dark:bg-neutral-800 bg-neutral-200 space-y-10">
        <div className="text-center">
          <h2 className="font-bold text-3xl text-center text-pry">myTask</h2>
          <h2>Sign in to your Account</h2>
          <p>Welcome back to myTask, your effectiveness is our goal 😇</p>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-4 w-full flex flex-col">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm text-gray-900 dark:text-white">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="bg-neutral-500/60 border border-neutral-500 text-accent-black text-sm rounded-md outline-none block w-full p-3 dark:bg-neutral-900/60 dark:border-gray-800 dark:text-white"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-xs">{formik.errors.email}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm text-gray-900 dark:text-white">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="bg-neutral-500/60 border border-neutral-500 text-accent-black text-sm rounded-md outline-none block w-full p-3 dark:bg-neutral-900/60 dark:border-gray-800 dark:text-white"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-xs">{formik.errors.password}</div>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="px-10 py-3 mx-auto bg-pry hover:bg-pry/80 w-full rounded"
          >
            {formik.isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
