import SideBar from "../../Components/SideBar"
import { IoMenu } from "react-icons/io5"
import { CgMenuGridR } from "react-icons/cg"
import { PiDotsNineThin } from "react-icons/pi"
import { TbLayoutGridFilled } from "react-icons/tb"
import Button from '@mui/material/Button'
import { FaAngleDown } from "react-icons/fa";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react"
import ProductItem from "../../Components/ProductItem"
import Pagination from '@mui/material/Pagination';

const Listing = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [productView, setProductView] = useState('four')
  const openDropdown = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <section className="product_Listing_Page">
        <div className="container">
          <div className="productListing d-flex">
            <SideBar/>
            <div className="content-right">
              <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/slider-image-1.jpg" className="w-100"></img>

              <div className="showBy mt-3 mb-3 d-flex align-items-center">
                <div className="d-flex btnWrapper align-items-center">
                  <Button className={productView==='one' && 'act'} onClick={()=>setProductView('one')}><IoMenu/></Button>
                  <Button className={productView==='two' && 'act'} onClick={()=>setProductView('two')}><TbLayoutGridFilled/></Button>
                  <Button className={productView==='three' && 'act'} onClick={()=>setProductView('three')}><PiDotsNineThin/></Button>
                  <Button className={productView==='four' && 'act'} onClick={()=>setProductView('four')}><CgMenuGridR/></Button>
                </div>

                <div className="ms-auto showByFilter">
                  <Button onClick={handleClick}>Show 9 <FaAngleDown/></Button>
                  <Menu
                    className="w-100 showPerPageDropdown"
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openDropdown}
                    onClose={handleClose}
                    slotProps={{
                      list: {
                        'aria-labelledby': 'basic-button',
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose}>10</MenuItem>
                    <MenuItem onClick={handleClose}>20</MenuItem>
                    <MenuItem onClick={handleClose}>30</MenuItem>
                    <MenuItem onClick={handleClose}>40</MenuItem>
                  </Menu>
                </div>
              </div>

              <div className="productListing mb-3">
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
                <ProductItem itemView={productView}/>
              </div>

              <div className="d-flex align-items-center justify-content-center">
                <Pagination count={10} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Listing