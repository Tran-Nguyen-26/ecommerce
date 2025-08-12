import { useContext, useEffect } from "react"
import { MyContext } from "../../App"
import Logo from '../../assets/images/logo.jpg'
import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button"
import { Link } from "react-router-dom"


const SignIn = () => {

  const context = useContext(MyContext)

  useEffect(() => {
    context.setisHeaderFooterShow(false)
  }, [])

  return (
    <section className="section signInPage">
      <div className="container">
        <div className="box card p-3 shadow boder-0">
          <div className="text-center">
            <img src={Logo}/>
          </div>
          <form className="mt-3">
            <h2>Sign In</h2>
            <div className="form-group">
              <TextField id="standard-basic" label="Email" variant="standard" type="email" required className="w-100"/>
            </div>
            <div className="form-group">
              <TextField id="standard-basic" label="Password" variant="standard" type="password" required className="w-100"/>
            </div>

            <a className="border-effect cursor txt">Forgot Password?</a>

            <div className="d-flex align-items-center mt-3 mb-3">
              <Button className="btn-blue btn-lg btn-big col-md-8">Sign In</Button>
              <Link to="/"><Button className="btn-lg btn-big col-md-4 ms-3" variant="outlined" onClick={()=>context.setisHeaderFooterShow(true)}>Cancel</Button></Link>
            </div>

            <p className="txt">Not Registered? <Link to="/signUp" className="border-effect">Sign Up</Link></p>

            <h6 className="mt-3 text-center">Or continue with social account</h6>

            <span className="cursor"><img src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png"/></span>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignIn