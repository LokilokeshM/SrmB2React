import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from '../InputField/TextField';
import * as Yup from 'yup';
import rocketImg from '../assets/rocket.png';
const ValidationStudents = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="my-4 font-weight-bold .display-4">Student Form</h1>
                        <Form>
                            <TextField label="First Name" name="firstName" type="text" />
                            <TextField label="last Name" name="lastName" type="text" />
                            <TextField label="Email" name="email" type="email" />
                            <TextField label="password" name="password" type="password" />
                            <TextField label="Confirm Password" name="confirmPassword" type="password" />
                            <button className="btn btn-dark mt-3" type="submit">Register</button>
                            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                        </Form>
                    </div>
                    <div className="col-md-7 my-auto">
                        <img className="img-fluid w-100" src={rocketImg} alt=""/>
                    </div>
                </div>
            </div>
      )}
    </Formik>
  )
}

export default ValidationStudents;