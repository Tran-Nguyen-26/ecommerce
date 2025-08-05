import Button from '@mui/material/Button'
import { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";


const Navigation = () => {

  const [isOpenSidebarNav, setisOpenSidebarNav] = useState(false)

  return (
    <nav>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-2 navPart1'>
            <div className='catWrapper'>
              <Button className='allCartTab align-items-center' onClick={()=>setisOpenSidebarNav(!isOpenSidebarNav)}>
                <span className='icon1 me-2'><IoIosMenu/></span>
                <span class="text">ALL CATEGORIES</span>
                <span className='icon2 ms-2'><FaAngleDown/></span>
              </Button>
              <div className={`sidebarNav shadow ${isOpenSidebarNav===true ? 'open' : ''}`}>
                <ul>
                  <li>
                    <Link to="/"><Button>men<FaAngleRight className='ms-auto'/></Button></Link>
                    <div className='submenu'>
                      <Link to="/"><Button>clothing</Button></Link>
                      <Link to="/"><Button>footware</Button></Link>
                      <Link to="/"><Button>watches</Button></Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/"><Button>women<FaAngleRight className='ms-auto'/></Button>
                      <div className='submenu'>
                        <Link to="/"><Button>clothing</Button></Link>
                        <Link to="/"><Button>footware</Button></Link>
                        <Link to="/"><Button>boot</Button></Link>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/"><Button>Beauty</Button></Link>
                  </li>
                  <li>
                    <Link to="/"><Button>Watches</Button></Link>
                  </li>
                  <li><Link to="/"><Button>Kids</Button></Link></li>
                  <li><Link to="/"><Button>Gift</Button></Link></li>
                  <li><Link to="/"><Button>men</Button></Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-sm-10 navPart2 d-flex align-items-center'>
            <ul className='list list-inline ms-auto'>
              <li className='list-inline-item'><Link to='/'><Button>Home</Button></Link></li>
              <li className='list-inline-item'>
                <Link to='/'><Button>Fashion</Button></Link>
                <div className='submenu shadow'>
                  <Link to="/"><Button>clothing</Button></Link>
                  <Link to="/"><Button>footware</Button></Link>
                  <Link to="/"><Button>watches</Button></Link>
                </div>
              </li>
              <li className='list-inline-item'>
                <Link to='/'><Button>Electronic</Button></Link>
                <div className='submenu shadow'>
                  <Link to="/"><Button>clothing</Button></Link>
                  <Link to="/"><Button>footware</Button></Link>
                  <Link to="/"><Button>watches</Button></Link>
                </div>
              </li>
              <li className='list-inline-item'>
                <Link to='/'><Button>Bakery</Button></Link>
                <div className='submenu shadow'>
                  <Link to="/"><Button>clothing</Button></Link>
                  <Link to="/"><Button>footware</Button></Link>
                  <Link to="/"><Button>watches</Button></Link>
                </div>
              </li>
              <li className='list-inline-item'><Link to='/'><Button>Grocery</Button></Link></li>
              <li className='list-inline-item'><Link to='/'><Button>Mobiles</Button></Link></li>
              <li className='list-inline-item'><Link to='/'><Button>Blog</Button></Link></li>
              <li className='list-inline-item'><Link to='/'><Button>Contact</Button></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation