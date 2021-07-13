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
exports.ctrlGuildGet = (req, res, next) => {
    let id = req.params.id
    db.doc(id).get()
    .then((docs)=>{
        return res.json(docs.data())
    }).catch(error => {
        return console.error(error);
    })
};
exports.ctrlGuildPost = (req, res, next) => {
    const idToken = req.headers.authorization.split('Bearer ')[1]
    let uid = ''
    admin
        .auth()
        .verifyIdToken(idToken)
        .then((decodedToken) => {
            this.uid = decodedToken.uid;
            const newGuild = {
                name: req.body.name,
                size: req.body.size,
                faction: req.body.faction,
                recruiting: req.body.recruiting,
                focus: req.body.focus,
                description: req.body.description,
                server: req.body.server,
                authorUID: this.uid
            }
            return db.add(newGuild)
            .then((doc)=> {
                return res.status(200).json(doc.id)
            }).catch((error)=>{return error})
        })
        .catch((error) => {
            return res.json(error)
        });
};
exports.ctrlGuildPut = (req, res, next) => {
    const idToken = req.headers.authorization.split('Bearer ')[1]
    let id = req.params.id
    let uid = ''
    let that = this
    admin
        .auth()
        .verifyIdToken(idToken)
        .then((decodedToken) => {
            this.uid = decodedToken.uid;
            console.log('####################',this.uid, req.body.authorUID)
            if(this.uid === req.body.authorUID){ //verifico se é author da guild
                let id = req.params.id
                console.log('#################### id>', id)
                const newGuild = {
                    name: req.body.name,
                    size: req.body.size,
                    faction: req.body.faction,
                    recruiting: req.body.recruiting,
                    focus: req.body.focus,
                    description: req.body.description,
                    server: req.body.server,
                    authorUID: this.uid
                }
                return db.doc(id).update(newGuild)
                .then((doc)=> {
                    console.log('####################',newGuild, doc)
                    return res.status(200).json(id)
                }).catch((error)=>{return error})

            }else{
                return res.status(401).json('acesso negado')
            }
        })
        .catch((error) => {
            return res.json(error)
        });
};