'use client'
import React from 'react';
import AOS from "aos";


const BookingBtn = ()=>{


    return (<><button className="zaron-btn-two lgtxt" type='submit' data-aos='fzoom-in-up' data-aos-delay="400">
        <span className="zaron-btn-two__left-star yellow"></span>
        <span>Book My Clarity Call now<i className="tolak-icons-two-arrow-right-short"></i></span>
        <span className="zaron-btn-two__right-star yellow"></span>
    </button></>);
}

export default BookingBtn;