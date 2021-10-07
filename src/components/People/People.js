const People = () => {
    return(
    
        <>

        <header>
        <div class="container h-100">
          <div class="d-flex justify-content-center h-100">
            <div class="searchbar">
              <input class="search_input" type="text" name="" placeholder="Search... @" />
              <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
            </div>
          </div>
        </div>
      </header>

        <main>
        <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 col-sm-8 col-lg-6">
  
                <div class="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" styles="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                  <h3>Find your friends</h3>
                  <div class="line"></div>
                </div>
              </div>
            </div>
            <div class="row">
              
              <div class="col-12 col-sm-6 col-lg-3">
                <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" styles="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                 
                  <a styles="text-decoration: none;" href="/profile.html">
                    <div class="advisor_thumb"><img src="https://girlsleadership.org/wp-content/uploads/2020/07/girl-glasses-7-965x1024-1.jpg" alt="User picture" />
                    </div>
                    
                    <div class="single_advisor_details_info">
                      <h6>Samantha Sarah</h6>
                      <p class="designation">Founder &amp; CEO</p>
                      <p class="designation">667 followers</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
      </main>


    <style jsx>{`
    
    @import url("https://use.fontawesome.com/releases/v5.15.4/css/all.css");

    .searchbar {
      margin: 10px auto;
      height: 60px;
      background-color: #2c2c2e;
      border-radius: 30px;
      padding: 10px;
    }
    
    .search_input {
      color: white;
      border: 0;
      outline: 0;
      background: none;
      width: 0;
      caret-color: transparent;
      line-height: 40px;
      transition: width 0.4s linear;
    }
    
    .searchbar:hover > .search_input {
      padding: 0 10px;
      width: 250px;
      caret-color: #ea4335;
      transition: width 0.4s linear;
    }
    
    .searchbar:hover > .search_icon {
      background: white;
      color: #ea4335;
    }
    
    .search_icon {
      height: 40px;
      width: 40px;
      float: right;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      color: white;
      text-decoration: none;
    }
    
    body {
      margin-top: 20px;
      background: #eee;
    }
    
    .single_advisor_profile {
      position: relative;
      margin-bottom: 50px;
      -webkit-transition-duration: 500ms;
      transition-duration: 500ms;
      z-index: 1;
      border-radius: 15px;
      -webkit-box-shadow: 0 0.25rem 1rem 0 rgba(0, 0, 0, 0.125);
      box-shadow: 0 0.25rem 1rem 0 rgba(0, 0, 0, 0.125);
    }
    
    .advisor_thumb {
      display: flex;
      justify-content: center;
    }
    
    .advisor_thumb img {
      width: 300px;
      height: 300px;
      object-fit: cover;
    }
    
    .single_advisor_profile .advisor_thumb {
      position: relative;
      z-index: 1;
      border-radius: 15px 15px 0 0;
      margin: 0 auto;
      background-color: white;
      overflow: hidden;
    }
    
    .single_advisor_profile .single_advisor_details_info {
      position: relative;
      z-index: 1;
      padding: 30px;
      text-align: center;
      -webkit-transition-duration: 500ms;
      transition-duration: 500ms;
      border-radius: 0 0 15px 15px;
      background-color: #ffffff;
    }
    
    .single_advisor_profile .single_advisor_details_info h6 {
      margin-bottom: 0.25rem;
      -webkit-transition-duration: 500ms;
      transition-duration: 500ms;
    }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      .single_advisor_profile .single_advisor_details_info h6 {
        font-size: 14px;
      }
    }
    .single_advisor_profile .single_advisor_details_info p {
      -webkit-transition-duration: 500ms;
      transition-duration: 500ms;
      margin-bottom: 0;
      font-size: 14px;
    }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      .single_advisor_profile .single_advisor_details_info p {
        font-size: 12px;
      }
    }
    
    .single_advisor_profile:hover .advisor_thumb .social-info a,
    .single_advisor_profile:focus .advisor_thumb .social-info a {
      color: #ffffff;
    }
    .single_advisor_profile:hover .advisor_thumb .social-info a:hover,
    .single_advisor_profile:hover .advisor_thumb .social-info a:focus,
    .single_advisor_profile:focus .advisor_thumb .social-info a:hover,
    .single_advisor_profile:focus .advisor_thumb .social-info a:focus {
      color: #ffffff;
    }
    .single_advisor_profile:hover .single_advisor_details_info,
    .single_advisor_profile:focus .single_advisor_details_info {
      background-color: #2c2c2e;
    }
    .single_advisor_profile:hover .single_advisor_details_info::after,
    .single_advisor_profile:focus .single_advisor_details_info::after {
      background-color: #ffffff;
    }
    .single_advisor_profile:hover .single_advisor_details_info h6,
    .single_advisor_profile:focus .single_advisor_details_info h6 {
      color: #ffffff;
    }
    .single_advisor_profile:hover .single_advisor_details_info p,
    .single_advisor_profile:focus .single_advisor_details_info p {
      color: #ffffff;
    }
    
    .single_advisor_details_info {
      color: black;
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
    
    export default People;