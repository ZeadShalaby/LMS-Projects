import { Schema, model } from "mongoose";

const staff = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    subject1: {
        type: Schema.Types.ObjectId,
        ref: 'subject'
    },
    subject2: {
        type: Schema.Types.ObjectId,
        ref: 'subject'
    },
    subject3: {
        type: Schema.Types.ObjectId,
        ref: 'subject'
    },
});

export default model('staff', staff);