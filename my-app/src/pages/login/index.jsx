import { useState } from "react"
import { useHistory } from "react-router"
import useAuth from "../../core/useAuth"
import useFormValidate from "../../core/useFormValidate"
import authen from "../../apis/authen"

export default function Login(params) {
  let [formError, setFormError] = useState()
  let { login, handleLogin } = useAuth()
  // let [form,setForm] = useState({
  //     email: "",
  //     password: "",
  //     emailRegister:""
  // })

  // let [error,setError] = useState({
  //     email: "",
  //     password: "",
  //     emailRegister:""
  // })

  // function inputChange(e){
  //     setForm({
  //         ...form,
  //         [e.target.name]: e.target.value
  //     })
  // }

  let { form, error, inputChange, check } = useFormValidate({
    email:  '',
    password: '',
    // emailRegister: ''
  }, {
      rule: {
        password: {
          required: true,
        },
        email: {
          required: true,
          pattern: 'email'
        },
        // emailRegister: {
        //   required: true,
        //   pattern: 'email'
        // },
      },
      message: {
        password:{
          required:'Mật khẩu không được để trống'
        },
        email: {
          required: 'Email không được để trống',
          pattern: 'Email không hợp lệ'
        },
        // emailRegister: {
        //   required: 'Email không được để trống',
        //   pattern: 'Email không hợp lệ'
        // },
      },
      options:{
        localStorage:'login'
      }
    })

  function testBind(test) {
    console.log(this, test)
  }

  function fnLogin() {
    let error = check()

    if (Object.keys(error).length === 0) {
      // let res = await handleLogin(form)
      // setFormError(res.error)
      // console.log("res account",res)
      // let res = handleLogin(form) 
      setFormError("Loading...")
      let data = {
        "username": form.email,
        "password": form.password
      }
      authen.login(data)
        .then((result) => {
            console.log("result: ", result)
            setFormError("Đăng nhập thành công")
            handleLogin(result)
        })
        .catch((err) => {
            console.log("err: ", err)
            setFormError("Tài khoản hoặc mật khẩu không đúng")
        })
      // console.log("res account",res)

      // if(res != null){
        
      // }else{
        
      // }
    }

    // let errorObj = {}
    // if (!form.email) {
    //   errorObj.email = "Email không được để trống!"
    // } else if (!/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/i.test(form.email)) {
    //   errorObj.email = "Email không đúng định dạng!"
    // } else if (!form.password) {
    //   console.log(form.password)
    //   errorObj.password = "Mật khẩu không được để trống!"
    // } else {
    //   handleLogin()
    // }
    // setError(errorObj)
  }

  function fnRegister() {


    // let errorObj = {}
    // if (!form.emailRegister) {
    //   errorObj.emailRegister = "Email không được để trống!"
    // } else if (!/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/i.test(form.emailRegister)) {
    //   errorObj.emailRegister = "Email không đúng định dạng!"
    // }
    // setError(errorObj)
    // console.log(form)
  }

  return (
    <>
      <div className="mobile-menu-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="mobile-menu">
                <nav id="dropdown">
                  <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="shop.html">SHOP</a></li>
                    <li><a href="shop.html">MEN</a></li>
                    <li><a href="shop.html">WOMEN</a></li>
                    <li><a href="shop.html">COLLECTION</a></li>
                    <li><a href="#">Pages</a>
                      <ul>
                        <li><a href="404.html">404 Page</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="cart.html">Cart Page</a></li>
                        <li><a href="checkout.html">Checkout Page</a></li>
                        <li><a href="contact-us.html">Contact Page</a></li>
                        <li><a href="login.html">Login</a></li>
                        <li><a href="my-account.html">My Account</a></li>
                        <li><a href="shop.html">Shop Page</a></li>
                        <li><a href="wishlist.html">Wishlist</a></li>
                      </ul>
                    </li>
                    <li><a href="contact-us.html">CONTACT</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu End */}
      {/*Header Area End*/}
      {/* Breadcrumbs Area Start */}
      <div className="breadcrumbs-area2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Login / Create An Account</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumbs Area End */}
      {/* Login Account Area Start */}
      <div className="login-account-area section-padding">
        <div className="container">
          <div className="row">
            <div className="account-details">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <form className="create-account-form">
                  <h1 className="heading-title">Create an account</h1>
                  <p className="form-row">
                    <label>Email address</label>
                    <input type="email" value={form.emailRegister} onChange={inputChange} name="emailRegister" />
                    {error.emailRegister ? <p className="text-error">{error.emailRegister}</p> : null}
                  </p>
                  <div className="submit">
                    <button name="submitcreate" id="submitcreate" onClick={fnRegister} type="button">
                      <span>
                        <i className="fa fa-user left" />
                          Create an account
                        </span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <form className="login-form">
                  <h1 className="heading-title">Already registered?</h1>
                  {
                    formError && <p className="error-text text-danger">{formError}</p>
                  }
                  <p className="form-row">
                    <label>Email address</label>
                    <input type="email" value={form.email} onChange={inputChange} name="email" />
                    {error.email ? <p className="text-error">{error.email}</p> : null}
                  </p>
                  <p className="form-row">
                    <label>Password</label>
                    <input type="password" value={form.password} onChange={inputChange} name="password" />
                    {error.password ? <p className="text-error">{error.password}</p> : null}
                  </p>
                  <p className="lost-password form-group"><a rel="nofollow" href="#">Forgot your password?</a></p>
                  <div className="submit">
                    <button name="submitcreate2" id="submitcreate2" onClick={fnLogin} type="button">
                      <span><i className="fa fa-lock" />Sign In</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
