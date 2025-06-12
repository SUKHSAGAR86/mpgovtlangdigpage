
import React from 'react';
import ImageSlider from "./ImageSlider"
import VideoSlider from './VideoSlider';
import FooterPage from './FooterPage';



import SliderMain from "../../img/SliderMain-170425041609113.jpg";
import card1 from "../../img/Card1.jpg";
import card2 from "../../img/Card2.jpeg";
import profileImage from "../../img/profileImage.jpg";
import logo from "../../img/Logo.jpg";
import Snd1 from "../../img/2sd1.jpg";
import TN5 from "../../img/TN5.jpg";
import TN6 from "../../img/TN6.jpg";
import TN7 from "../../img/TN7.jpeg";
import mantriNews from "../../img/MantrimandalNews.jpg";
import jalsanraksan from "../../img/jalSararksan.jpeg";
import jalsamasya from "../../img/jalsamasya.jpg";
import jalsansadhan from "../../img/jalsansadhan.jpeg";
import DptCM1 from "../../img/Card1.jpg";
import DptCM2 from "../../img/Card2.jpeg";
import social from "../../img/social.jpg";
import company from "../../img/company.png"

const LandingPage = () => {
  return (
    <div>

      {/* Top Bar */}
      <div className="bg-light small border-bottom d-flex justify-content-around mt-2 mb-1 ">
      <div>
    
      <span className="me-3 fw-bold" style={{fontSize:"10px"}}>संपर्क करें |</span>
      <span className="me-3 fw-bold" style={{fontSize:"10px"}}>ऑफिस लॉगिन |</span>
      
      </div>
        <div className="d-flex justify-content-center me-4 fw-bold text-light" style={{fontSize:"8px"}} >
        <span className="me-3 bi bi-translate" style={{backgroundColor:"orange",padding: "5px 10px",cursor:"pointer"}}>&nbsp;हिंदी ▼</span>
        <span className="me-3 bi bi-person-wheelchair" style={{backgroundColor:"#f4431f",padding: "5px 10px",cursor:"pointer"}}>▼</span>
        <span className="me-3 blink-bg">e-रोजगार और निर्माण</span>
        <span className="me-3 blink-bg">e-संदेश</span>
        <span className="me-3 blink-bg bi bi-mic-fill">&nbsp;PORTCAST</span>
      <span className="me-3 bi bi-telegram " style={{ backgroundColor: "rgb(26, 115, 232)",padding: "5px 10px",cursor:"pointer" }}>&nbsp;Telegram</span>

        <span className="me-3 bi bi-whatsapp"style={{backgroundColor:"green",padding: "5px 10px",cursor:"pointer"}}>&nbsp;Whatsapp</span>
        <span className="me-3 bi bi-google-play"style={{backgroundColor:"black",padding: "5px 10px",cursor:"pointer"}}>&nbsp;Download APP</span>
        </div>
      </div>
    
      {/* Header Section */}

      <div style={{ 
  position: 'sticky', 
  top: 0, 
  // left: 0, 
  // right: 0, 
  zIndex: 1030,  // Bootstrap uses 1030+ for navbars
  width: '100%' 
}}>

<div className="d-flex align-items-center bg-white border-bottom " style={{background: 'linear-gradient(to right,rgba(255, 0, 0, 0.93), #fbb034)',height:"60px"}}>
        <img src={logo}  alt="Logo" height="60" className="me-2 ms-4" />
       

        <div className="ms-auto d-flex align-items-center text-white">
          <span className='fs-3'><i className="bi bi-house-fill me-2" style={{cursor:"pointer"}}></i></span>
          <span className="fw-bold"style={{fontSize:"10px", cursor:"pointer"}}>आज के समाचार</span>
        </div>

           {/* Navigation Bar */}
        <div className="  d-flex align-items-center fw-bold " style={{fontSize:"10px"}}>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg ">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNavbar"
              aria-controls="mainNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse text-white" id="mainNavbar">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">फोटो</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">वीडियो</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">फिल्म</a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-white" href="#">राज्यपाल</a>
                </li>

                {/* मुख्यमंत्री Dropdown */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-white" href="#" id="cmDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    मुख्यमंत्री
                  </a>
                  <ul className="dropdown-menu text-white" aria-labelledby="cmDropdown">
                    <li><a className="dropdown-item" href="#">मुख्यमंत्री 1</a></li>
                    <li><a className="dropdown-item" href="#">मुख्यमंत्री 2</a></li>
                  </ul>
                </li>

                {/* मंत्रिपरिषद Dropdown */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-white" href="#" id="cabinetDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    मंत्रिपरिषद
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="cabinetDropdown">
                    <li><a className="dropdown-item" href="#">मंत्री 1</a></li>
                    <li><a className="dropdown-item" href="#">मंत्री 2</a></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-white" href="#">आलेख</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">सफलता की कहानी</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">डायरेक्टरी</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">ऑनलाइन विज्ञापन</a>
                </li>

                {/* जिले के समाचार Dropdown */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-white" href="#" id="districtDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    जिले के समाचार
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="districtDropdown">
                    <li><a className="dropdown-item" href="#">जिला 1</a></li>
                    <li><a className="dropdown-item" href="#">जिला 1</a></li>
                    <li><a className="dropdown-item" href="#">जिला 1</a></li>
                  </ul>
                </li>

                <li className="bi bi-search me-2 align-items-center fw-bold " style={{fontSize:"18px", cursor:"pointer"}}></li>
                <li className="bi bi-grid-3x3-gap align-items-center fw-bold me-4" style={{fontSize:"20px",cursor:"pointer"}}></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      </div>

      </div>

      







      <div className="d-flex align-items-center border py-2 px-3" style={{ backgroundColor: '#fff',border:"1px solid black"}}>
      {/* Left Box */}
      <div 
        style={{
          backgroundColor: '#f4431f',
          color: 'white',
          padding: '8px 8px',
          borderRadius: '30px 0 0 30px',
          fontWeight: 'bold',
          width:"120px",
          border:"1px solid gray"
        }}
      >
        ब्रेकिंग न्यूज़
      </div>

      Right Scrolling News
      <div className="ms-3 w-100 overflow-hidden" style={{}}>
        <marquee direction="left" scrollamount="5" className="text-dark fw-bold">
          ▶ मुख्यमंत्री डॉ. मोहन यादव रविंद्र भवन भोपाल में मध्यप्रदेश राज्य कर्मचारी संघ द्वारा आयोजित अभिनंदन समारोह में शामिल हुए।
        </marquee>
      </div>
     </div>

     {/* master image */}
     <div className="w-100">
        <img src={SliderMain} alt="Slider" className="img-fluid" />
     </div>

     {/*grid*/}
    <div className="container-fluid row mt-3">
        {/*left Card*/}
        <div className="col-3">
            <div className="card rounded-1"style={{width: "18rem"}}>
               <img src={card1} alt="img" className="rounded-1" />
              
                <div className="cord-body mt-2 text-center">
                <h6>संग्रहालयों के तकनीकी उन्नयन से देश-दुनिया में प्रदेश की विशेष बनी है पहचान: मुख्यमंत्री डॉ. यादव</h6>
                <p className="bi bi-clock text-muted text-center" style={{fontSize:"11px"}}>18/05/2025 20:15</p>
                </div>
            </div>

            <div className="card mt-2" style={{width:"18rem"}}>
                    <img src={card2} alt="img" className="rounded-1" />
                    <div className="card-body text-center">
                        <h6>वर्तमान और भावी पीढ़ी को अपने गौरवशाली अतीत से जोड़ना जरूरी: मुख्यमंत्री डॉ. यादव</h6> 
                        <p className="bi bi-clock text-muted text-center" style={{fontSize:"11px"}}>18/05/2025 18:45</p>                      
                    </div>
                
                <div>
                    
                </div>
            </div>
        </div>


          {/*center grid*/}
        <div className="col-6">
          <div> 
            <img src={card1} alt="" />
          </div>
          <div className="d-flex justify-content-center my-4">
            <fieldset style={{
                position: 'relative',
                borderRadius: '10px',
                padding: '20px',
                paddingBottom:'8px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '400px',
                margin: 'auto',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                marginTop: "-4.5rem"

      }}>
        <legend style={{
          backgroundColor: "#ff4500",
          position: 'absolute',
          top: '-14px',
          left:"9rem",
          color: 'white',
          borderRadius: '4px',
          fontSize: '14px',
          fontWeight: 'bold',
          textAlign:"right",
          alignItems:"center",
          display:"flex",
          justifyContent:"center",
          width: "100px"
        }}>
          मुख्य समाचार
        </legend>

        <h6 className='fw-bold text-center'>
          मुख्यमंत्री डॉ. यादव ने पूर्व केंद्रीय मंत्री श्री अनिल माधव दवे की पुण्यतिथि पर दी श्रद्धांजलि
        </h6>

        <p  className='text-center' style={{ fontSize: "12px", marginTop: "10px" }}>
          "नदी का घर" पहुँचकर, की पुष्पांजलि अर्पित
        </p>

        <p className="bi bi-clock text-muted text-center" style={{fontSize:"11px"}}>18/05/2025 19:35</p>
        
      </fieldset>
    
          </div>
       </div>
          


         {/*right grid*/}
     <div className="col-3 text-center">
       
     <div className="card " style={{border:"1px solid gray", width: "16rem"}}>
       <div className="profile-img-container mt-4 " style={{width: "16rem"}}>
        <img src={profileImage} 

        style={{
          width:"150px",
          height:"150px",
          borderRadius:"50%",
          objectFit:"cover",
          border:"4px solid gray",
          shadow:" 0 0 5px rgba(0, 0, 0, 0.2) "

        }}
        
        alt="डॉ. मोहन यादव" className="profile-img "  />
      </div>

      <div className="text-white fw-bold mt-4" style={{backgroundColor:"#ff4500"}}>
        डॉ. मोहन यादव
      </div>
      <div className="fw-bold fs-6">
        मुख्यमंत्री, मध्यप्रदेश शासन
      </div>

      <div className="mt-4">
        <div style={{borderTop:"1px solid gray",cursor:"pointer",}}>समाचार</div>
        <div style={{borderTop:"1px solid gray",cursor:"pointer"}}>फोटो</div>
        <div style={{borderTop:"1px solid gray",cursor:"pointer"}}>मंत्रिपरिषद के निर्णय</div>
        <div style={{borderTop:"1px solid gray", cursor:"pointer" }}>आलेख</div>
      </div>
      </div>


        <div className="mt-4 p-3 bg-black" style={{
          width:"16rem"
        }}>
          <iframe src="https://www.youtube.com/embed/s8EMvCeA6fM?si=IOXwrIYmYCV8yBvw"  style={{
          width:"14rem", textAlign:"center",objectFit:"cover"
        }}></iframe>
        </div>
     </div>
    </div>



    {/* second component*/}

    <div className=" container-fluid row mt-5 mb-5">
        <div className="col-4">
        <div className="container mt-3">
          <h6 className="headline text-start">मुख्यमंत्री समाचार</h6>
            </div>
            <div className='card mt-2'style={{width:"22rem"}}>
              <img src={Snd1} alt="img" className='card-image' style={{width:"22rem"}}/>
              <div className='card-body'>
                <p style={{fontSize:"15px"}}>कर्मयोगी हैं प्रदेश के कर्मचारी, उनकी कर्तव्य निष्ठा से ही देश के अग्रणी राज्यों में शामिल है हमारा प्रदेश: मुख्यमंत्री</p>
                <p className="bi bi-clock text-muted text-center" style={{fontSize:"11px"}}>18/05/2025 20:15</p>
                <p style={{fontSize:"12px"}}>
                मुख्यमंत्री ने कर्मचारियों को स्वास्थ्य बीमा योजना का लाभ प्रदान करने की मांग को किया स्वीकृत
                </p>
              </div>

            </div>

    </div>
        <div className="col-4  mt-5 p-2">
          <div className="row ">
            <div className="col">
              <img src={TN5} alt="img" style={{
                width:"10rem",
                borderRadius:"5%"
              }}/>
            </div>
            <div className="col">
              <p style={{fontSize:"11px", fontWeight:"bold", cursor:"pointer"}}>मुख्यमंत्री डॉ. यादव ने इंदौर में राज्य शासन की विकास यात्रा पर आधारित प्रदर्शनी का किया शुभारंभ</p>
              <p className="bi bi-clock text-muted text-center" style={{fontSize:"11px"}}>19/05/2025 19:35</p>
        
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <img src={TN6} alt="img" style={{width:"10rem", borderRadius:"5%"}} />
            </div>
            <div className="col">
              <p style={{fontSize:"11px", fontWeight:"bold", cursor:"pointer"}}>सांस्कृतिक राष्ट्रवाद को समर्पित थीं देवी अहिल्या बाई होल्कर : मुख्यमंत्री डॉ. यादव</p>
              <p className="bi bi-clock text-muted text-center" style={{fontSize:"11px"}}>19/05/2025 19:35</p>
        
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
            <img src={TN7} alt="img" style={{width:"10rem", borderRadius:"5%"}} />

            </div>
            <div className="col">
              <p style={{fontSize:"11px", fontWeight:"bold", cursor:"pointer"}}>मुख्यमंत्री डॉ. यादव ने पूर्व केंद्रीय मंत्री श्री अनिल माधव दवे की पुण्यतिथि पर दी श्रद्धांजलि</p>
            <p className="bi bi-clock text-muted text-center" style={{fontSize:"11px"}}>19/05/2025 19:35</p>
        
            </div>
          </div>
        </div>


        <div className="col-4">

        <div className="section-header d-flex align-items-center">
        <div className="tag">सोशल मीडिया</div>
        <div className="flex-grow-1 line mt-4">
         
        </div>
      </div>
      <h6 className='mt-3'>Tweets by CMO MP</h6>

        </div>





    </div>


{/*third page*/}


      <div className='container-fluid ms-4'style={{width:"40rem", fontSize:"9px"}}>
        <h6 className="headline text-start">मंत्री मंडल समाचार</h6>
        <div className='navbar'>
         <div className="nav-item">समस्त  </div>
         <div className="nav-item">---</div>
         <div className="nav-item">अध्यात्म विभाग</div>
         <div className="nav-item">पशुपालन एवं डेयरी विभाग</div>
         <div className="nav-item">विमानन</div>
         <div className="nav-item">आयुष</div>
         <div className="nav-item">पिछड़ा वर्ग एवं अल्पसंख्यक कल्याण</div>
         <div className="nav-item">भोपाल गैस त्रासदी राहत एवं पुनर्वास विभाग</div>

         <div className="nav-item bi bi-chevron-left border border-secondary pe-1 ps-1" ></div>
         <div className="nav-item bi bi-chevron-right border border-secondary pe-1 ps-1"style={{backgroundColor:"#f4431f", color:"white"}}> </div>
         
        </div>    
      </div>

      <div className=" container-fluid row mt-1 mb-5">
        <div className="col-4">
        <div className="container mt-3">
            </div>
            <div className='card mt-2'style={{width:"22rem"}}>
              <img src={mantriNews} alt="img" className='card-image' style={{width:"22rem"}}/>
              <div className='card-body'>
                <p style={{fontSize:"15px"}}>लोक निर्माण मंत्री और भास्कराचार्य संस्थान प्रमुख के बीच उच्च स्तरीय बैठक हुई ..</p>
                <p className="bi bi-clock text-muted text-center" style={{fontSize:"11px"}}>19/05/2025 20:15</p>
              </div>

            </div>

    </div>
        <div className="col-4 mt-2 ">
          <div className="row ">
            <div className="col">
              <img src={jalsansadhan} alt="img" style={{
                width:"10rem",
                borderRadius:"5%"
              }}/>
            </div>
            <div className="col">
              <div className='ps-2 mb-3'  style={{backgroundColor:"#f4431f", textAlign:"left", fontSize:"10px",width:"7rem",fontWeight:"bold", color:"white", borderRadius:"0 30px 30px 0"}}>लोक स्वास्थ्य यांत्रिकी</div>
              <p style={{fontSize:"11px", fontWeight:"bold", cursor:"pointer"}}>जल संरक्षण के लिए जनभागीदारी आवश्यक : मंत्री श्रीमती उइके..</p>
              <p className="bi bi-clock text-muted text-center" style={{fontSize:"11px"}}>19/05/2025 19:35</p>
        
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <img src={jalsanraksan} alt="img" style={{width:"10rem", borderRadius:"5%"}} />
            </div>
            <div className="col">
              <div className='fw-bold text-light ps-2 mb-3' style={{fontSize:"10px",textAlign:"left", backgroundColor:"#f4431f",width:"10rem", borderRadius:"0 30px 30px 0" }}>कौशल विकास एवं रोजगार विभाग</div>
              <p style={{fontSize:"11px", fontWeight:"bold", cursor:"pointer"}}>प्राकृतिक जल संसाधनों का संरक्षण और संवर्धन करना प्रत्येक नागरिक की जिम्मेदारी– ..</p>
              <p className="bi bi-clock text-muted text-center" style={{fontSize:"11px"}}>19/05/2025 19:35</p>
        
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
            <img src={jalsamasya} alt="img" style={{width:"10rem", borderRadius:"5%"}} />

            </div>
            <div className="col">
            <div className='fw-bold text-light ps-2 mb-3' style={{fontSize:"10px",textAlign:"left", backgroundColor:"#f4431f",width:"8rem", borderRadius:"0 30px 30px 0" }}>नगरीय विकास एवं आवास</div>
              <p style={{fontSize:"11px", fontWeight:"bold", cursor:"pointer"}}>जन-समस्याओं का प्राथमिकता के साथ निराकरण एवं विकास कार्यों को समयबद्धता एवं गुणव..</p>
            <p className="bi bi-clock text-muted text-center" style={{fontSize:"11px"}}>19/05/2025 19:35</p>
        
            </div>
          </div>
        </div>

        <div className="col-4 mt-2 ">
          <div className="row ">
            <div className="col">
              <img src={DptCM1} alt="img" style={{
                width:"10rem",
                borderRadius:"5%"
              }}/>
            </div>
            <div className="col">
              <div className='ps-2 mb-3'  style={{backgroundColor:"#f4431f", textAlign:"left", fontSize:"10px",width:"5rem",fontWeight:"bold", color:"white", borderRadius:"0 30px 30px 0"}}>उप मुख्यमंत्री</div>
              <p style={{fontSize:"11px", fontWeight:"bold", cursor:"pointer"}}>उप मुख्यमंत्री श्री शुक्ल से हडको सीएमडी श्री कुलश्रेष्ठ ने की सौजन्य भेंट ..</p>
              <p className="bi bi-clock text-muted text-center" style={{fontSize:"11px"}}>19/05/2025 19:35</p>
        
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <img src={DptCM2} alt="img" style={{width:"10rem", borderRadius:"5%"}} />
            </div>
            <div className="col">
              <div className='fw-bold text-light ps-2 mb-3' style={{fontSize:"10px",textAlign:"left", backgroundColor:"#f4431f",width:"5rem", borderRadius:"0 30px 30px 0" }}>उप मुख्यमंत्री</div>
              <p style={{fontSize:"11px", fontWeight:"bold", cursor:"pointer"}}>सामंजस्य एवं विभागीय सक्रियता की कमी से निर्माण कार्यों में विलंब अस्वीकार्य : उ..</p>
              <p className="bi bi-clock text-muted text-center" style={{fontSize:"11px"}}>19/05/2025 19:35</p>
        
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
            <img src={social} alt="img" style={{width:"10rem", borderRadius:"5%"}} />

            </div>
            <div className="col">
            <div className='fw-bold text-light ps-2 mb-3' style={{fontSize:"10px",textAlign:"left", backgroundColor:"#f4431f",width:"4rem", borderRadius:"0 30px 30px 0" }}>संस्कृति</div>
              <p style={{fontSize:"11px", fontWeight:"bold", cursor:"pointer"}}>सारंगपुर में गूँजा वंदेमातरम्, भव्य तिरंगा यात्रा में उमड़ा जनसैलाब..</p>
            <p className="bi bi-clock text-muted text-center" style={{fontSize:"11px"}}>19/05/2025 19:35</p>
        
            </div>
          </div>
        </div>

        </div>



    {/* black background*/}
    <div className='p-4'style={{backgroundColor:"black",color:"white"}}>
    <div className='container-fluid ms-4'style={{width:"60rem", fontSize:"9px",}}>
        <h6 className="headline text-start" style={{color:"white !impotant"}}>मंत्री मंडल समाचार</h6>
        <div className='navbar'>
         <div className="nav-item">समस्त  </div>
         <div className="nav-item">अनुपपुर</div>
         <div className="nav-item">अलीराजपूर</div>
         <div className="nav-item">अशेाक नगर</div>
         <div className="nav-item">आगर मालवा</div>
         <div className="nav-item">इन्दौर</div>
         <div className="nav-item">उज्जैन</div>
         <div className="nav-item">उमरिया</div>
         <div className="nav-item">कटनी</div>
         <div className="nav-item">खण्डवा</div>
         <div className="nav-item">खरगोन</div>
         <div className="nav-item">गुना</div>
         <div className="nav-item">ग्वालियर</div>
         <div className="nav-item">छतरपुर</div>
         <div className="nav-item">छिन्दवाडा</div>
         <div className="nav-item">जबलपुर</div>
         <div className="nav-item">झाबुआ</div>
         <div className="nav-item">टीकमगढ़</div>
         <div className="nav-item">डिण्डोरी</div>
         <div className="nav-item">दतिया</div>
         <div className="nav-item">दमोह</div>
       <div className="nav-item bi bi-chevron-right border border-secondary pe-1 ps-1"style={{backgroundColor:"#f4431f", color:"white"}}> </div>
         
        </div>    
      </div>

      <div className=" container-fluid row mt-1 mb-5">
        <div className="col-4">
        <div className="container mt-3">
            </div>
            <div className='card mt-2'style={{width:"22rem", color:"white", backgroundColor:"black"}}>
              <img src={mantriNews} alt="img" className='card-image' style={{width:"22rem"}}/>
              <div className='card-body'>
                <p style={{fontSize:"15px"}}>लोक निर्माण मंत्री और भास्कराचार्य संस्थान प्रमुख के बीच उच्च स्तरीय बैठक हुई ..</p>
                <p className="bi bi-clock  text-center" style={{fontSize:"11px", color:"gray"}}>19/05/2025 20:15</p>
              </div>

            </div>

    </div>
        <div className="col-4 mt-2 ">
          <div className="row ">
            <div className="col">
              <img src={jalsansadhan} alt="img" style={{
                width:"10rem",
                borderRadius:"5%"
              }}/>
            </div>
            <div className="col">
              <div className='ps-2 mb-3'  style={{backgroundColor:"#f4431f", textAlign:"left", fontSize:"10px",width:"7rem",fontWeight:"bold", color:"white", borderRadius:"0 30px 30px 0"}}>लोक स्वास्थ्य यांत्रिकी</div>
              <p style={{fontSize:"11px", fontWeight:"bold", cursor:"pointer"}}>जल संरक्षण के लिए जनभागीदारी आवश्यक : मंत्री श्रीमती उइके..</p>
              <p className="bi bi-clock  text-center" style={{fontSize:"11px", color:"gray"}}>19/05/2025 20:15</p>
        
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <img src={jalsanraksan} alt="img" style={{width:"10rem", borderRadius:"5%"}} />
            </div>
            <div className="col">
              <div className='fw-bold text-light ps-2 mb-3' style={{fontSize:"10px",textAlign:"left", backgroundColor:"#f4431f",width:"10rem", borderRadius:"0 30px 30px 0" }}>कौशल विकास एवं रोजगार विभाग</div>
              <p style={{fontSize:"11px", fontWeight:"bold", cursor:"pointer"}}>प्राकृतिक जल संसाधनों का संरक्षण और संवर्धन करना प्रत्येक नागरिक की जिम्मेदारी– ..</p>
              <p className="bi bi-clock  text-center" style={{fontSize:"11px", color:"gray"}}>19/05/2025 20:15</p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
            <img src={jalsamasya} alt="img" style={{width:"10rem", borderRadius:"5%"}} />

            </div>
            <div className="col">
            <div className='fw-bold text-light ps-2 mb-3' style={{fontSize:"10px",textAlign:"left", backgroundColor:"#f4431f",width:"8rem", borderRadius:"0 30px 30px 0" }}>नगरीय विकास एवं आवास</div>
              <p style={{fontSize:"11px", fontWeight:"bold", cursor:"pointer"}}>जन-समस्याओं का प्राथमिकता के साथ निराकरण एवं विकास कार्यों को समयबद्धता एवं गुणव..</p>
              <p className="bi bi-clock  text-center" style={{fontSize:"11px", color:"gray"}}>19/05/2025 20:15</p>
        
            </div>
          </div>
        </div>

        <div className="col-4 mt-2 ">
          <div className="row ">
            <div className="col">
              <img src={DptCM1} alt="img" style={{
                width:"10rem",
                borderRadius:"5%"
              }}/>
            </div>
            <div className="col">
              <div className='ps-2 mb-3'  style={{backgroundColor:"#f4431f", textAlign:"left", fontSize:"10px",width:"5rem",fontWeight:"bold", color:"white", borderRadius:"0 30px 30px 0"}}>उप मुख्यमंत्री</div>
              <p style={{fontSize:"11px", fontWeight:"bold", cursor:"pointer"}}>उप मुख्यमंत्री श्री शुक्ल से हडको सीएमडी श्री कुलश्रेष्ठ ने की सौजन्य भेंट ..</p>
              <p className="bi bi-clock  text-center" style={{fontSize:"11px", color:"gray"}}>19/05/2025 20:15</p>
        
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <img src={DptCM2} alt="img" style={{width:"10rem", borderRadius:"5%"}} />
            </div>
            <div className="col">
              <div className='fw-bold text-light ps-2 mb-3' style={{fontSize:"10px",textAlign:"left", backgroundColor:"#f4431f",width:"5rem", borderRadius:"0 30px 30px 0" }}>उप मुख्यमंत्री</div>
              <p style={{fontSize:"11px", fontWeight:"bold", cursor:"pointer"}}>सामंजस्य एवं विभागीय सक्रियता की कमी से निर्माण कार्यों में विलंब अस्वीकार्य : उ..</p>
              <p className="bi bi-clock  text-center" style={{fontSize:"11px", color:"gray"}}>19/05/2025 20:15</p>
        
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
            <img src={social} alt="img" style={{width:"10rem", borderRadius:"5%"}} />

            </div>
            <div className="col">
            <div className='fw-bold text-light ps-2 mb-3' style={{fontSize:"10px",textAlign:"left", backgroundColor:"#f4431f",width:"4rem", borderRadius:"0 30px 30px 0" }}>संस्कृति</div>
              <p style={{fontSize:"11px", fontWeight:"bold", cursor:"pointer"}}>सारंगपुर में गूँजा वंदेमातरम्, भव्य तिरंगा यात्रा में उमड़ा जनसैलाब..</p>
              <p className="bi bi-clock  text-center" style={{fontSize:"11px", color:"gray"}}>19/05/2025 20:15</p>
        
            </div>
          </div>
        </div>

        </div>
    </div>

{/*----------------------------------------*/}

<div className='container-fluid pt-5'> 
<div className="gallery-container">
      <span className="corner-symbol"></span>
      <span className="gallery-text">फोटो गैलरी</span>
    </div>
  <div className="container-fluid row">
    <div className='col-8'>
      <ImageSlider />
    </div>
    <div className="col-4">
        <div className="section-header d-flex align-items-center">
        <div className="tag">सोशल मीडिया</div>
        <div className="flex-grow-1 line mt-4">
         
        </div>
      </div>
      <h6 className='mt-3'>Tweets by JansamparkMP</h6>

        </div>

  </div>
</div>

{/*video*/}

<div className='container-fluid pt-5 mb-4'>
          <div className='d-flex justify-content-between'>
             <div className='fw-bold'>वीडियो गैलरी</div>
            <div className="flex-grow-1 line mt-3 ms-2" style={{width:"60rem"}}></div>
            </div>
            <VideoSlider/>
          </div>

          <div className='container-fluid d-flex justify-content-center me-5 ms-5 '>
            <img src={company} alt=""  className='me-5  w-100' />
          </div>


          <div className='container-fluid p-3' style={{
            background: 'linear-gradient(to right,rgb(150, 0, 0), #fbb034)'
            
          }}>
            <span className='footerIcon fs-4 ms-5  text-white bi bi-facebook'></span>
            <span className='footerIcon fs-4 ms-3  text-white bi bi-twitter-x'></span>
            <span className='footerIcon fs-4 ms-3  text-white bi bi-youtube'></span>
            <span className='footerIcon fs-4 ms-3  text-white bi bi-instagram'></span>
            <span className='footerIcon fs-4 ms-3  text-white bi bi-linkedin'></span>
            <span className='footerIcon fs-4 ms-3  text-white bi bi-wifi'></span>
            </div>      

          <div className='container-fluid bg-dark text-light'>
            <FooterPage/>
          </div>
  </div>
  );
};

export default LandingPage;
