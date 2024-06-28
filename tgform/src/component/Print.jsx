import React from "react";
import NavBar from "./NavBar.jsx";
import { Button } from "@material-tailwind/react";
import useGetUserdata from "../hooks/useGetUserdata.js";
import TopBarProgress from "react-topbar-progress-indicator";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Helmet } from "react-helmet";
import FileView from "./FileView.jsx";

const Print = () => {
  const { loading, userdata } = useGetUserdata();

  const Print1 = () => {
    document.getElementById('no').style.display='none';
    let printContents = document.getElementById("printablediv").innerHTML;
    
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    document.getElementById('no').style.display='block';
  };

  return (
    <>
      {loading && <TopBarProgress />}
      <Helmet>
        <title>TG | Print</title>
      </Helmet>
      <div className="h-full w-full">
        <NavBar number={2} />
        {userdata.fName ? (
          <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              <div
                id="printablediv"
                className="bg-white rounded-lg shadow-lg max-w-full w-9/12 mx-auto flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
              >
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
                <div className="w-full flex justify-start mb-16 items-center ">
                  <img
                    className="avatar border border-gray-900 rounded-lg shadow-lg"
                    src={
                      userdata.img ? userdata.img : "./placeholder-avatar.jpg"
                    }
                    style={{ width: "170px", height: "200px" }}
                  />
                </div>
                <table>
                  <tbody className="w-full">
                    <tr>
                      <td className="border px-4 py-2">Appliccation Id:</td>
                      <td className="border px-4 py-2">TG{userdata._id}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">
                        Full Name of Student:
                      </td>
                      <td className="border px-4 py-2">{userdata.fName}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Email address:</td>
                      <td className="border px-4 py-2">{userdata.email}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Nationality:</td>
                      <td className="border px-4 py-2">
                        {userdata.Nationality}
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Roll No:</td>
                      <td className="border px-4 py-2">
                        {userdata.rollNumber}
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Educational Year:</td>
                      <td className="border px-4 py-2">{userdata.eduYear}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Branch:</td>
                      <td className="border px-4 py-2">{userdata.branch}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Bank A/C No:</td>
                      <td className="border px-4 py-2">{userdata.bAccount}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Bank Name:</td>
                      <td className="border px-4 py-2">{userdata.bankName}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">All Nick name:</td>
                      <td className="border px-4 py-2">{userdata.nickName}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">DOB:</td>
                      <td className="border px-4 py-2">{userdata.dob}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Aadhar No:</td>
                      <td className="border px-4 py-2">{userdata.adharNo}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">
                        Parents(Fathers's/Guardians)Name:
                      </td>
                      <td className="border px-4 py-2">{userdata.fGaName}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">
                        Parents(Mother's/Guardians)Name:
                      </td>
                      <td className="border px-4 py-2">{userdata.mGaName}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Parent Address:</td>
                      <td className="border px-4 py-2">{userdata.pAddress}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Place:</td>
                      <td className="border px-4 py-2">{userdata.place}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">District:</td>
                      <td className="border px-4 py-2">{userdata.district}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">State:</td>
                      <td className="border px-4 py-2">{userdata.state}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Pincode:</td>
                      <td className="border px-4 py-2">{userdata.pincode}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Student Mobile No:</td>
                      <td className="border px-4 py-2">{userdata.sMobile}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Parent Mobile No:</td>
                      <td className="border px-4 py-2">{userdata.pMobile}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Admited in Round:</td>
                      <td className="border px-4 py-2">{userdata.aRound}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Date of Admission:</td>
                      <td className="border px-4 py-2">{userdata.doa}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Category:</td>
                      <td className="border px-4 py-2">{userdata.category}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Cast:</td>
                      <td className="border px-4 py-2">{userdata.cast}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">
                        Physically Handicapped[if required]:
                      </td>
                      <td className="border px-4 py-2">
                        {userdata.phHandicapped}
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">
                        Scholarship Applied in catagory:
                      </td>
                      <td className="border px-4 py-2">
                        {userdata.scholarship}
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Hobbies:</td>
                      <td className="border px-4 py-2">{userdata.hobbies}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">
                        Reading(Books,News paper,Magzin,Journals)Mention
                        Language:
                      </td>
                      <td className="border px-4 py-2">{userdata.reading}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2" colSpan={2}></td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Father's Education</td>
                      <td className="border px-4 py-2">
                        {userdata.fEducation}
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Occupation</td>
                      <td className="border px-4 py-2">
                        {userdata.fOccupation}
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Mother's Education</td>
                      <td className="border px-4 py-2">
                        {userdata.mEducation}
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Occupation</td>
                      <td className="border px-4 py-2">
                        {userdata.mOccupation}
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">No. of Brothers</td>
                      <td className="border px-4 py-2">
                        {userdata.nOfBrothers}
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Their Education</td>
                      <td className="border px-4 py-2">
                        {userdata.bEducation}
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">No. of Sisters</td>
                      <td className="border px-4 py-2">
                        {userdata.nOfSisters}
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Their Education</td>
                      <td className="border px-4 py-2">
                        {userdata.sEducation}
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2" colSpan={2}></td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">
                        Annual Income of Family:
                      </td>
                      <td className="border px-4 py-2">{userdata.Income}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">
                        Is their any agriculture in the family:
                      </td>
                      <td className="border px-4 py-2">
                        {userdata.IsAgriculture}
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">
                        Status of Your home area:
                      </td>
                      <td className="border px-4 py-2">{userdata.homeArea}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2" colSpan={2}></td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2" colSpan={2}></td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full mt-4">
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">
                        1<sup>st</sup> Year
                      </td>
                      <td className="border px-4 py-2">{userdata.input1}</td>
                      <td className="border px-4 py-2">{userdata.input2}</td>
                      <td className="border px-4 py-2">{userdata.input3}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">
                        2<sup>nd</sup> Year
                      </td>
                      <td className="border px-4 py-2">{userdata.input4}</td>
                      <td className="border px-4 py-2">{userdata.input5}</td>
                      <td className="border px-4 py-2">{userdata.input6}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">
                        3<sup>rd</sup> Year
                      </td>
                      <td className="border px-4 py-2">{userdata.input7}</td>
                      <td className="border px-4 py-2">{userdata.input8}</td>
                      <td className="border px-4 py-2">{userdata.input9}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">
                        4<sup>th</sup> Year
                      </td>
                      <td className="border px-4 py-2">{userdata.input10}</td>
                      <td className="border px-4 py-2">{userdata.input11}</td>
                      <td className="border px-4 py-2">{userdata.input12}</td>
                    </tr>
                  </tbody>
                </table>
                <div id="no">
                <FileView
                  DocName={"10th Marksheet"}
                  filelink={"/api/file/download/10th-Marksheet.pdf"}
                />
                <FileView
                  DocName={"12th Marksheet"}
                  filelink={"/api/file/download/12th-Marksheet.pdf"}
                />
                <FileView
                  DocName={"Achievement Cerificates"}
                  filelink={"/api/file/download/Achievement-Cerificatesaar.pdf"}
                />
                <FileView
                  DocName={"Addhaar Card"}
                  filelink={"/api/file/download/Addhaar-Card.pdf"}
                />
                <FileView
                  DocName={"Cast Certificate"}
                  filelink={"/api/file/download/Cast-Certificate.pdf"}
                />
                <FileView
                  DocName={"Domacile Cerificate"}
                  filelink={"/api/file/download/Domacile-Cerificate.pdf"}
                />
                <FileView
                  DocName={"Driving Licence"}
                  filelink={"/api/file/download/Driving-Licence.pdf"}
                />
                <FileView
                  DocName={"Non-creamylayer Cerificate"}
                  filelink={"/api/file/download/Non-creamylayer-Cerificate.pdf"}
                />
                <FileView
                  DocName={"PAN Card"}
                  filelink={"/api/file/download/PAN-Card.pdf"}
                />
                <FileView
                  DocName={"Previous-Sem Marksheets"}
                  filelink={"/api/file/download/Previous-Sem-Marksheets.pdf"}
                />
                <FileView
                  DocName={"TC"}
                  filelink={"/api/file/download/TC.pdf"}
                />
                <FileView
                  DocName={"Bank Passbook"}
                  filelink={"/api/file/download/Bank-Passbook.pdf"}
                />
                <FileView
                  DocName={"Cap Letter "}
                  filelink={"/api/file/download/Cap-Letter.pdf"}
                />
                <FileView
                  DocName={"Income Certificate"}
                  filelink={"/api/file/download/Income-Certificate.pdf"}
                />
                <FileView
                  DocName={"Election Card"}
                  filelink={"/api/file/download/Election-Card.pdf"}
                />
                </div>
              </div>

              <div className="w-full flex items-center justify-center mt-4">
                <Button className="flex items-center gap-3" onClick={Print1}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fill="#ffffff"
                      d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                    />
                  </svg>
                  Print
                </Button>
              </div>
            </div>
          </main>
        ) : (
          <div className="w-full h-5/6 flex items-center justify-center">
            <Card className="mt-6 w-96 ">
              <CardBody>
                <Typography>Data is not present First Fill the Form</Typography>
              </CardBody>
            </Card>
          </div>
        )}
      </div>
    </>
  );
};

export default Print;
