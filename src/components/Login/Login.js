import { Link } from "react-router-dom";

const Login = () => {
return(

    <>
    <main class="masthead">

    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-12 text-center">
          <div class="image-logo">
            <img src="https://res.cloudinary.com/defiefioi/image/upload/v1633607254/snapfy/logo_s48iol.png" alt="Logo" />
          </div>

          <div class="container">
            <div class="col-md-6 mx-auto text-center">
            </div>
            <div class="row">
               <div class="col-md-4 mx-auto">
                  <div class="myform form ">
                     <form action="" method="post">
                        <div class="form-group">
                           <input type="email" name="email"  class="form-control my-input" id="email" placeholder="Username or email" />
                        </div>
                        <div class="form-group">
                           <input type="password"  class="form-control my-input" placeholder="Password" />
                        </div>
                        <div class="form-group">
                          <button class="btn btn-block g-button" type="submit">Sign in</button>
                        </div>
                     </form>
                     <p class="small mt-3">Don't have an account? <span><Link to="/register">Sign up</Link></span>
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

export default Login;