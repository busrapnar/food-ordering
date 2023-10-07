'use client'
import dbConnect from "@/app/util/dbConntect";

const handler = async (req, res) => {
  await dbConnect();
  res.status(200).json({ message: "Hello World" });
};

export default handler;