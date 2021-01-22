const admin = require("firebase-admin");


admin.initializeApp({
  credential: admin.credential.cert("./db.json")
});

const db_firestore = admin.firestore();

const db = {
    create: async (product)=>{
        try {
            let response = await db_firestore.collection("products").doc().create({
                name: product.name,
            });
            console.log(response)
            return true;
        } catch (error) {
            console.log(error)
        }
    },
    list: ()=>{

    }
}
module.exports = db;