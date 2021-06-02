const admin = require("firebase-admin");
const db = admin.firestore().collection("guilds")

exports.ctrlGuild = (req, res, next) => {
    db.get()
    .then((docs)=>{
        let guilds = [];

        docs.forEach((element) => {
            guilds.push({id: element.id, nome: element.data().name, membros: element.data().members, servidor: element.data().server})
        });
        return res.json(guilds);
    }).catch(error => {
        return console.error(error);
    })
};