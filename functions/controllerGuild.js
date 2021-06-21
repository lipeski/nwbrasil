const admin = require("firebase-admin");
const db = admin.firestore().collection("guilds")

exports.ctrlGuildGetAll = (req, res, next) => {
    db.get()
    .then((docs)=>{
        let guilds = [];

        docs.forEach((doc) => {
            guilds.push({ id: doc.id, ...doc.data() })
        });
        return res.json(guilds)
    }).catch(error => {
        return console.error(error);
    })
};
exports.ctrlGuildPost = (req, res, next) => {
    const newGuild = {
        name: req.body.name,
        size: req.body.size,
        faction: req.body.faction,
        whatsapp: req.body.whatsapp,
        recruiting: req.body.recruiting,
        discord: req.body.discord,
        region: req.body.region,
        focus: req.body.focus,
    }
    db.add(newGuild)
    .then((doc)=> {
        return res.status(200).json(doc.id)
    }).catch((error)=>{return error})
};