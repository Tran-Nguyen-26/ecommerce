import Rating from "@mui/material/Rating"
import { Link } from "react-router-dom"
import QuantityBox from "../../Components/QuantityBox"
import { IoIosClose } from "react-icons/io";
import Button from "@mui/material/Button";
import { FaShoppingCart } from "react-icons/fa";


const Cart = () => {
  return (
    <>
      <section className="section cartPage">
        <div className="container">
          <h2 className="hd">Your Cart</h2>
          <p>There are <b className="text-red">3</b> products in your cart</p>
          <div className="row">
            <div className="col-md-9 pe-5">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>                
                      <th width="35%">Product</th>
                      <th width="30%">Unit Price</th>
                      <th width="25%">Quantity</th>
                      <th width="5%">Subtotal</th>
                      <th width="5%">Remove</th> 
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td width="35%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartItemimgWrapper">
                            <div className="imgWrapper">
                              <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-600x600.jpg" className="w-100"/>
                            </div>

                            <div className="info px-3">
                              <h6>Field Roast Chao Chesse Creamy Original</h6>
                              <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small"/>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">$7.25</td>
                      <td width="25%">
                        <QuantityBox/>
                      </td>
                      <td width="15%">$7.25</td>
                      <td width="10%"><span className="remove"><IoIosClose/></span></td>
                    </tr>

                    <tr>
                      <td width="35%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartItemimgWrapper">
                            <div className="imgWrapper">
                              <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-600x600.jpg" className="w-100"/>
                            </div>

                            <div className="info px-3">
                              <h6>Field Roast Chao Chesse Creamy Original</h6>
                              <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small"/>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">$7.25</td>
                      <td width="25%">
                        <QuantityBox/>
                      </td>
                      <td width="15%">$7.25</td>
                      <td width="10%"><span className="remove"><IoIosClose/></span></td>
                    </tr>

                    <tr>
                      <td width="35%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center cartItemimgWrapper">
                            <div className="imgWrapper">
                              <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-600x600.jpg" className="w-100"/>
                            </div>

                            <div className="info px-3">
                              <h6>Field Roast Chao Chesse Creamy Original</h6>
                              <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small"/>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">$7.25</td>
                      <td width="25%">
                        <QuantityBox/>
                      </td>
                      <td width="15%">$7.25</td>
                      <td width="10%"><span className="remove"><IoIosClose/></span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border p-3 cartDetails">
                <h4>CART TOTALS</h4>
                <div className="d-flex align-items-center mb-3">
                  <span>Subtotal</span>
                  <span className="ms-auto text-red"><b>$12.31</b></span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <span>Shipping</span>
                  <span className="ms-auto"><b>Free</b></span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <span>Estimate for</span>
                  <span className="ms-auto"><b>Viet Nam</b></span>
                </div>
                <div className="d-flex align-items-center">
                  <span>Total</span>
                  <span className="ms-auto text-red"><b>$12.31</b></span>
                </div>

                <br/>
                <Button className="btn-blue bg-red btn-lg btn-big"><FaShoppingCart/> &nbsp; Add To Cart</Button>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart