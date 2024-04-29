import { withIronSession } from 'next-iron-session';

export default function withSession(handler) {
  return withIronSession(handler, {
    password: "akakkakakakakakakakakakakaka5555!ds*$@kakak",
    cookieName: 'cod_e_learning',
 
  });
}
