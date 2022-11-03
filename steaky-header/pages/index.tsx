import Head from 'next/head'
import Image from 'next/image'
// import { Fragment } from 'react'
import Header from '../components/layout/header/Header'
import Main from '../components/layout/main/Main'
import styles from '../styles/Home.module.css'

export default function Home() {
  // const scrollHandler = (event: any) => {
  //   console.log('offsetHeight: ', event);
  // }

  // Window.addEventListener('scroll',scrollHandler)


  return (
    <div >
      <Head>
        <title>Books</title>
        <meta name="description" content="a steaky header for book page" />
        <link rel="icon" href="/book.ico" />
      </Head>
      <Header></Header>
      <Main></Main>
    </div>
  )
}
