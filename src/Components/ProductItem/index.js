import Rating from '@mui/material/Rating'
import { SlSizeFullscreen } from "react-icons/sl";
import Button from '@mui/material/Button'
import { LuHeart } from "react-icons/lu";
import ProductModal from '../ProductModal';
import { useContext, useState } from 'react';
import { MyContext } from '../../App';


const ProductItem = (props) => {

  const context = useContext(MyContext)


  const viewProductDetails = (id) => {
    context.setisOpenProductModal(true)
  }

  const closeProductModal = () => {
    context.setisOpenProductModal(false)
  }

  return (
    <>
      <div className={`item productItem ${props.itemView}`}>
        <div className="imgWrapper">
          <img src="https://supersimple.dev/projects/amazon/images/products/men-cozy-fleece-zip-up-hoodie-red.jpg" className="w-100"></img>
          <span className="badge badge-primary">28%</span>
          <div className="actions">
            <Button onClick={() => viewProductDetails(1)}><SlSizeFullscreen/></Button>
            <Button><LuHeart/></Button>
          </div>
        </div>
        <div className="info">
          <h4>Men's Full-Zip Hooded Fleece Sweatshirt</h4>
          <span className="text-success d-block">In Stock</span>
          <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}></Rating> 
          <div className="d-flex">
            <span className="oldPrice">$20.00</span>
            <span className="netPrice text-danger ms-2">$14.00</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem