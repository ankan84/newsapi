import axios from 'axios';
import Navbar from './Navbar';

import React, { useState } from 'react'
import { useEffect } from 'react'
import Inter from './Inter'
import articles from './api';


function Home() {
    const [data, setData] = useState(articles);
    
    const [visibal, setVisibal] = useState(5);
    
    
    const showItem = () => {

        setVisibal(visibal + 5)
    }
  
    return (
        
            <div className="main_div">
                <Navbar></Navbar>

                <div className="container-fluid main">
                    <div className="ads">
                        <div className="text">
                            <h6>For the best experience use <b>inshorts</b> app on your smartphone</h6>
                        </div>
                        <div className="items">
                            <a href="https://apps.apple.com/us/app/news-in-shorts/id892146527" target="_blank"><img src="./images/appstore.png" alt="" className='appstore' /></a>
                            <a href="https://play.google.com/store/apps/details?id=com.nis.app&referrer=utm_source%3DNews%2520In%2520Shorts%2520Website" target="_blank"><img src="./images/playstore.png" alt="" className='playstore' /></a>
                        </div>
                    </div>
                    {
                      data?(
                          <>
                              {
                                  
                        data.slice(0, visibal).map((ele)=>{
                                 return(
                                    <Inter my_data={ele}></Inter>
                                      )
                                  }) 
                              }
                          </>
                      ):(<></>)
                      
                    }



                </div>
                {visibal <= articles.length - 1 ? (
                    <div className='btn_div'>
                        <button className='btn' onClick={showItem} >Load More</button>
                    </div>
                ) : (<></>)
                }
            </div>
             
        
    )
}

export default Home