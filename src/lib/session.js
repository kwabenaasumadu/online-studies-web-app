import { withIronSession } from "next-iron-session";

export default function withSession(handler) {
  return withIronSession(handler, {
    password: "oqLq5v]kAaAa,+/vzH~0T|6s}I%",
    cookieName: "cod_e_learning",
  });
}
