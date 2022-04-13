import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { NextPage } from 'next'
import Gallery from '../components/gallery/gallery'
import Slider from '../components/slider/slider'
import Header from '../components/header/header'
import Hero from '../components/hero/hero'

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
      <Hero></Hero>


      <Gallery></Gallery>

  
      <div className={styles.slider_bg}>
        <Slider></Slider>
      </div>

    </div>
  )
}
export default Home;