import { MongoClient, ServerApiVersion } from "mongodb";

<<<<<<< HEAD
/*const uri = process.env.ATLAS_URI || ""; */
const client = new MongoClient("mongodb+srv://timryan025:admin@voyager-vault.pqbssm1.mongodb.net/", {
=======

const uri = process.env.ATLAS_URI || "";
const client = new MongoClient("mongodb+srv://timryan025:admin@voyager-vault.pqbssm1.mongodb.net/?retryWrites=true&w=majority&appName=Voyager-Vault", {
>>>>>>> 04269a3799ce52ebddc79cf2de0de9b7797cfa78
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