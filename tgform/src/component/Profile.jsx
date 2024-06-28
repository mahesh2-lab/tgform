import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import '../App.css';

const Profile = (props) => {
  const [file, setFile] = useState("");
  const [imgtype, setImgtype] = useState("image/jpeg, image/png, image/jpeg");
  const [imgerror, setImgerror] = useState(false);

  const handleChange = (e) => {
    try {
      setImgerror(false);
      const data = e.target.files[0];
      setFile(data);
      setImgtype(data.type);

      if (data.size > 100000 || data.size < 20000) {
        throw new Error("File must be between 20kb and 100kb");
      }
      if (!imgtype.includes(data.type)) {
        throw new Error("File type is not supported");
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        props.onFileChange(reader.result);
      };
      reader.readAsDataURL(data);
    } catch (err) {
      toast.error(err.message);
      setImgerror(true);
    }
  };

  return (
    <div className="w-full grid items-center justify-center">
      {file ? (
        <>
          <img
            className={`avatar rounded-full  border-4 ${
              imgerror ? "border-red-500" : "border-blue-500"
            }`}
            src={URL.createObjectURL(file)}
            style={{ width: "200px", height: "200px" }}
          />
        </>
      ) : (
        <img
          className="avatar rounded-full"
          src={props.placehold ? props.placehold : 'placeholder-avatar.jpg'}
          style={{ width: "200px" }}
        />
      )}

      <input
        type="file"
        className="hidden"
        onChange={handleChange}
        accept="image/jpeg, image/png"
      />

      <Button
        color="blue"
        size="sm"
        className="flex items-center mt-4"
        onClick={() => document.querySelector("input").click()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5 me-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
          />
        </svg>
        Upload profile pic
      </Button>
    </div>
  );
};
export default Profile;
