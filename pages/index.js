import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../Components/Navbar'
import Navbar from '../Components/Navbar'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Navigation></Navigation>
    </div>
  )
}
