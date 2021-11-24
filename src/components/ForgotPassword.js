import { Link } from "react-router-dom";
import React, { useRef, useState } from "react"
import { Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"

const ForgotPassword = () => {

    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
          setMessage("")
          setError("")
          setLoading(true)
          await resetPassword(emailRef.current.value)
          setMessage("Check your inbox for further instructions")
        } catch {
          setError("Failed to reset password")
        }
    
        setLoading(false)
      }

return(

    <>
    <main className="masthead">

    <div className="container h-100">
      <div className="row h-100 align-items-center">
        <div className="col-12 text-center">
          <div className="image-logo">
            <img src="https://res.cloudinary.com/defiefioi/image/upload/v1633607254/snapfy/logo_s48iol.png" alt="Logo" />
          </div>

          <div className="container">
            <div className="col-md-6 mx-auto text-center">
            </div>
            <div className="row">
               <div className="col-md-4 mx-auto">
               {message && <Alert variant="info">{message}</Alert>}
               {error && <Alert variant="info">{error}</Alert>}
                  <div className="myform form ">
                     <form onSubmit={handleSubmit}>
                        <div className="form-group">
                           <input type="email" ref={emailRef} name="email"  className="form-control my-input" id="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                          <button disabled={loading} className="btn btn-block g-button" type="submit">Reset password</button>
                        </div>
                     </form>
                     <p className="small mt-3">
                     Do you rememberd it?{" "}
                        <span>
                          <Link to="/login">Sign in</Link>
                        </span>
                      </p>
                  </div>
               </div>
            </div>
         </div>
        </div>
      </div>
    </div>
  </main>

  <style jsx>{`

@import url("https://use.fontawesome.com/releases/v5.15.4/css/all.css");

.image-logo {
  width: 200px;
  margin: 10px auto;
}
.image-logo img {
  width: 100%;
}

.masthead {
  height: 100vh;
  min-height: 500px;
  background: #2c2c2e;
  color: white;
}

.fw-light {
  margin: 100px 50px;
}

.login {
  margin-top: 150px;
}


#contact button {
  margin-top: 10px;
  border-radius: 4px;
}

#contact .row {
  margin-bottom: 30px;
}

.g-button {
  color: #fff !important;
  border: 1px solid #ea4335;
  background: #ea4335 !important;
  width: 100%;
  font-weight: 600;
  color: #fff;
  padding: 8px 25px;
}
.my-input {
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  cursor: text;
  padding: 8px 10px;
  transition: border 0.1s linear;
}
.header-title {
  margin: 5rem 0;
}
h1 {
  font-size: 31px;
  line-height: 40px;
  font-weight: 600;
  color: #4c5357;
}
h2 {
  color: #5e8396;
  font-size: 21px;
  line-height: 32px;
  font-weight: 400;
}
.login-or {
  position: relative;
  color: #aaa;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.span-or {
  display: block;
  position: absolute;
  left: 50%;
  top: -2px;
  margin-left: -25px;
  background-color: #fff;
  width: 50px;
  text-align: center;
}
.hr-or {
  height: 1px;
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}
@media screen and (max-width: 480px) {
  h1 {
    font-size: 26px;
  }
  h2 {
    font-size: 20px;
  }
}

.form-group input{
  margin-bottom: 5px;
}

`}</style>



  </>
  

);
};

export default ForgotPassword;