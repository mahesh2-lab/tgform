
import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({

    fName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    Nationality: {
        type: String,
        required: true,
    },

    rollNumber: {
        type: String,
        required: true,
    },
    
    pbeno: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },

    eduYear: {
        type: String,
        required: true,
    },

    branch: {
        type: String,
        required: true,
    },

    bAccount: {
        type: String,
        required: true,
    },

    bankName: {
        type: String,
        required: true,
    },

    nickName: {
        type: String,
        required: true,
    },

    dob: {
        type: String,
        required: true,
    },

    adharNo: {
        type: String,
        required: true,
    },

    fGaName: {
        type: String,
        required: true,
    },

    mGaName: {
        type: String,
        required: true,
    },

    pAddress: {
        type: String,
        required: true,
    },

    place: {
        type: String,
        required: true,
    },

    district: {
        type: String,
        required: true,
    },

    state: {
        type: String,
        required: true,
    },

    pincode: {
        type: String,
        required: true,
    },

    sMobile: {
        type: String,
        required: true,
    },

    pMobile: {
        type: String,
        required: true,
    },

    aRound: {
        type: String,
        required: true,
    },

    type: {
        type: String,
        required: true,
    },

    doa: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        required: true,
    },

    cast: {
        type: String,
        required: true,
    },

    phHandicapped: {
        type: String,
        required: false,
    },

    scholarship: {
        type: String,
        required: true,
    },

    hobbies: {
        type: String,
        required: true,
    },

    reading: {
        type: String,
        required: true,
    },

    fEducation: {
        type: String,
        required: true,
    },

    fOccupation: {
        type: String,
        required: true,
    },

    mEducation: {
        type: String,
        required: true,
    },

    mOccupation: {
        type: String,
        required: true,
    },

    nOfBrothers: {
        type: String,
        required: true,
    },

    bEducation: {
        type: String,
        required: true,
    },

    nOfSisters: {
        type: String,
        required: true,
    },

    sEducation: {
        type: String,
        required: true,
    },

    Income: {
        type: Number,
        required: true,
    },

    IsAgriculture: {
        type: String,
        required: true,
    },

    homeArea: {
        type: String,
        required: true,
    },

    input1: {
        type: String,
        required: true,
    },

    input2: {
        type: String,
        required: true,
    },

    input3: {
        type: String,
        required: true,
    },

    input4: {
        type: String,
        required: true,
    },

    input5: {
        type: String,
        required: true,
    },

    input6: {
        type: String,
        required: true,
    },

    input7: {
        type: String,
        required: true,
    },

    input8: {
        type: String,
        required: true,
    },

    input9: {
        type: String,
        required: true,
    },

    input10: {
        type: String,
        required: true,
    },

    input11: {
        type: String,
        required: true,
    },

    input12: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: "pending",
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    

});

const Data = mongoose.model("Data", dataSchema);
export default Data;