import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";

const Home2: NextPage = () =>{
    return(
        <>
            <Head>
                <title>UI Onboarding 2.0</title>
            </Head>
            <Header></Header>
            <Hero linkHref={"/search-album"} linkName={"Log in con Spotify"}></Hero>
            
        </>
    )
}
export default Home2;