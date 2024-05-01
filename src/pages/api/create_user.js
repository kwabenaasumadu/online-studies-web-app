import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";

export default async function handler(req, res) {
  const { email, password } = req.body;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    res.status(200).json({ user: userCredential.user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
