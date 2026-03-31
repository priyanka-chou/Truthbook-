import React from 'react'
import { FiSearch } from "react-icons/fi";
import { BsChat } from "react-icons/bs";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between">

          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img 
              src="https://as2.ftcdn.net/jpg/01/70/20/71/1000_F_170207194_oWdsbBwjZUpBWAulz1ceeppCh50qYpdD.jpg"
              width="60"
              height="50"
              className="d-inline-block"
            />
            <span className="fs-3 fw-bold ms-2">Bootstrap</span>
          </a>

          {/* Right Icons */}
          <div className="d-flex align-items-center gap-5 fs-4 mx-5 px-5">
            <FiSearch />
            <BsChat />
          </div>

        </div>
      </nav>
      <hr />
    </div>
  )
}

export default Navbar