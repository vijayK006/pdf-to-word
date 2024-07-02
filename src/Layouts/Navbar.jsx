import React from 'react'
import logo from '../Img/logo.png'
import { Container } from 'react-bootstrap'
const Navbar = () => {
  return (
    <>
    <Container className='mt-3' fluid>
    <nav className="d-flex align-items-center justify-content-between py-2">
        {/* <img src={logo} alt='logo' title='pdf converter' className='my-1'/> */}
        <h4 className='m-0 px-3'><span>PDF</span>  Converter</h4>

        <button type='button' className='btn-navbar px-4 py-2 mx-3'>Login</button>
      </nav>
    </Container>
      
    </>
  )
}

export default Navbar
