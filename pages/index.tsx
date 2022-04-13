import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { NextPage } from 'next'
import ArrowVector from '../comps/arrow-vector'
import HeroText from '../comps/hero-text'
import Gallery from '../comps/gallery'

const Home: NextPage = () => {
  return (
    <div>
      {/* HEAD */}
      <Head>
        <title>UI Onboarding</title>
      </Head>

      {/* HEADER */}
      <header className={styles.header}>
        <Image className={styles.logo} src="/img/aluxion.png" height={24} width={133}></Image>
      </header>

      {/* HERO */}
      <div className={styles.hero_bg}>
        <div className={styles.hero}>
          <ArrowVector></ArrowVector>
          <HeroText></HeroText>
        </div>
      </div>

      {/* Galeria */}
      <Gallery></Gallery>


    </div>
  )
}
export default Home;