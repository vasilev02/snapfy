const Settings = () => {
    return(
    
        <>

<main>

<a href="/profile.html">
  <div class="fab"><i class="far fa-user fa-sm"></i></div>
</a>

<div class="wrapper bg-white mt-sm-5">
<h4 class="pb-4 border-bottom">Account settings</h4>

<div class="py-2">

  <form action="" method="" enctype="multipart/form-data">

    <div class="d-flex align-items-start py-3 border-bottom"> <img src="https://i2-prod.mirror.co.uk/incoming/article23362081.ece/ALTERNATES/s1200c/0_DSOL_Yael_Shelbia_7.jpg" class="img" alt="Profile picture" />
      <div class="pl-sm-4 pl-2" id="img-section"> <b>Profile photo</b>
          <p>Accepted file type .png. Less than 5MB</p> <button class="btn button border"><b>Upload</b></button>
      </div>
  </div>

  <div class="d-flex align-items-start py-3 border-bottom"> <img src="https://images.unsplash.com/photo-1520758594221-872948699332?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJpY2slMjB3YWxsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" class="img" alt="Background picture" />
    <div class="pl-sm-4 pl-2" id="img-section"> <b>Background photo</b>
        <p>Accepted file type .png. Less than 5MB</p> <button class="btn button border"><b>Upload</b></button>
    </div>
</div>

  

    <div class="row py-2">
      <div class="col-md-6"> <label for="firstname">Full name</label> <input type="text" class="bg-light form-control" /> </div>
      <div class="col-md-6"> <label for="firstname">Username</label> <input type="text" class="bg-light form-control" /> </div>
    </div>

  <div class="row py-2">
      <div class="col-md-6"> <label for="email">Email address</label> <input type="email" class="bg-light form-control" /> </div>
  </div>

    <div class="py-3 pb-4 border-bottom"> 
      <button type="submit" class="btn btn-primary mr-3">Save</button> 
      <a href="/profile.html" class="btn border button">Cancel</a> </div>
  </form>

    <div class="d-sm-flex align-items-center pt-3" id="deactivate">
        <div> <b>Deactivate your account</b>
            <p>Details about your account and password</p>
        </div>
    </div>
    <div class="ml-auto"> <button class="btn danger">Deactivate</button> </div>
</div>
</div>

</main>


      <style jsx>{`
    
    @import url("https://use.fontawesome.com/releases/v5.15.4/css/all.css");

@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

body {
    font-family: 'Poppins', sans-serif;
}

.wrapper {
    padding: 30px 50px;
    border: 1px solid #ddd;
    border-radius: 15px;
    margin: 10px auto;
    max-width: 600px
}

h4 {
    letter-spacing: -1px;
    font-weight: 400
}

.img {
    margin-right: 20px;
    width: 150px;
    height: 150px;
    border-radius: 6px;
    object-fit: cover
}

#img-section p,
#deactivate p {
    font-size: 12px;
    color: #777;
    margin-bottom: 10px;
    text-align: justify
}

#img-section b,
#img-section button,
#deactivate b {
    font-size: 14px
}

label {
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 500;
    color: #777;
    padding-left: 3px
}

.form-control {
    border-radius: 10px
}

input[placeholder] {
    font-weight: 500
}

.form-control:focus {
    box-shadow: none;
    border: 1.5px solid #2c2c2e
}

select {
    display: block;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 10px;
    height: 40px;
    padding: 5px 10px
}

select:focus {
    outline: none
}

.button {
    background-color: #fff;
    color: #2c2c2e
}

.button:hover {
    background-color: #2c2c2e;
    color: #fff
}

.btn-primary {
    margin-right: 20px;
}

.danger {
    background-color: #e20404;
    color: #fff;
    border: 1px solid #ddd
}

.danger:hover {
    background-color: #9e0000;
    color: #fff
}

@media(max-width:576px) {
    .wrapper {
        padding: 25px 20px
    }

    #deactivate {
        line-height: 18px
    }
}

.fab {
    width: 70px;
    height: 70px;
    background-color: #2c2c2e;
    border-radius: 50%;
  
    font-size: 50px;
    line-height: 70px;
    color: white;
    text-align: center;
  
    position: fixed;
    right: 30px;
    bottom: 30px;
    z-index: 2;
    cursor: pointer;
  
    transition: all 0.1s ease-in-out;
  }
  
  .fab a {
    color: white;
    text-decoration: none;
  }
  
  .fab:hover {
    box-shadow: 0 6px 14px 0 #2c2c2e;
    transform: scale(1.05);
  }
    
    `}</style>
    
    
    
      </>
      
    
    );
    };
    
    export default Settings;