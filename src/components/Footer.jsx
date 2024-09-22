import React from 'react'
import img2 from "../assets/images/img2.png"

const Footer = () => {
  return (

      <footer className="bg-black py-5 text-white">
            <div className="mp sContainer">
              <div className="container-fluid">
                <div className="flex flex-wrap">

                  {/* Left Column */}
                  <div className="flex w-1/2">
                    <div className="max-w-[450px]">
                      <span>
                        Enroll now to take actionable steps and get more serious about advancing your career with our expert guidance, comprehensive resources, and a supportive community dedicated to your success.
                      </span>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className='grid w-1/2'>
                    <div className="pb-5">
                      <p className="p-0 m-0">sunmence@com.ng</p>
                      <p className="p-0 m-0">0701 0015 366</p>
                    </div>
                    {/* Location Section */}
                    <div className="py-5 border-t border-gray-500">
                      <div className="row">
                        <div className="col-6">
                          <p>Nigeria</p>
                        </div>
                        <div className="col-6">
                          <p>Suntoy Building Adjacent</p>
                          <p>Winners Chapel Along</p>
                          <p>Ogbomso-Ilorin Old Road</p>
                          <p>Ogbomoso Oyo State</p>
                        </div>
                      </div>
                    </div>
                    {/* Social Media Links Section */}
                    <div className="py-5 border-t border-gray-500">
                      <div className="row">
                        <div className="col-6">
                          <p>Follow</p>
                        </div>
                        <div className="col-6">
                          <a href="https://www.instagram.com/sunmence_ng?igsh=c3hmMWdkNG1xb3Q4">
                            <p>Instagram</p>
                          </a>
                          <a href="https://x.com/sunmenceng?t=RNzZTahjujNodiLgzIeRCA&s=09">
                            <p>Twitter</p>
                          </a>
                          <a href="https://wa.me/2347010015366?text=Hello%2C%20I%20am%20interested%20in%20the%20software%20engineering%20course%2C%20I%20will%20save%20your%20contact%20as%20Buggy%2C%20save%20mine%20as">
                            <p>WhatsApp</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Footer Bottom Section */}
              <div className="pt-5 border-t border-gray-500 text-neutral-600">
                <div className="grid grid-cols-3 text-start">
                  <div className="col-span-1">
                    <small>&copy;Copyright 2024 @ sunmence</small>
                  </div>
                  <div className="col-span-1">
                    <img src={img2} alt="..." className='w-1/2 mx-auto' />
                  </div>
                  <div className="col-span-1 text-end">
                    <small>Policy privacy</small>
                  </div>
                </div>
              </div>
            </div>

      </footer>

  )
}

export default Footer