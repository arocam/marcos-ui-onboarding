import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { NextPage } from 'next'
import ArrowVector from '../components/hero/arrow-vector'
import HeroText from '../components/hero/hero-text'
import Gallery from '../components/gallery/gallery'
import Slider from '../components/slider/slider'
import Header from '../components/header/header'

const Home: NextPage = () => {
  return (
    <div>
      {/* HEAD */}
      <Head>
        <title>UI Onboarding</title>
      </Head>

      {/* HEADER */}
      <Header></Header>

      {/* HERO */}
      <div className={styles.hero_bg}>
        <div className={styles.hero}>
          <ArrowVector></ArrowVector>
          <HeroText></HeroText>
        </div>
      </div>

      {/* Galeria */}
      <Gallery></Gallery>

      {/* Slider */}
      <div className={styles.slider_bg}>
        <Slider></Slider>
      </div>

    </div>
  )
}
export default Home;