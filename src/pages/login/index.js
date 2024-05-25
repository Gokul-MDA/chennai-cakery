import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import User from "assets/Images/user.png";
import Baker1 from "assets/Images/baker1.png";

const Login = () => {
  const initialValues = {
    name: "",
    email: "",
    address: "",
    pincode: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    address: Yup.string().required("Address is required"),
    pincode: Yup.string().required("Pincode is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-5">
      <div className="flex w-[1136px] p-11 items-center gap-11 rounded-[64px] shadow-lg bg-Layout-100 h-90vh">
        <div className="flex flex-row gap-11 h-[540px]">
          <div className="flex flex-col w-[358px] h-[540px] justify-center items-center gap-3">
            <div className="flex flex-col items-center">
              <h2 className="text-Primary-Gunmetalgrey font-poppins text-[32px] font-semibold leading-normal">
                Create Account
              </h2>
              <p className="text-Layout-500 text-center font-poppins text-[10px] font-medium leading-normal">
                You have to register first to get all our Services
              </p>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form
                action="#"
                id="formfields"
                className="flex flex-col items-start gap-4 self-stretch"
              >
                <div className="flex w-[375px] items-start gap-4 relative">
                  <img
                    className="w-12 h-12 bg-cover bg-no-repeat"
                    src={User}
                    alt="user icon"
                  />
                  <div className="flex p-1 justify-center items-center gap-10 absolute bottom-0 left-[38.5px] rounded-[5px] bg-white shadow-3xl">
                    <a href="#Home">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 17 16"
                        fill="none"
                      >
                        <path
                          d="M9.33958 2.39982L3.86624 8.19315C3.65958 8.41315 3.45958 8.84649 3.41958 9.14649L3.17291 11.3065C3.08624 12.0865 3.64624 12.6198 4.41958 12.4865L6.56624 12.1198C6.86624 12.0665 7.28624 11.8465 7.49291 11.6198L12.9662 5.82649C13.9129 4.82649 14.3396 3.68649 12.8662 2.29315C11.3996 0.913152 10.2862 1.39982 9.33958 2.39982Z"
                          stroke="#161E40"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.42676 3.36621C8.71342 5.20621 10.2068 6.61288 12.0601 6.79954"
                          stroke="#161E40"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.5 14.667H14.5"
                          stroke="#161E40"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-1 self-stretch">
                  <label className="text-Layout-700 font-poppins text-[12px] font-normal leading-5">
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    className="flex py-[6px] px-[14px] text-sm items-center self-stretch rounded-lg border-[1.4px] border-solid border-Layout-300 bg-Layout-100"
                    placeholder="John Doe"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-[10px] font-poppins"
                  />
                </div>
                <div className="flex flex-col justify-center items-start gap-1 self-stretch">
                  <label className="text-Layout-700 font-poppins text-[12px] font-normal leading-5">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className="flex py-[6px] px-[14px] text-sm items-center self-stretch rounded-lg border-[1.4px] border-solid border-Layout-300 bg-Layout-100"
                    placeholder="JohnDoe@example.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-[10px] font-poppins"
                  />
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <label className="text-Layout-700 font-poppins text-[12px] font-normal leading-5">
                    Address
                  </label>
                  <Field
                    as="textarea"
                    name="address"
                    className="resize-none flex py-[6px] px-[16px] text-sm items-center self-stretch rounded-lg border-[1.4px] border-solid border-Layout-300 bg-Layout-100 h-[92px]"
                    placeholder="Enter Address"
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-red-500 text-[10px] font-poppins"
                  />
                </div>
                <div className="flex flex-col justify-center items-start gap-1 self-stretch">
                  <label className="text-Layout-700 font-poppins text-[12px] font-normal leading-5">
                    Pincode
                  </label>
                  <Field
                    type="text"
                    name="pincode"
                    className="flex py-[6px] px-[16px] text-sm items-center self-stretch rounded-lg border-[1.4px] border-solid border-Layout-300 bg-Layout-100"
                    placeholder="629000"
                  />
                  <ErrorMessage
                    name="pincode"
                    component="div"
                    className="text-red-500 text-[10px] font-poppins"
                  />
                </div>
                <div className="flex py-[10px] px-[40px] justify-center items-center gap-[14px] self-stretch rounded-lg bg-gradient-to-r from-Primary-Pinkcus to-Primary-Rosecus">
                  <button
                    type="submit"
                    className="text-Primary-White text-center font-poppins text-[12px] font-semibold leading-normal"
                  >
                    Create Account
                  </button>
                </div>
              </Form>
            </Formik>
          </div>

          <div className="bg-Primary-Greencus w-[666px] h-[540px] rounded-[64px]">
            <img
              src={Baker1}
              alt="baker"
              className="w-[555.286px] h-[546px] bg-cover bg-no-repeat my-[30px] ml-[55px] mr-[55.7px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
