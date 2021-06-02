const admin = require("firebase-admin");
const db = admin.firestore().collection("users")

exports.postCtrlUser = (req, res, next) => {
    const user = {
        name: req.body.name,
        id_firebase: req.body.id_firebase,
        email: req.body.email
    }
    db.add(user)
    .then((response)=> {
        return res.status(200).json(db.doc(response.id))
    }).catch((error)=>{return error})
};