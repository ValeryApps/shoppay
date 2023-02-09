import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
// import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";

// const inter = Inter({ subsets: ["latin"] });

export default function Home({ country }) {
  const { data: session } = useSession();
  return (
    <>
      <main>
        <Header country={country} />
        <Footer country={country} />
      </main>
    </>
  );
}
export const getServerSideProps = async () => {
  // const data = await axios
  //   .get("https://api.ipregistry.co/?key=3lvt9xlwsw77h0xx")
  //   .then((res) => {
  //     return res.data.location.country;
  //   });
  return {
    props: {
      // country: { name: data.name, flag: data.flag.emojitwo },
      country: {
        name: "Liberia",
        flag: "https://cdn.ipregistry.co/flags/emojitwo/lr.svg",
      },
    },
  };
};
