"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = void 0;
const mongoose_1 = require("mongoose");
const studentNameSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
});
const guardianSchema = new mongoose_1.Schema({
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    fatherContactNo: { type: String, required: true },
    matherName: { type: String, required: true },
    matherOccupation: { type: String, required: true },
    matherContactNo: { type: String, required: true },
});
const localGuardianSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contactNo: { type: String, required: true },
    address: { type: String, required: true },
});
// Create a Schema corresponding to the document interface.
const studentSchema = new mongoose_1.Schema({
    id: { type: String },
    name: studentNameSchema,
    gender: {
        type: String,
        enum: ["Male", "Female"],
        required: true,
    },
    dateOfBirth: { type: String },
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: {
        type: String,
        enum: ["A+", "A-", "AB+", "AB-", "B+", "B-", "O+", "O-"],
    },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
    profileImage: { type: String },
    isActive: {
        type: String,
        enum: ["active", "blocked"],
        default: "active",
    },
}, { versionKey: false });
exports.StudentModel = (0, mongoose_1.model)("Student", studentSchema);
