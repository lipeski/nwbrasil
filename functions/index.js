const functions = require('firebase-functions');
const app = require("express")();

const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore().collection("guilds")

app.get("/guilds", (request, response) => {
    db.get()
    .then((docs)=>{
        let guilds = [];

        docs.forEach((element) => {
            guilds.push({id: element.id, nome: element.data().name, membros: element.data().members, servidor: element.data().server})
        });
        return response.json(guilds);
    }).catch(error => {
        return console.error(error);
    })
});

app.post("/guilds", (request, response) =>{
    const newGuild = {
        name: request.body.name,
        members: request.body.members,
        server: request.body.server
    }
    db.add(newGuild)
    .then(()=> {
        return response.status(200).json(null)
    }).catch((error)=>{return error})
});

exports.api = functions.https.onRequest(app);
