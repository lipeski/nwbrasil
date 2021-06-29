const functions = require('firebase-functions');
const app = require("express")();
const cors = require('cors');
const googleStorage = require('@google-cloud/storage');
const Multer = require('multer');
const admin = require("firebase-admin");
admin.initializeApp();
app.use(cors({ origin: true }));
const db = admin.firestore().collection("guilds")
const {ctrlGuildGetAll, ctrlGuildPost} = require('./controllerGuild');
const {postCtrlUser} = require('./controllerUsers');

const storage = googleStorage({
    projectId: "nwbrasil-ffb64",
    keyFilename: "/nwbrasil-ffb64-firebase-adminsdk-6a4w0-8444f367b0.json"
});

const bucket = storage.bucket("gs://nwbrasil-ffb64.appspot.com/uploads");

const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
    fileSize: 5 * 1024 * 1024 // no larger than 5mb, you can change as needed.
    }
});

app.post('/upload', multer.single('file'), (req, res) => {
    console.log('Upload Image');

    let file = req.file;
    if (file) {
    uploadImageToStorage(file).then((success) => {
        res.status(200).send({
        status: 'success'
        });
    }).catch((error) => {
        console.error(error);
    });
    }
});

/**
 * Upload the image file to Google Storage
 * @param {File} file object that will be uploaded to Google Storage
 */
 const uploadImageToStorage = (file) => {
    return new Promise((resolve, reject) => {
      if (!file) {
        reject('No image file');
      }
      let newFileName = `${file.originalname}_${Date.now()}`;
  
      let fileUpload = bucket.file(newFileName);
  
      const blobStream = fileUpload.createWriteStream({
        metadata: {
          contentType: file.mimetype
        }
      });
  
      blobStream.on('error', (error) => {
        reject('Something is wrong! Unable to upload at the moment.');
      });
  
      blobStream.on('finish', () => {
        // The public URL can be used to directly access the file via HTTP.
        const url = format(`https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`);
        resolve(url);
      });
  
      blobStream.end(file.buffer);
    });
}
app.get('/guilds', 
    ctrlGuildGetAll, 
    (req, res) => res.json(res.data)
);

app.post('/user',
    postCtrlUser,
    (req, res) => res.json(res.data)
)

app.post("/guilds",
    ctrlGuildPost, 
    (req, res) => res.json(res.data)
);

exports.api = functions.https.onRequest(app);
