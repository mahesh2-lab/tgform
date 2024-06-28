import React from "react";

export const Preview = (data) => {
  return (
    <>
      <h1>Preview</h1>
      {/* <img src={data.img} alt="" /> */}
      <p>Full Name of Student = </p> <span>{data.fName}</span>
      <p>Email address = </p> <span>{data.email}</span>
      <p>Nationality = </p> <span>{data.Nationality}</span>
      <p>Roll No = </p> <span>{data.rollNumber}</span>
      <p>Educational Year = </p> <span>{data.eduYear}</span>
      <p>Branch = </p> <span>{data.branch}</span>
      <p>Bank A/C No = </p> <span>{data.bAccount}</span>
      <p>Bank Name = </p> <span>{data.bankName}</span>
      <p>All Nick name = </p> <span>{data.nickName}</span>
      <p>DOB = </p> <span>{data.dob}</span>
      <p>Aadhar No = </p> <span>{data.adharNo}</span>
      <p>Parents(Fathers's/Guardians)Name: = </p> <span>{data.fGaName}</span>
      <p>Parents(Mother's/Guardians)Name: = </p> <span>{data.mGaName}</span>
      <p>Parent Address = </p> <span>{data.pAddress}</span>
      <p>Place = </p> <span>{data.place}</span>
      <p>District = </p> <span>{data.district}</span>
      <p>State = </p> <span>{data.state}</span>
      <p>Pincode = </p> <span>{data.pincode}</span>
      <p>Student Mobile No = </p> <span>{data.sMobile}</span>
      <p>Parent Mobile No = </p> <span>{data.pMobile}</span>
      <p>Admited in Round = </p> <span>{data.aRound}</span>
      <p>Admited in Which Round = </p> <span>{data.type}</span>
      <p>Date of Admission = </p> <span>{data.doa}</span>
      <p>Category = </p> <span>{data.category}</span>
      <p>Cast = </p> <span>{data.cast}</span>
      <p>Physically Handicapped[if required] = </p>{" "}
      <span>{data.phHandicapped}</span>
      <p>Scholarship Applied in catagory: SC/ST/VJ/NT/OBC/EBC/SBC/ : = </p>{" "}
      <span>{data.scholarship}</span>
      <p>Hobbies: = </p> <span>{data.hobbies}</span>
      <p>Reading(Books,News paper,Magzin,Journals)Mention Language: = </p>{" "}
      <span>{data.reading}</span>
      <p>Father's Education = </p> <span>{data.fEducation}</span>
      <p>Occupation = </p> <span>{data.fOccupation}</span>
      <p>Mother's Education = </p> <span>{data.mEducation}</span>
      <p>Occupation = </p> <span>{data.mOccupation}</span>
      <p>No. of Brothers = </p> <span>{data.nOfBrothers}</span>
      <p>Their Education = </p> <span>{data.bEducation}</span>
      <p>No. of Sisters = </p> <span>{data.nOfSisters}</span>
      <p>Their Education = </p> <span>{data.sEducation}</span>
      <p>Annual Income of Family = </p> <span>{data.Income}</span>
      <p>Is their any agriculture in the family? [YES/NO] = </p>{" "}
      <span>{data.IsAgriculture}</span>
      <p>Status of Your home area: City/Urban/Rura = </p>{" "}
      <span>{data.homeArea}</span>
    </>
  );
};
