// css 
import "../pages/pages.css"
// css end 

import React from 'react'
import Header from '../header/Header'
import Hero from '../hero/Hero'
import Pages from '../pages/Pages'

import rasm from "../../assets/AI.jpg"
import rasm2 from "../../assets/slider5.jpeg"
import rasm3 from "../../assets/slider2.jpg"

const Main = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Pages 
    bgImg={rasm} 
    title="Mobil qurilmalar" 
    lists={['Galaxy Z Fold6','Galaxy Z Flip6','Galaxy 24 FE','Galaxt Watch Ultra','Galaxy Buds 3Pro']}
    bottomTitle="Galaxy Z Fold6"
    bottomInfo = ''
    listBtn={['Batafsil','Sotib olish']}
    color='black'
    />
    <Pages 
    bgImg={rasm3} 
    title="TV va Audio" 
    lists={['Neo QLED 8K','Neo QLED 4K','The Freestyle','The Freme','Ovoli panellar']}
    bottomTitle="8K QLED Neo"
    bottomInfo='Texnalogiyalarning cheksiz imkoniyati'
    listBtn={['Batafsil','Sotib olish']}
    color='white'
    />
    <Pages 
    bgImg={rasm2} 
    title="Uy uchun" 
    lists={['Sovutgichlar','Kir yuvish mashinalari','WindFree TM konditsioner','Jet Bot','Air Dresserr']}
    bottomTitle="Yangi BESPOKE kir yuvish mashinalari"
    bottomInfo=''
    listBtn={['Batafsil']}
    color='black'
    />

    


    </>
  )
}

export default Main