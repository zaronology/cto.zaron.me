'use client';
import React from 'react';
import AOS from "aos";
import clientLogoData from "@/data/ClientLogoGridData";
import Image from 'next/image';



const ClientLogoGrid = () => {

    const data = clientLogoData;
    return (
        <>
            <div className='client-logo-grid' data-aos='fade-up' data-aos-delay="200">
                <div className='client-logo-grid__inner'>
                    <div>
                        <Image src={data.client1.image} alt={data.client1.alt} />
                    </div>
                    <div>
                        <Image src={data.client2.image} alt={data.client1.alt} />
                    </div>
                    <div>
                        <Image src={data.client3.image} alt={data.client1.alt} />
                    </div>
                </div>
                <div className='client-logo-grid__inner'>
                    <div>
                        <Image src={data.client4.image} alt={data.client1.alt} />
                    </div>
                    <div>
                        <Image src={data.client5.image} alt={data.client1.alt} />
                    </div>
                    <div>
                        <Image src={data.client6.image} alt={data.client1.alt} />
                    </div>
                </div>
            </div>
        </>
    );

}

export default ClientLogoGrid;