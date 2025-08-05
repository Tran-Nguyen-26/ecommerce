import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button'
import { IoMdClose } from "react-icons/io";
import Rating from '@mui/material/Rating'
import { useContext, useRef, useState } from 'react';
import 'react-inner-image-zoom/lib/styles.min.css';
import QuantityBox from '../QuantityBox';
import { CiHeart } from "react-icons/ci";
import { MdCompareArrows } from "react-icons/md";
import { MyContext } from '../../App';
import ProductZoom from '../ProductZoom';

const ProductModal = (props) => {

  const context = useContext(MyContext)


  return (
    <Dialog open={true} className='productModal' onClose={()=>context.setisOpenProductModal(false)}>
      <Button className='close_' onClick={()=>context.setisOpenProductModal(false)}><IoMdClose/></Button>
      <h4 className='mb-1 font-weight-boldim'>All Natural Chicken</h4>
      <div className='d-flex align-items-center'>
        <div className='d-flex align-items-center me-4'>
          <span>Brands:</span>
          <span className='ms-2'><b>Welch's</b></span>
        </div>
        <Rating name="read-only" value={5} size="small" precision={0.5} readOnly></Rating>
      </div>

      <hr/>
      <div className='row mt-2'>
        <div className='col-md-5'>
          <ProductZoom/>
        </div>
        <div className='col-md-7'>
          <div className='d-flex info align-items-center mb-2'>
            <span className='oldPrice lg me-2'>$9.35</span>
            <span className='netPrice text-danger lg'>$7.25</span>
          </div>

          <span className='badge bg-success '>IN STOCK</span>
          <p className='mt-3'>Vivamus</p>

          <div className='d-flex align-items-center'>
            <QuantityBox/>
            <Button className='btn-blue btn-lg btn-big btn-round ms-3'>Add to Cart</Button>
          </div>

          <div className='d-flex align-items-center mt-3 actions'>
            <Button className='btn-round btn-sml' variant='outlined'><CiHeart/> &nbsp; Add to wishlist</Button>
            <Button className='btn-round btn-sml ms-3   ' variant='outlined'><MdCompareArrows/> &nbsp; Compare</Button>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default ProductModal