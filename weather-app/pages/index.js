import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import WeatherApp from './WeatherApp'

import { apiKey } from '../constants/apikey'
import { generateLocation } from '../location/generateLocation'
import { createContext, useEffect, useState } from 'react'
import { load } from '../storage/storage'

export default function Home() {

  

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <WeatherApp />
        
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
