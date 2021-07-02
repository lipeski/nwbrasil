const functions = require('firebase-functions');
const app = require("express")();
const cors = require('cors');
const admin = require("firebase-admin");
admin.initializeApp();
app.use(cors({ origin: true }));
const db = admin.firestore().collection("guilds")
const {ctrlGuildGetAll, ctrlGuildPost} = require('./controllerGuild');
const {postCtrlUser} = require('./controllerUsers');


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
