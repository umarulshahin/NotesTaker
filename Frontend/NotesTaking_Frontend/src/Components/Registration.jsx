import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Header from './Header';
import useAuth from '../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
const Registration = () => {
  // Validation schema using Yup
  const validationSchema =  Yup.object().shape({
    username: Yup.string()
      .matches(
        /^[A-Za-z][A-Za-z0-9_]{3,}$/,
        "Username must start with a letter, cannot contain spaces or special characters, and must be at least 3 characters long"
      )
      .required("Username is required"),
    email: Yup.string().email("Invalid format").required("Email is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
        "Password must be at least 8 characters long, include at least one uppercase letter, one number, and one special character"
      )
      .required("Password is required"),
    
    con_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  // Initial form values
  const initialValues = {
    username: '',
    email: '',
    password: '',
    con_password: ''
  };

   const { Register_Axios } = useAuth();
   const navigate = useNavigate()


  // Handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Registration submitted', values);
    Register_Axios(values, setSubmitting);
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center bg-yellow-100 p-4">
        <div className="w-full max-w-md bg-transparent shadow-md rounded-lg border">
          <div className="flex justify-between bg-orange-300 items-center p-4 border-b rounded-t-lg">
            <div className="text-black font-bold text-xl">Registration</div>
            <div className="flex space-x-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            </div>
          </div>

          {/* Formik Form */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="p-6 space-y-4">
                <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
                
                <div>
                  <span className='font-bold font-serif'>Username</span>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="w-full p-3 border font-serif rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage 
                    name="username" 
                    component="div" 
                    className="text-red-500 bg-red-200 rounded px-2 text-sm mt-1" 
                  />
                </div>

                <div>
                  <span className='font-bold font-serif'>Email</span>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-3 border font-serif rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage 
                    name="email" 
                    component="div" 
                    className="text-red-500 bg-red-200 rounded px-2 text-sm mt-1" 
                  />
                </div>

                <div>
                  <span className='font-bold font-serif'>Password</span>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full p-3 border font-serif rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage 
                    name="password" 
                    component="div" 
                    className="text-red-500 bg-red-200 rounded px-2 text-sm mt-1" 
                  />
                </div>

                <div>
                  <span className='font-bold font-serif'>Confirm Password</span>
                  <Field
                    type="password"
                    name="con_password"
                    placeholder="Confirm Password"
                    className="w-full p-3 border font-serif rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage 
                    name="con_password" 
                    component="div" 
                    className="text-red-500 bg-red-200 rounded px-2 text-sm mt-1" 
                  />
                </div>

                <div className="flex space-x-2 px-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-green-400 font-serif cursor-pointer text-black p-2 rounded-lg hover:bg-green-500 transition duration-300"
                  >
                    Register
                  </button>
                  <button
                    onClick={()=> navigate('/')}

                    type="button"
                    className="flex-1 font-serif text-black p-2 rounded-lg bg-orange-300 hover:bg-orange-400 cursor-pointer transition duration-300"
                  >
                    Login
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Registration;