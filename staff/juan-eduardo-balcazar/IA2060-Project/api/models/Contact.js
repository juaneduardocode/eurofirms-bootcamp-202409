import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        company: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        region: { type: String },
        country: { type: String },
        contactDates: [{ type: Date }],
        publicComments: [{ type: String }],
        privateComments: [{ type: String }],
        createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
