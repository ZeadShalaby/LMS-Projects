import { Schema, model } from "mongoose";

const student = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    academic_number: {
        type: String,
        required: true
    },
    department: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'department'
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

export default model('student', student);