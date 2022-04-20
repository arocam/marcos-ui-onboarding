import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { NextPage } from 'next'
import Gallery from '../components/gallery/gallery'
import Header from '../components/header/header'
import Hero from '../components/hero/hero'
import Slider from '../components/slider/slider'
import { Form } from '../components/form/form'

const Home: NextPage = () => {
  return (
    <div>
      {/* HEAD */}
      <Head>
        <title>UI Onboarding</title>
      </Head>

      <Header></Header>

      <Hero linkHref={"#form"} linkName={"Contacto"}></Hero>

      <Gallery></Gallery>

      <Slider></Slider>

      <Form></Form>
    </div>
  )
}
export default Home;