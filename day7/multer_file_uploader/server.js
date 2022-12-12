const express = require("express");
const app = express();
app.use(express.json());


const multer = require("multer");

const storage = 
    multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads")
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }

    })



const upload = multer({
    storage,
})
const uploadSingle = (fileKey) => {
    return function (req, res, next) {


        const uploadItem = upload.single(fileKey);

        uploadItem(req, res, function (err) {

            if (err instanceof multer.MulterError) {
                return res.status(500).send(err.message);
            } else if (err) {
                return res.status(500).send(err.message);
            }
            // Everything went fine.
            next();
        });
    };
};


app.post("/upload", uploadSingle("image"), (req, res) => {
    console.log(req.body);
    res.status(200).send("post request is done");
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});



// const express = require("express");

// const app = express();

// app.use(express.json());

// const path = require("path");

// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, '/uploads');
// },
//     filename: function (req, file, callback) {
//         const uniquePrefix = Date.now() + Math.random().toString();

//         callback(null, `${uniquePrefix}-${file.originalname}`);
//     },
// });




// const upload = multer({
//     storage,
//     // fileFilter,
//     limits: {
//         fileSize: 1024 * 1024 * 5,
//     },
// });

// const uploadSingle = (fileKey) => {

//     return function (req, res, next) {

//         const uploadItem = upload.single(fileKey);

//         uploadItem(req, res, function (err) {

//             if (err instanceof multer.MulterError) {
//                 return res.status(500).send(err.message);
//             } else if (err) {
//                 return res.status(500).send(err.message);
//             }
//             // Everything went fine.
//             next();
//         });
//     };
// };

// const uploadMultiple = (fileKey) => {
//     return function (req, res, next) {
//         const uploadItem = upload.any(fileKey);
//         uploadItem(req, res, function (err) {
//             if (err instanceof multer.MulterError) {
//                 return res.status(501).send(err.message);
//             } else if (err) {
//                 return res.status(502).send(err.message);
//             }
//             // Everything went fine.
//             next();
//         });
//     };
// };



// function fileFilter(req, file, callback) {
//     // The function should call `cb` with a boolean
//     // to indicate if the file should be accepted

//     // To accept the file pass `true`, like so:
//     if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
//         callback(new Error("Something went wrong"), true);
//     } else {
//         // To reject this file pass `false`, like so:
//         callback(null, false);
//     }
// }



// app.post("/upload", uploadSingle("profile_pic"), (req, res) => {

//     console.log(req.body);
//     res.status(201).send("post request is done");
//     // console.log(req.body);
// });







// app.listen(3000, () => {
//     console.log("listening on port 3000");
// });



