import type { NextPage } from "next"
import Head from "next/head"
import Header from "../components/Header"

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Read-it</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1>Hello</h1>
    </div>
  )
}

export default Home
