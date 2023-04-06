import { MongoClient, ObjectId } from "mongodb";

const connectionString = `mongodb+srv://sa:FOnND72kohjKqpKm@cluster0.fsqssdi.mongodb.net/Wedding?retryWrites=true&w=majority`;
let client;

async function handler(req, res) {
  try {
    client = await MongoClient.connect(connectionString);
  } catch (error) {
    res.status(500).json({ message: "Could not connect to database." });
    return;
  }

  const db = client.db();

  switch (req.method) {
    case "GET":
      try {
        const result = await db.collection("reservation").find({}).toArray();
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
    case "POST":
      try {
        let result = undefined;
        switch (req.body.type.toLowerCase()) {
          case "add":
            result = await db
              .collection("reservation")
              .insertOne(req.body.context);
            break;
          case "update":
            let updateId = ObjectId(req.body.context._id);
            const updateDoc = {
              name: req.body.context.name,
              surname: req.body.context.surname,
              phoneNr: req.body.context.phoneNr,
              email: req.body.context.email,
              attending: req.body.context.attending,
              amount: req.body.context.amount,
              comment: req.body.context.comment,
            };

            console.log(updateDoc);

            result = await db
              .collection("reservation")
              .updateOne({ _id: updateId }, { $set: updateDoc });
            break;
          case "delete":
            let deleteId = ObjectId(req.body.context._id);
            result = await db
              .collection("reservation")
              .deleteOne({ _id: deleteId });
            break;

          default:
            break;
        }
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