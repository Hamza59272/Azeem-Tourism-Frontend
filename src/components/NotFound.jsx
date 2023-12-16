import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from '../assets/404_PageNotFound.json'

export default function NotFound() {
  return (
    <>
    <div style={{
        display:'flex' , 
        flexDirection:'row' , 
        justifyContent:'center'
        }}
    >
        <Lottie
            loop
            path='https://lottie.host/c497a32d-cb3d-44b0-be06-f2024951085b/BjqOmtjGCi.json'
            play
            style={{width:'40%' , height:'30%' , justifyContent:'center'}}
        />
  </div>
  </>
  )
}
