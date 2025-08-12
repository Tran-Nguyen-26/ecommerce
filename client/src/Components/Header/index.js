import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.jpg'
import CountryDropdown from '../CountryDropdown'
import Button from '@mui/material/Button'
import { FaRegUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import { useContext } from 'react';
import { MyContext } from '../../App';

const Header = () => {

  const context = useContext(MyContext)

  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
          <div className="container">
            <p className="mb-0 mt-0 text-center">Due to the <b>COVID 19</b> epidemic, orders may be processed with a slight delay</p>
          </div>
        </div>

        <div className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper align-items-center col-sm-2">
                <Link to={'/'}><img src={Logo}></img></Link>
              </div>

              <div className='col-sm-10 d-flex align-items-center part2'>

                {context.countryList.length!== 0 && <CountryDropdown />}
                <SearchBox/>

                <div className='part3 d-flex align-items-center ms-auto'>
                  {
                    context.isLogin !== true ? 
                      <Link to="/signIn"><Button className='btn-blue btn-lg btn-big btn-round ms-3'>Sign In</Button></Link> :
                      <Button className='circle me-3'><FaRegUser/></Button>
                  }
                  <div className='ms-auto cartTab d-flex align-items-center'>
                    <span className='price'>$3.29</span>
                    <div className='position-relative'>
                      <Button className='circle ms-2'><LuShoppingCart/></Button>
                      <span className='count d-flex align-items-center justify-content-center'>1</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <Navigation/>

      </div>
    </>
  )
}

export default Header