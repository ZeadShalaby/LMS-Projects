import { Schema, model } from "mongoose";

const subject = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    previous_subject: {
        type: String
    },
    department: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'department'
    },
    staff: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'staff'
    },
});

export default model('subject', subject);