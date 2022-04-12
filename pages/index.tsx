import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Logo from 'next/image'

export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <Logo className={styles.logo} src="/img/aluxion.png" height={24} width={133}></Logo>
      </header>
    </div>
  )
}
