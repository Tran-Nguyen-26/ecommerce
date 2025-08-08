import ProductZoom from "../../Components/ProductZoom"
import Rating from "@mui/material/Rating"
import QuantityBox from "../../Components/QuantityBox"
import Button from "@mui/material/Button"
import { IoMdCart } from "react-icons/io";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { MdCompareArrows } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import RelatedProducts from "./RelatedProducts";


const ProductDetails = () => {

  const [activeSize, setActiveSize] = useState(null)
  const [activeTabs, setActiveTabs] = useState(0)

  const isActive = (index) => {
    setActiveSize(index)
  }

  return (
    <>
      <section className="productDetails section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ProductZoom/>
            </div>
            <div className="col-md-7 ps-5 pe-5">
              <h2 className="hd text-capitalize">All Natural Italian-Style Chicken Meatballs</h2>
              <ul className="list list-inline d-flex align-items-center">
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <span className="text-light me-2">Brands: </span>
                    <span>Welch's</span>
                  </div>
                </li>

                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <Rating name="read-only" value={5} precision={0.5} readOnly size="small"></Rating>
                    <span className="text-light cursor ms-2">1 Review</span>
                  </div>
                </li>     
              </ul>
              <div className="d-flex info mb-4">
                <span className="oldPrice">$20.00</span>
                <span className="netPrice text-danger ms-2">$14.00</span>
              </div>
              <span className="badge bg-success">IN STOCK</span>
              <p className="mt-3">Vivamus adipiscing nisl ut dolor dignissim semper.
                Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent
              </p>

              <div className="productSize d-flex align-items-center">
                <span>Size / Weight:</span>
                <ul className="d-flex align-items-center">
                  <li className="list list-inline-item">
                    <a className={`tag ${activeSize === 0 ? 'active' : ''}`} onClick={()=>isActive(0)}>50g</a>
                  </li>
                  <li className="list list-inline-item">
                    <a className={`tag ${activeSize === 1 ? 'active' : ''}`} onClick={()=>isActive(1)}>100g</a>
                  </li>
                  <li className="list list-inline-item">
                    <a className={`tag ${activeSize === 2 ? 'active' : ''}`} onClick={()=>isActive(2)}>200g</a>
                  </li>
                  <li className="list list-inline-item">
                    <a className={`tag ${activeSize === 3 ? 'active' : ''}`} onClick={()=>isActive(3)}>300g</a>
                  </li>
                  <li className="list list-inline-item">
                    <a className={`tag ${activeSize === 4 ? 'active' : ''}`} onClick={()=>isActive(4)}>500g</a>
                  </li>
                </ul>
              </div>

              <div className="d-flex align-items-center mt-3">
                <QuantityBox/>
                <Button className="btn-blue btn-lg btn-big btn-round"><IoMdCart/> &nbsp; Add to Cart</Button>

                <Tooltip title="Add to WishList" placement="top">
                  <Button className="btn-blue btn-lg btn-big btn-circle ms-4"><CiHeart/></Button>
                </Tooltip>
                
                <Tooltip title="Add to Compare" placement="top">
                  <Button className="btn-blue btn-lg btn-big btn-circle ms-4"><MdCompareArrows/></Button>
                </Tooltip>
              </div>
            </div>
          </div>

          <div className="card mt-5 p-5 detailPageTabs">
            <div className="customTabs">
              <ul className="list list-inline">
                <li className="list-inline-item">
                  <Button className={`${activeTabs === 0 && 'active'}`} onClick={()=>setActiveTabs(0)}>Description</Button>
                </li>
                <li className="list-inline-item">
                  <Button className={`${activeTabs === 1 && 'active'}`} onClick={()=>setActiveTabs(1)}>Additional info</Button>
                </li>
                <li className="list-inline-item">
                  <Button className={`${activeTabs === 2 && 'active'}`} onClick={()=>setActiveTabs(2)}>Vendor</Button>
                </li>
                <li className="list-inline-item">
                  <Button className={`${activeTabs === 3 && 'active'}`} onClick={()=>setActiveTabs(3)}>Reviews</Button>
                </li>
              </ul>

              {
                activeTabs === 0 &&
                <div className="tabContent">Quisque varius diam vel metus mattis, id aliquam diam rhoncus.</div>
              }

              {
                activeTabs === 1 &&
                <div className="tabContent">
                  <div className="table-responsive">
                    <div className="table table-bordered">
                      <tbody>
                        <tr className="stand-up">
                          <th>Stand Up</th>
                          <td>
                            <p>35"L x 24"W x 37-45"H(front to back wheel)</p>
                          </td>
                        </tr>
                        <tr class="folded-wo-wheels">
                          <th>Folded (w/o wheels)</th>
                          <td>
                            <p>32.5"L x 18.5"W x 16.5"H</p>
                          </td>
                        </tr>
                        <tr class="folded-wo-wheels">
                          <th>Folded (w/ wheels)</th>
                          <td>
                            <p>32.5"L x 24"W x 18.5"H</p>
                          </td>
                        </tr>
                        <tr className="door-pass-through">
                          <th>Door Pass Through</th>
                          <td>
                            <p>24</p>
                          </td>
                        </tr>
                        <tr class="frame">
                          <th>Frame</th>
                          <td>
                            <p>Aluminum</p>
                          </td>
                        </tr>
                        <tr class="weight-wo-wheels">
                          <th>Weight (w/o wheels)</th>
                          <td>
                            <p>20 LBS</p>
                          </td>
                        </tr>
                        <tr class="weight-capacity">
                          <th>Weight Capacity</th>
                          <td>
                            <p>60 LBS</p>
                          </td>
                        </tr>
                        <tr class="width">
                          <th>Width</th>
                          <td>
                            <p>24"</p>
                          </td>
                        </tr>
                      </tbody>
                    </div>
                  </div>
                </div>
              }

              {
                activeTabs == 2 &&
                <div className="tabContent">
                  <div className="row">
                    <div className="col-md-8">
                      <h3>Customer questions & answers</h3>
                      <div className="card p-4 reviewsCard flex-row">
                        <div className="image">
                          <div className="rounded-circle">
                            <img src="https://cdn.dribbble.com/userupload/27341424/file/original-7526e60193cff69cba7dc1cf48a696d6.png?resize=80x60"/>
                          </div>
                          <span className="text-g d-block text-center font-weight-bold">Ringku</span>
                        </div>
                        <div className="info ps-5">
                          <div className="d-flex align-items-center w-100">
                            <h5 className="text-light">26/07/2015</h5>
                            <div className="ms-auto">
                              <Rating name="half-rating-read" value={4.5} precision={0.5} readOnly size="small"/>
                            </div>
                          </div>
                          <p>Many buyers want to feel confident in their purchasing decisions before completing a sale. 
                              Product reviews are a great resource for customers to research their buying options and contemplate the pros and cons of
                              a product or service. Businesses may also use product reviews as powerful marketing tools to increase positive perception
                              of a product or service and increase brand awareness.
                          </p>
                        </div>
                      </div>
                    </div>
                    <form className="reviewForm">
                      <h4>Add a review</h4>
                      <br/>
                      <div className="form-group">
                        <textarea className="form-control"
                                  placeholder="Write a Review"
                                  name="Review"
                        ></textarea>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Name" name="username"></input>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <Rating name="Rating" value={4.5} precision={0.5}/>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <Button type="submit" className="btn-blue btn-lg btn-big btn-round">Submit Review</Button>
                      </div>
                    </form>
                  </div>
                </div>
              }

            </div>
          </div>
          
          <RelatedProducts/>

        </div>
      </section>
    </>
  )
}

export default ProductDetails