import React from 'react'
import "../../App.css";

const FooterPage = () => {
  return (
    <div className='' >
      
      <div className="container py-4">
        <div className="row mt-3">
          <div className="col-md-3">
            <h5 className="fw-bold mb-3 fs-4">महत्वपूर्ण वेब लिंक</h5>
            <ul className="list-unstyled small">
              <li className='mb-2 footerLi'>• विभागीय वार्षिक प्रशासनिक प्रतिवेदन</li>
              <li className='mb-2 footerLi'>• अचल संपत्ति का विवरण</li>
              <li className='mb-2 footerLi'>• अधिसूचना (सूचना के अधिकार)</li>
              <li className='mb-2 footerLi'>• जनसंपर्क विभाग 25 बिंदु मैन्युअल</li>
              <li className='mb-2 footerLi'>• राजपत्रित अधिकारियों की पदस्थ सूची</li>
              <li className='mb-2 footerLi'>• तृतीय/चतुर्थ श्रेणी के कर्मचारियों की पदस्थ सूची</li>
            </ul>
          </div>

          <div className="col-md-3 mt-5">
            <ul className="list-unstyled small mt-4">
              <li className='mb-2 footerLi'>• मध्यप्रदेश बजट</li>
              <li className='mb-2 footerLi'>• विज्ञापन संबंधित</li>
              <li className='mb-2 footerLi'>• प्रदर्शन विज्ञापन</li>
            </ul>
          </div>
          <div className="col-md-3 mt-5">
            <ul className="list-unstyled small mt-4">
            <li className='mb-2 footerLi'>• अधिमान्यता ऑनलाइन</li>
            <li className='mb-2 footerLi'>• अधिमान्यता संबंधित</li>
            <li className='mb-2 footerLi'>• पत्रकार बीमा योजना</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="fw-bold mb-3">संपर्क करे</h5>
            <p className="mb-2 footerLi">जनसंपर्क संचालनालय</p>
            <p className="mb-2 footerLi">टैगोर मार्ग, बाणगंगा</p>
            <p className="mb-2 footerLi">भोपाल, मध्यप्रदेश - 462003</p>
            <p className="mb-2 footerLi">Phone No. - 0755-4096300</p>
            <p className="mb-2 footerLi">Email - cprnews09@gmail.com</p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default FooterPage;