import AppUser from "@/models/user";
import { validateEmail } from "@/utils/validation";
import nc from "next-connect";
import db from "@/utils/db";
import bcryptjs from "bcryptjs";
import { createActivationToken } from "@/utils/token";
import { sendEmail } from "@/utils/sendEmail";
const handler = nc();

handler.post(async (req, res) => {
  try {
    await db.connectDb();
    const { username, reg_email, reg_password } = req.body;
    if ((!username, !reg_email, !reg_password)) {
      res.status(400).json("Please fill in all field");
    }
    if (!validateEmail(reg_email)) {
      res.status(400).json("Sorry, this email is not valid");
    }
    const user = await AppUser.findOne({ email: reg_email });
    if (user) {
      return res.status(400).json("Sorry, this email is already taken");
    }
    const hashedPassword = await bcryptjs.hash(reg_password, 12);
    const newUser = AppUser({
      username,
      email: reg_email,
      password: hashedPassword,
    });
    const response = await newUser.save();
    const token = createActivationToken({ id: response._id.toString() });
    // const url = `${process.env.BASE_URL}/activate/${token}`;
    // sendEmail(email, url, "", "Confirm your email");
    return res.json({ result: { response, token } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
export default handler;
