const db = require("../models");
const jwt = require('jsonwebtoken');

const { User } = db;

async function defineCurrentUser(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (authHeader && authHeader.startsWith('Bearer ')) {
            const token = authHeader.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const { id } = decoded;
            const user = await User.findById(id);
            req.currentUser = user;
        } else {
            req.currentUser = null;
        }
        next();
    } catch (err) {
        req.currentUser = null;
        next(err);
    }
}

module.exports = defineCurrentUser;
import { MongoClient, ServerApiVersion } from "mongodb";


const uri = process.env.ATLAS_URI || "";
const client = new MongoClient("mongodb+srv://timryan025:admin@voyager-vault.pqbssm1.mongodb.net/?retryWrites=true&w=majority&appName=Voyager-Vault", {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log(
  "Pinged your deployment. You successfully connected to MongoDB!"
  );
} catch(err) {
  console.error(err);
}

let db = client.db("employees");

export default db;