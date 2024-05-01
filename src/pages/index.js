import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import Comps from "../pages/comps";
import SupportIcon from "@mui/icons-material/SupportAgent";
import CloseIcon from "@mui/icons-material/Close";
import withSession from "@/lib/session";
import { useRouter } from "next/router";

export default function Home({ user }) {
  const [isSupportOpen, setIsSupportOpen] = useState(true);
  const router = useRouter();

  const goToWhatsApp = () => {
    const phoneNumber = "+233597063145";
    const url = `whatsapp://send?phone=${phoneNumber}`;
    window.location.href = url;
  };
  return (
    <>
      <Head>
        <title>Welcome To Cod E-Learning</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Comps />

        <div
          className={styles.support_container}
          onClick={() => setIsSupportOpen(true)}
        >
          <SupportIcon className={styles.icon} />
        </div>
      </main>

      {isSupportOpen && (
        <>
          <div className={styles.container}>
            <div
              className={styles.container_close}
              onClick={() => setIsSupportOpen(false)}
            >
              <CloseIcon className={styles.icon} />
            </div>
            <div className={styles.container_header}>
              <h1>Have a Question?</h1>
              <button onClick={goToWhatsApp}>Chat with us</button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get("user");
  if (!user) {
    return {
      redirect: {
        destination: "/comps/login",
        permanent: false,
      },
    };
  }

  if (user) {
    req.session.set("user", user);
    await req.session.save();
  }
  return {
    props: {
      user: user,
    },
  };
});
