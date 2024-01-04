import React from 'react'
import { BeatLoader } from 'react-spinners'

function Loader() {
  return (
    <div style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <BeatLoader color="#36d7b7" />
    </div>
  )
}

export default Loader