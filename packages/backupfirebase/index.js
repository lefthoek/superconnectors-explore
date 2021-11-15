import admin from "firebase-admin";
import fs from "fs";
import { getFirestore } from "firebase-admin/firestore";

// get this from the firebase console serviceAccounts tab
const serviceAccount = {};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://superconnectors-cb626-default-rtdb.europe-west1.firebasedatabase.app",
});

const db = getFirestore();
const asksRef = db.collection("asks");
const snapshot = await asksRef.get();
let gameData = [];
snapshot.forEach((doc) => {
  gameData = [...gameData, doc.data()];
});

console.log(gameData);

fs.writeFileSync("./pilotData.json", JSON.stringify(gameData, null, 2));
