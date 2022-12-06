import { MongoClient } from "mongodb";

const connectionString = `mongodb+srv://sa:FOnND72kohjKqpKm@cluster0.fsqssdi.mongodb.net/Wedding?retryWrites=true&w=majority`;
let client;

async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        client = await MongoClient.connect(connectionString);
      } catch (error) {
        res.status(500).json({ message: "Could not connect to database." });
        return;
      }

      const db = client.db();

      try {
        const result = await db.collection("wedsettings").find({}).toArray();
        console.log(result);
        if (result) {
          res.json(result);
        } else {
          res.status(500).json({ message: "Storing message failed!" });
          return;
        }
      } catch (error) {
        res.status(500).json({ message: "Storing message failed!" });
        return;
      } finally {
        client.close();
      }
      break;

    default:
      break;
  }
}

export default handler;
