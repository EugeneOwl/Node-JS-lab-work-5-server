import {FILES_UPLOAD_DIRECTORY} from "../consts/files";
import {randomString} from "./random-service";

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, FILES_UPLOAD_DIRECTORY)
    },
    filename: (req, file, cb) => {
        cb(null, randomString());
    }
});

const uploadFile = multer({storage: storage});

export {uploadFile}
