const Profile = () => {
    return(
    
        <>

<main>
        <a href="/home.html">
            <div class="fab-users"><i class="fas fa-users"></i></div>
        </a>

        <div class="wrapper">
            <img class="background-image" src="https://www.enjpg.com/img/2020/outer-space-background-8.jpg" alt="Background image" />

            <div class="profile">
                <img src="https://media.glamour.com/photos/60ec8c044b69168174d4d344/master/pass/118199090_660701904827587_4866693903082711670_n.jpg" alt="Profile image" />
                <div class="overlay">
                    <div class="about d-flex flex-column">
                        <h4>Kim Sarah</h4>
                        <span>@sarah34</span>
                        
                    </div>
                    <ul class="social-icons">
                        <li><i class="fas fa-check"></i></li>
                        <li><i class="fas fa-plus"></i></li>

                        <form method="post" enctype="multipart/form-data">

                            <label for="apply">
                                <input type="file" name="" id="apply" accept="image/*,.pdf" />
                                <li><i class="far fa-images"></i></li>
                            </label>
                                
                            </form> 

                        <a href="settings.html"><li><i class="fas fa-cog"></i></li></a>
                        
                        <li><i class="fas fa-sign-out-alt"></i></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="card p-0">
                        <div class="card-image"> <img src="https://images.pexels.com/photos/2746187/pexels-photo-2746187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /> </div>
                        
                        
                        <div class="card-content d-flex flex-column align-items-center">
                            <ul class="social-icons">
                                <li><i class="far fa-heart"></i></li>
                                <li><i class="far fa-trash-alt"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card p-0">
                        <div class="card-image"> <img src="https://images.pexels.com/photos/2746187/pexels-photo-2746187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /> </div>
                        
                        
                        <div class="card-content d-flex flex-column align-items-center">
                            <ul class="social-icons">
                                <li><i class="far fa-heart"></i></li>
                                <li><i class="far fa-trash-alt"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    </main>


      <style jsx>{`
    
    @import url('https://use.fontawesome.com/releases/v5.15.4/css/all.css');

    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: #000
    }
    .profile{
        position: relative;
    }
    
    .background-image{
        position: absolute;
        width: 100%;
        height: 100vh;
    
      /* Center and scale the image nicely */
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    
    .profile img{
        position: relative;
        width: 400px;
        height: 450px;
        border-radius: 6px
    }
    
    .overlay {
        width: 100%;
        height: 100%;
        border-radius: 12px;
        opacity: 0;
        transition: all 1s;
        border-radius: 6px
    }
    
    .profile .overlay {
        opacity: 1
    }
    
    .social-icons {
        display: flex;
        justify-content: center;
        list-style: none;
        text-align: center;
        padding: 0px;
        margin-top: 10px;
    }
    
    .social-icons li {
        cursor: pointer;
        width: 25px;
        height: 25px;
        border: 1px solid #eee;
        padding: 20px;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        border-radius: 5px;
        transition: all 1s;
    }
    
    .social-icons li:hover {
        background: #fff;
        color: black
    }
    
    .social-icons a{
        color: white;
        text-decoration: none;
    }
    
    .social-icons a:hover{
        color: black;
    }
    
    .overlay .about {
        position: relative;
        justify-content: center;
        align-items: center;
        display: flex;
        top: 40%;
        color: #fff;
        flex: column
    }
    
    main .container{
        margin-top: 50px;
    }
    
    .card{
        margin: 5px;
        padding: 0px;
    }
    
    .card .card-image {
        width: 100%;
        max-height: 340px;
    }
    
    .card .card-image img {
        width: 100%;
        max-height: 340px;
        object-fit: cover
    }
    
    .card .card-content {
        position: absolute;
        bottom: -180px;
        color: #fff;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(15px);
        min-height: 100px;
        width: 100%;
        transition: bottom .4s ease-in;
        box-shadow: 0 -10px 10px rgba(255, 255, 255, 0.1);
        border-top: 1px solid rgba(255, 255, 255, 0.2)
    }
    
    .card:hover .card-content {
        bottom: 0px
    }
    
    .card .card-content .social-icons {
        list-style: none;
        padding: 0px;
    }
    
    .card .card-content .social-icons li {
        margin: 20px;
        transition: 0.5s;
        transition-delay: calc(0.15s * var(--i));
        transform: translateY(50px)
    }
    
    .card:hover .card-content .social-icons li {
        transform: translateY(20px)
    }
    
    .card .card-content .social-icons li a {
        color: #fff
    }
    
    .card .card-content .social-icons li a span {
        font-size: 1.3rem
    }
    
    @media(max-width: 991.5px) {
        .container {
            margin-top: 20px
        }
    
        .container .row .col-lg-4 {
            margin: 20px 0px
        }
    }
    
    .card{
        padding: 0px;
    }
    
    .fab-users {
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
      
      .fab-users a {
        color: white;
        text-decoration: none;
      }
      
      .fab-users:hover {
        box-shadow: 0 6px 14px 0 #2c2c2e;
        transform: scale(1.05);
      }
    
    input {
      border: 0;
        clip: rect(1px, 1px, 1px, 1px);
        height: 1px; 
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }
      
    
    `}</style>
    

      </>
      
    
    );
    };
    
    export default Profile;