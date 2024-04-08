import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className='py-5 flex justify-between gap-10'>
      <div className="flex gap-10">

      <Link> HOME</Link>
      <Link> SERVICES</Link>
      <Link> ABOUT</Link>
      <Link> CONTACT</Link>
      </div>
      <div>
        <button>

        Get Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
