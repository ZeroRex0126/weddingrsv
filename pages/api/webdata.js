import getDatas from "./datas";

async function handler(req, res) {
  switch (req.method) {
    case "GET":
      res.json(getDatas());
      break;
    default:
      break;
  }
}

export default handler;
