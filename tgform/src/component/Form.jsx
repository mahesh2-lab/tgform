import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Typography,
  IconButton,
  Button,
  Radio,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { ErrorMessage } from "@hookform/error-message";
import VerifiedIcon from "@mui/icons-material/Verified";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import TopBarProgress from "react-topbar-progress-indicator";

import Profile from "./Profile.jsx";
import useGetUserdata from "../hooks/useGetUserdata.js";
import useSendData from "../hooks/useSendData.js";
import useUploadFile from "../hooks/useUploadFile.js";
import FileUploadComponent from "./FileUpload.jsx";
const Form = () => {
  const { loading, userdata } = useGetUserdata();
  const { load, SendData } = useSendData();
  const [show, setShow] = useState(false);
  const [file, setFile] = useState("");
  const [doc, setDoc] = useState("");
  const [data, setData] = useState([]);
  const { UploadFile } = useUploadFile();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const handleFileChange = (event, index, docname) => {
    const file = event.target.files[0];
    if (file.type !== "application/pdf") {
      alert("Please upload pdf file");
      event.target.value = "";
      return;
    }
    if (file.size > 1048576) {
      alert("File size should be less than 1MB");
      event.target.value = "";
      return;
    }
    const modifiedFileName = `${docname}.pdf`;
    const modifiedFile = new File([file], modifiedFileName, {
      type: file.type,
    });
    setDoc((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles[index] = modifiedFile;
      return newFiles;
    });
  };

  const onSubmit = (data) => {
    data = { ...data, img: file };
    data.dob = new Date(data.dob).toLocaleDateString();
    data.doa = new Date(data.doa).toLocaleDateString();

    setData(data);

    if (!data.img) {
      alert("Please upload image");
      return;
    }

    if (doc == "") {
      alert("Please upload document");
      return;
    }
    handleOpen();
  };

  const hanldeSendData = async (e) => {
    e.preventDefault();
    handleOpen();
    const task2 = await UploadFile(doc);
    const task1 = await SendData(data);

    await Promise.all([task2, task1]);

  //  setShow(false);

  };

  return (
    <>
      {loading && <TopBarProgress />}
      {show ? (
        <div className="bg-white rounded-lg shadow-lg max-w-full  w-9/12 mx-auto flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div
            className="w-full flex items-end justify-end"
            onClick={() => setShow(false)}
          >
            <IconButton variant="text" size="lg">
              <i className="fas fa-xmark" />
            </IconButton>
          </div>

          <div className="mx-auto max-w-full w-full">
            <div className="flex items-center justify-center">
              <img
                src="https://i0.wp.com/allaboutindia.info/wp-content/uploads/2018/06/pankaj-laddhad-inst-tech-1.jpg"
                style={{
                  width: "150px",
                  height: "80px",
                  scale: "0.7",
                  objectFit: "none",
                }}
              />
            </div>
            <h1 className="text-center font-bold text-2xl">
              Pankaj Laddhad Institute of Technology & Management Studies
            </h1>{" "}
            <p className="text-body-secondary text-center">
              Yelgaon, Dist. Buldhana
            </p>
            <h1 className="h1 my-4 text-center font-extrabold text-xl">
              Teacher Guardian Form
            </h1>
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mt-10 grid gap-x-6 gap-y-8 grid-cols-12">
                <div className="col-span-12">
                  <div className="w-full flex items-center justify-center">
                    <Profile onFileChange={(data) => setFile(data)} required />
                  </div>
                </div>

                <div className="col-span-12">
                  <hr className="border bottom-2 border-blue-900" />
                </div>

                <div className="col-span-12">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Full Name of Student
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("fName", { required: "This is required." })}
                      name="fName"
                      id="fName"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage errors={errors} name="fName" />
                  </div>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      {...register("email", { required: "This is required." })}
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage errors={errors} name="email" />
                  </div>
                </div>

                <div className="col-span-6 w-full">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Nationality
                  </label>
                  <div className="mt-2">
                    <select
                      id="Nationality"
                      {...register("Nationality", {
                        required: "This is required.",
                      })}
                      name="Nationality"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option defaultValue>Select</option>
                      <option value="NRI">NRI</option>
                      <option value="Indian">Indian</option>
                      <option value="####">####</option>
                    </select>
                    <ErrorMessage errors={errors} name="Nationality" />
                  </div>
                </div>

                <div className="col-span-6">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Roll No
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("rollNumber", {
                        required: "This is required.",
                      })}
                      name="rollNumber"
                      id="rollNumber"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />

                    <ErrorMessage errors={errors} name="rollNumber" />
                  </div>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="eduYear"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Educational Year
                  </label>
                  <div className="mt-2">
                    <select
                      id="eduYear"
                      {...register("eduYear", {
                        required: "This is required.",
                      })}
                      name="eduYear"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option defaultValue>Select</option>
                      <option value="2022-23">2022-23</option>
                      <option value="2023-24">2023-24</option>
                      <option value="2024-25">2024-25</option>
                      <option value="2025-25">2025-26</option>
                    </select>
                    <ErrorMessage errors={errors} name="eduYear" />
                  </div>
                </div>

                <div className="col-span-4">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Branch
                    </label>
                  </div>
                  <div className="mt-2">
                    <select
                      id="branch"
                      {...register("branch", { required: "This is required." })}
                      name="branch"
                      className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value="">Select Branch</option>
                      <option value="CSE">
                        Computer Science And Engineering
                      </option>
                      <option value="EXTC">
                        Electronics And Telecommunication
                      </option>
                      <option value="EE">Electrical Engineering</option>
                      <option value="MECH">Mechanical Engineering</option>
                      <option value="CIVIL">Civil Engineering</option>
                    </select>
                    <ErrorMessage errors={errors} name="branch" />
                  </div>
                </div>

                <div className="col-span-4">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    PBE No
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("pbeno", {
                        required: "This is required.",
                      })}
                      name="pbeno"
                      id="pbeno"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage errors={errors} name="pbeno" />
                  </div>
                </div>

                <div className="col-span-4">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Year
                  </label>
                  <div className="mt-2">
                    <select
                      name="year"
                      id="year"
                      {...register("year", {
                        required: "This is required.",
                      })}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="">Select</option>
                      <option value="1">First Year</option>
                      <option value="2">Second Year</option>
                      <option value="3">Third Year</option>
                      <option value="4">Forth Year</option>
                    </select>
                    <ErrorMessage errors={errors} name="year" />
                  </div>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Bank A/C No
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("bAccount", {
                        required: "This is required.",
                      })}
                      name="bAccount"
                      id="bAccount"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage errors={errors} name="bAccount" />
                  </div>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Bank Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("bankName", {
                        required: "This is required.",
                      })}
                      name="bankName"
                      id="bankName"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage errors={errors} name="bankName" />
                  </div>
                </div>

                <div className="col-span-4">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    All Nick name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("nickName", {
                        required: "This is required.",
                      })}
                      name="nickName"
                      id="nickName"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage errors={errors} name="nickName" />
                  </div>
                </div>

                <div className="col-span-4">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    DOB
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      {...register("dob", { required: "This is required." })}
                      name="dob"
                      id="dob"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage errors={errors} name="dob" />
                  </div>
                </div>

                <div className="col-span-4">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Aadhar No
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("adharNo", {
                        required: "This is required.",
                      })}
                      name="adharNo"
                      id="adharNo"
                      autoComplete="family-name"
                      placeholder="&#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226;"
                      maxLength={12}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage errors={errors} name="adharNo" />
                  </div>
                </div>

                <div className="col-span-12">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Parents(Fathers's/Guardians)Name:
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("fGaName", {
                        required: "This is required.",
                      })}
                      name="fGaName"
                      id="fGaName"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage errors={errors} name="fGaName" />
                  </div>
                </div>

                <div className="col-span-12">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Parents(Mother's/Guardians)Name:
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("mGaName", {
                        required: "This is required.",
                      })}
                      name="mGaName"
                      id="mGaName"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage errors={errors} name="mGaName" />
                  </div>
                </div>

                <div className="col-span-12">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Parent Address
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("pAddress", {
                        required: "This is required.",
                      })}
                      name="pAddress"
                      id="pAddress"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage errors={errors} name="pAddress" />
                  </div>
                </div>

                <div className="col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Place
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("place", { required: "This is required." })}
                      name="place"
                      id="place"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage errors={errors} name="place" />
                  </div>
                </div>
                <div className="col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    District
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("district", {
                        required: "This is required.",
                      })}
                      name="district"
                      id="district"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage errors={errors} name="district" />
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      State
                    </label>
                  </div>
                  <div className="mt-2">
                    <select
                      id="state"
                      {...register("state", { required: "This is required." })}
                      name="state"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Select</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Arunachal Pradesh">
                        Arunachal Pradesh
                      </option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="West Bengal">West Bengal</option>
                    </select>
                    <ErrorMessage errors={errors} name="state" />
                  </div>
                </div>
                <div className="col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Pincode
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("pincode", {
                        required: "This is required.",
                      })}
                      name="pincode"
                      id="pincode"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage errors={errors} name="pincode" />
                  </div>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Student Mobile No
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("sMobile", {
                        required: "This is required.",
                      })}
                      name="sMobile"
                      id="sMobile"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage errors={errors} name="sMobile" />
                  </div>
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Parent Mobile No
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("pMobile", {
                        required: "This is required.",
                      })}
                      name="pMobile"
                      id="pMobile"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage errors={errors} name="pMobile" />
                  </div>
                </div>

                <div className="col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Admited in Round
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      {...register("aRound", { required: "This is required." })}
                      name="aRound"
                      id="aRound"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage errors={errors} name="aRound" />
                  </div>
                </div>

                <div className="grid col-span-3">
                  <div className="col-span-3 flex items-center justify-center">
                    <Radio
                      name="type"
                      label="CAP"
                      value={"CAP"}
                      className="grid grid-flow-col"
                      {...register("type", { required: "This is required." })}
                    />
                    <Radio
                      name="type"
                      label="Institude Level"
                      value={"Institude"}
                      {...register("type", { required: "This is required." })}
                    />
                  </div>
                  <ErrorMessage errors={errors} name="type" />
                </div>

                <div className="col-span-4">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Date of Admission
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      {...register("doa", { required: "This is required." })}
                      name="doa"
                      id="doa"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage errors={errors} name="doa" />
                  </div>
                </div>

                <div className="col-span-4">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Category
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("category", {
                        required: "This is required.",
                      })}
                      name="category"
                      id="category"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage errors={errors} name="category" />
                  </div>
                </div>
                <div className="col-span-4">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Cast
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("cast", { required: "This is required." })}
                      name="cast"
                      id="cast"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage errors={errors} name="cast" />
                  </div>
                </div>
                <div className="col-span-4">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Physically Handicapped
                    <span
                      className="font-monospace text-dark"
                      style={{ fontSize: "0.75rem" }}
                    >
                      [if required]
                    </span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("phHandicapped")}
                      name="phHandicapped"
                      id="phHandicapped"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-12">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Scholarship Applied in catagory: SC/ST/VJ/NT/OBC/EBC/SBC/
                      :
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("scholarship", {
                        required: "This is required.",
                      })}
                      name="scholarship"
                      id="scholarship"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage errors={errors} name="scholarship" />
                  </div>
                </div>

                <div className="col-span-12">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Hobbies:
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("hobbies", {
                        required: "This is required.",
                      })}
                      name="hobbies"
                      id="hobbies"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage errors={errors} name="hobbies" />
                  </div>
                </div>

                <div className="col-span-12">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Reading(Books,News paper,Magzin,Journals)Mention Language:
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("reading", {
                        required: "This is required.",
                      })}
                      name="reading"
                      id="reading"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage errors={errors} name="reading" />
                  </div>
                </div>

                <div className="col-span-12">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Family Background
                  </label>
                </div>

                <div className="col-span-12 flex gap-6">
                  <div className="col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Father's Education
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register("fEducation", {
                          required: "This is required.",
                        })}
                        name="fEducation"
                        id="fEducation"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <ErrorMessage errors={errors} name="fEducation" />
                    </div>
                  </div>
                  <div className="col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Occupation
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register("fOccupation", {
                          required: "This is required.",
                        })}
                        name="fOccupation"
                        id="fOccupation"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <ErrorMessage errors={errors} name="fOccupation" />
                    </div>
                  </div>
                </div>

                <div className="col-span-12 flex gap-6">
                  <div className="col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Mother's Education
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register("mEducation", {
                          required: "This is required.",
                        })}
                        name="mEducation"
                        id="mEducation"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <ErrorMessage errors={errors} name="mEducation" />
                    </div>
                  </div>
                  <div className="col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Occupation
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register("mOccupation", {
                          required: "This is required.",
                        })}
                        name="mOccupation"
                        id="mOccupation"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <ErrorMessage errors={errors} name="mOccupation" />
                    </div>
                  </div>
                </div>

                <div className="col-span-12 flex gap-6">
                  <div className="col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      No. of Brothers
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register("nOfBrothers", {
                          required: "This is required.",
                        })}
                        name="nOfBrothers"
                        id="nOfBrothers"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <ErrorMessage errors={errors} name="nOfBrothers" />
                    </div>
                  </div>
                  <div className="col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Their Education
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register("bEducation", {
                          required: "This is required.",
                        })}
                        name="bEducation"
                        id="bEducation"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <ErrorMessage errors={errors} name="bEducation" />
                    </div>
                  </div>
                </div>

                <div className="col-span-12 flex gap-6">
                  <div className="col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      No. of Sisters
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register("nOfSisters", {
                          required: "This is required.",
                        })}
                        name="nOfSisters"
                        id="nOfSisters"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <ErrorMessage errors={errors} name="nOfSisters" />
                    </div>
                  </div>
                  <div className="col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Their Education
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register("sEducation", {
                          required: "This is required.",
                        })}
                        name="sEducation"
                        id="sEducation"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <ErrorMessage errors={errors} name="sEducation" />
                    </div>
                  </div>
                </div>

                <div className="col-span-12">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Annual Income of Family
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("Income", { required: "This is required." })}
                      name="Income"
                      id="Income"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage errors={errors} name="Income" />
                  </div>
                </div>

                <div className="col-span-12">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Is their any agriculture in the family? [YES/NO]
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("IsAgriculture", {
                        required: "This is required.",
                      })}
                      name="IsAgriculture"
                      id="IsAgriculture"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage errors={errors} name="IsAgriculture" />
                  </div>
                </div>

                <div className="col-span-12">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Status of Your home area: City/Urban/Rural
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("homeArea", {
                        required: "This is required.",
                      })}
                      name="homeArea"
                      id="homeArea"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage errors={errors} name="homeArea" />
                  </div>
                </div>

                <div className="col-span-12 border rounded-xl">
                  <table className="w-full table">
                    <thead className="" style={{ height: "50px" }}>
                      <tr>
                        <th className=" border-e">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal leading-none "
                          >
                            During the Years
                          </Typography>
                        </th>
                        <th className="border-e">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal leading-none "
                          >
                            Years
                          </Typography>
                        </th>

                        <th className="border-e">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal leading-none "
                          >
                            Room No./owner's Name with address
                          </Typography>
                        </th>
                        <th className="">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal leading-none "
                          >
                            Partners with Class
                          </Typography>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr>
                        <td className=" border-t px-5">
                          {" "}
                          1<sup>st</sup> Year{" "}
                        </td>
                        <td className="border">
                          {" "}
                          <input
                            className="w-full border-none"
                            type="text"
                            {...register("input1", {
                              required: "This is required.",
                            })}
                            name="input1"
                            id="input1"
                          />{" "}
                          <ErrorMessage errors={errors} name="input1" />
                        </td>
                        <td className="border">
                          {" "}
                          <input
                            className="w-full border-none"
                            type="text"
                            {...register("input2", {
                              required: "This is required.",
                            })}
                            name="input2"
                            id="input2"
                          />{" "}
                          <ErrorMessage errors={errors} name="input2" />
                        </td>
                        <td className="border-t">
                          {" "}
                          <input
                            className="w-full border-none"
                            type="text"
                            {...register("input3", {
                              required: "This is required.",
                            })}
                            name="input3"
                            id="input3"
                          />{" "}
                          <ErrorMessage errors={errors} name="input3" />
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-5">
                          {" "}
                          2<sup>nd</sup> Year{" "}
                        </td>
                        <td className="border">
                          {" "}
                          <input
                            className="w-full border-none"
                            type="text"
                            {...register("input4", {
                              required: "This is required.",
                            })}
                            name="input4"
                            id="input4"
                          />{" "}
                          <ErrorMessage errors={errors} name="input4" />
                        </td>
                        <td className="border">
                          {" "}
                          <input
                            className="w-full border-none"
                            type="text"
                            {...register("input5", {
                              required: "This is required.",
                            })}
                            name="input5"
                            id="input5"
                          />{" "}
                        </td>
                        <td className="border-t">
                          {" "}
                          <input
                            className="w-full border-none"
                            type="text"
                            {...register("input6", {
                              required: "This is required.",
                            })}
                            name="input6"
                            id="input6"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-5">
                          {" "}
                          3<sup>rd</sup> Year{" "}
                        </td>
                        <td className="border">
                          {" "}
                          <input
                            className="w-full border-none"
                            type="text"
                            {...register("input7", {
                              required: "This is required.",
                            })}
                            name="input7"
                            id="input7"
                          />{" "}
                        </td>
                        <td className="border">
                          {" "}
                          <input
                            className="w-full border-none"
                            type="text"
                            {...register("input8", {
                              required: "This is required.",
                            })}
                            name="input8"
                            id="input8"
                          />{" "}
                        </td>
                        <td className="border-t">
                          {" "}
                          <input
                            className="w-full border-none"
                            type="text"
                            {...register("input9", {
                              required: "This is required.",
                            })}
                            name="input9"
                            id="input9"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td className="border-t  border-e px-5">
                          {" "}
                          4<sup>th</sup> Year{" "}
                        </td>
                        <td className="border-t border-s border-e">
                          {" "}
                          <input
                            className="w-full border-none"
                            type="text"
                            {...register("input10", {
                              required: "This is required.",
                            })}
                            name="input10"
                            id="input10"
                          />{" "}
                        </td>
                        <td className=" border-t border-s border-e">
                          {" "}
                          <input
                            className="w-full border-none"
                            type="text"
                            {...register("input11", {
                              required: "This is required.",
                            })}
                            name="input11"
                            id="input11"
                          />{" "}
                        </td>
                        <td className="border-t">
                          {" "}
                          <input
                            className="w-full border-none"
                            type="text"
                            {...register("input12", {
                              required: "This is required.",
                            })}
                            name="input12"
                            id="input12"
                          />{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-span-12">
                  <FileUploadComponent
                    handleFileChange={handleFileChange}
                    index={0}
                    type="Cast-Certificate"
                    DocName="Cast Certificate *"
                    required={"required"}
                  />
                  <FileUploadComponent
                    handleFileChange={handleFileChange}
                    index={1}
                    type="Domacile-Cerificate"
                    DocName="Domacile Cerificate *"
                    required={"required"}
                  />
                  <FileUploadComponent
                    handleFileChange={handleFileChange}
                    index={2}
                    type="Non-creamylayer-Cerificate"
                    DocName="Non-creamylayer Cerificate"
                  />
                  <FileUploadComponent
                    handleFileChange={handleFileChange}
                    index={3}
                    type="Addhaar-Card"
                    DocName="Addhaar Card *"
                    required={"required"}
                  />
                  <FileUploadComponent
                    handleFileChange={handleFileChange}
                    index={4}
                    type="Previous-Sem-Marksheets"
                    required={"required"}
                    DocName="Previous Sem Marksheets *"
                  />
                  <FileUploadComponent
                    handleFileChange={handleFileChange}
                    index={5}
                    type="10th-Marksheet"
                    DocName="10th Marksheet *"
                    required={"required"}
                  />
                  <FileUploadComponent
                    handleFileChange={handleFileChange}
                    index={6}
                    type="12th-Marksheet"
                    DocName="12th Marksheet *"
                    required={"required"}
                  />
                  <FileUploadComponent
                    handleFileChange={handleFileChange}
                    index={7}
                    type="TC"
                    DocName="TC / Leaving Cerificate *"
                    required={"required"}
                  />
                  <FileUploadComponent
                    handleFileChange={handleFileChange}
                    index={8}
                    type="PAN-Card"
                    DocName="PAN Card"
                  />
                  <FileUploadComponent
                    handleFileChange={handleFileChange}
                    index={9}
                    type="Driving-Licence"
                    DocName="Driving Licence"
                  />
                  <FileUploadComponent
                    handleFileChange={handleFileChange}
                    index={10}
                    type="Achievement-Cerificatesaar"
                    DocName="Achievement Cerificates *"
                    required={"required"}
                  />
                  <FileUploadComponent
                    handleFileChange={handleFileChange}
                    index={12}
                    type="Bank-Passbook"
                    DocName="Bank Passbook *"
                    required={"required"}
                  />
                  <FileUploadComponent
                    handleFileChange={handleFileChange}
                    index={13}
                    type="Cap-Letter"
                    DocName="Cap Letter *"
                    required={"required"}
                  />
                  <FileUploadComponent
                    handleFileChange={handleFileChange}
                    index={14}
                    type="Income-Certificate"
                    DocName="Income Certificate *"
                    required={"required"}
                  />
                  <FileUploadComponent
                    handleFileChange={handleFileChange}
                    index={15}
                    type="Election-Card"
                    DocName="Election Card"
                  />
                </div>
              </div>
              <div className="col-span-12 flex items-center justify-end">
                <Button color="blue" type="submit" loading={load}>
                  Submit
                </Button>
              </div>
            </form>
          </div>
          <Dialog open={open} handler={handleOpen}>
            <DialogHeader>Are you Sure?</DialogHeader>
            <DialogBody>
              <p>Are you sure you want to submit the form?</p>
              <sub>Once submitted you can't edit the form</sub>
            </DialogBody>
            <DialogFooter>
              <Button
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1"
              >
                <span>Cancel</span>
              </Button>
              <Button variant="gradient" color="green" onClick={hanldeSendData}>
                <span>Confirm</span>
              </Button>
            </DialogFooter>
          </Dialog>
        </div>
      ) : (
        <div className="shadow-lg >rounded-lg max-w-full w-9/12 mx-auto flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-6">
          {userdata._id ? (
            <>
              <table className="w-full border">
                <thead>
                  <tr>
                    <th className="border bottom-2 w-1/4">Application Id</th>
                    <th className="border bottom-2">Name</th>
                    <th className="border bottom-2 w-1/4">Year</th>
                    <th className="border bottom-2 w-1/4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center border">
                      TG{userdata ? userdata._id : ""}
                    </td>
                    <td className="text-center border">
                      {userdata ? userdata.fName : ""}
                    </td>
                    <td className="text-center border">
                      {userdata ? userdata.eduYear : ""}
                    </td>
                    {userdata.status === "pending" ? (
                      <td
                        className="text-center border"
                        style={{ color: "#9c9c3d" }}
                      >
                        <QueryBuilderIcon /> Pending
                      </td>
                    ) : userdata.status === "verified" ? (
                      <td
                        className="text-center border"
                        style={{ color: " #90EE90" }}
                      >
                        {" "}
                        <VerifiedIcon /> Verified
                      </td>
                    ) : (
                      <td
                        className="text-center border cursor-pointer"
                        style={{ color: "#C6131B" }}
                        onClick={handleOpen}
                      >
                        {" "}
                        <NotInterestedIcon /> Rejected
                      </td>
                    )}

                    <Dialog
                      open={open}
                      handler={handleOpen}
                      animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0.9, y: -100 },
                      }}
                    >
                      <DialogHeader>Reason of rejection</DialogHeader>
                      <DialogBody>
                        The key to more success is to have a lot of pillows. Put
                        it this way, it took me twenty five years to get these
                        plants, twenty five years of blood sweat and tears, and
                        I&apos;m never giving up, I&apos;m just getting started.
                        I&apos;m up to something. Fan luv.
                      </DialogBody>
                      <DialogFooter>
                        <Button
                          variant="text"
                          color="red"
                          onClick={handleOpen}
                          className="mr-1"
                        >
                          <span>Cancel</span>
                        </Button>
                        <Button
                          variant="gradient"
                          color="green"
                          onClick={handleOpen}
                        >
                          <span>Confirm</span>
                        </Button>
                      </DialogFooter>
                    </Dialog>
                  </tr>
                </tbody>
              </table>
              <div className="flex items-center justify-center mt-5">
                <Button
                  className="flex items-center gap-3"
                  onClick={() => setShow(true)}
                >
                  <i
                    className="fa-regular fa-square-plus"
                    style={{ color: "#fff", fontSize: "20px" }}
                  />
                  Update
                </Button>
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className="flex items-center justify-center h-14 w-full border ">
                <p>
                  No Data is available click on below new button to register
                </p>
              </div>
              <div className="flex items-center justify-center mt-5">
                <Button
                  className="flex items-center gap-3"
                  onClick={() => setShow(true)}
                >
                  <i
                    className="fa-regular fa-square-plus"
                    style={{ color: "#fff", fontSize: "20px" }}
                  />
                  New
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Form;
