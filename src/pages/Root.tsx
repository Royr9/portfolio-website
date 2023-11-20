import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../library/library_components/footer_comp/Footer'
import AppNavbar from '../components/AppNavbar'

export default function Root() {
  return (
    <div className='root-layout'>

<AppNavbar/>

<main>
<Outlet/>
</main>


    <Footer>
        Made By Roy Ramati
    </Footer>


    </div>
  )
}
