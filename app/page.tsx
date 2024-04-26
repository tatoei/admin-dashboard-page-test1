"use client"
import Link from "next/link"

const Homepage = () => {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", minHeight:"100vh"}}>

      <Link href={"/dashboard"}>
        <button style={{padding:"25px 50px"}}>ไปจ้าาาาา</button>
     </Link>
    </div>
  )
}

export default Homepage
  