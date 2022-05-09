import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import React, { useState } from 'react'
import { useEffect } from 'react'
import Inter from './Inter'
const axiox = require('axios');



function Home() {
    const [data, setData] = useState([]);
    const [visibal, setVisibal] = useState(5);


    const apiFunc =async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=4583328f31604630a0ce81abaf0821ab`;
        axios.get(url).then((response) => {
            setData(response.data.articles);
        }).catch((e) => {
            console.log(e);
        })
        
    }
    const showItem = () => {

        setVisibal(visibal + 5)
    }
    useEffect(() => {

        apiFunc();

    }, [])
    return (
        <>
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
                        data.slice(0, visibal).map((ele, index) => {
                            return (<Inter data={ele}></Inter>)
                        })

                    }

                </div>
                {visibal <= data.length - 1 ? (
                    <div className='btn_div'>
                        <button className='btn' onClick={showItem} >Load More</button>
                    </div>
                ) : (<></>)
                }
            </div>
             
        </>
    )
}

export default Home