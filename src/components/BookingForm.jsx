'use client'
import React, { Suspense, useEffect, useState } from 'react';
import { FormControl, FormGroup, FormSelect, FormLabel } from 'react-bootstrap';
import AOS from "aos";
import BookingBtn from './BookingBtn';
import convertKitData from "@/data/ConvertKitData";
import { InlineWidget } from "react-calendly";
import Preloader from './Preloader';


const BookingForm = () => {
    const btnSubmitOne = <BookingBtn />;
    const [mounted, setMounted] = useState(false);
    const [nameStatus, setNameStatus] = useState("");
    const [emailStatus, setEmailStatus] = useState("");
    const [companyStatus, setCompanyStatus] = useState("");
    const [challengesStatus, setChallengesStatus] = useState("");
    const [btnSubmit, setbtnSubmit] = useState(btnSubmitOne);
    const [formFadeOut, setFormFadeOut] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [prefillData, setPrefillData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        name: '',
    });
    const url = "/api/booking";
    useEffect(() => {
        setMounted(true);
    }, []);
    useEffect(() => {
        if (mounted) {
            setTimeout(() => {
                AOS.refresh();
            }, 400)
        }
    }, [mounted]);

    if (!mounted) {
        return null;
    }
    const handleSubmit = async (formData) => {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setFormFadeOut(true);
                setTimeout(() => {
                    setFormSubmitted(true);
                }, 500);
            } else {
                setFormFadeOut(true);
                setTimeout(() => {
                    setFormSubmitted(true);
                }, 500);
            }
        } catch (error) {
            setFormFadeOut(true);
            setTimeout(() => {
                setFormSubmitted(true);
            }, 500);
        }
    };

    const handleStoreValue = (evt)=>{
        localStorage.setItem(evt.target.name, evt.target.value);
    }



    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        setbtnSubmit(<><span className="button-loader"></span></>);
        const formData = new FormData(evt.target);
        const formObject = Object.fromEntries(formData.entries());
        let hasErrors = false;
        console.log(formObject);
        if (formObject.name == "") { setNameStatus("error"); hasErrors = true; } else { setNameStatus("sending"); }
        if (formObject.email_address.indexOf("@") == -1) { setEmailStatus("error"); hasErrors = true; } else { setEmailStatus("sending"); }
        if (formObject.company_name == "") { setCompanyStatus("error"); hasErrors = true; } else { setCompanyStatus("sending"); }
        if (hasErrors) { setbtnSubmit(btnSubmitOne) } else {
            setPrefillData({ email: formObject.email_address, name: formObject.name, firstName: formObject.name.split(' ')[0], lastName: formObject.name.split(' ')[1] }); 
            setChallengesStatus("sending"); 
            handleSubmit(formObject);
            localStorage.setItem('selected_need', formObject.tech_challenges);
        }
    }
    const stored_email = localStorage.getItem('email_address') ? localStorage.getItem('email_address') : "";
    const stored_name = localStorage.getItem('name') ? localStorage.getItem('name') : "";
    const stored_company_name = localStorage.getItem('company_name') ? localStorage.getItem('company_name') : "";
    const stored_tech_challenges = localStorage.getItem('tech_challenges') ? localStorage.getItem('tech_challenges') : "";

    return (<>
        <div className={`booking-container ${formFadeOut ? 'set-height' : ''}`}>
            {!formSubmitted ? (<form className={`booking-frm m-auto ${formFadeOut ? 'form-fade-out' : ''}`} onSubmit={handleFormSubmit} data-aos='fade-left' data-aos-delay="200">
                <h2>Scale With Confidence</h2>
                <h3>Join Brands That Took Action</h3>
                <FormGroup className=' mb-3'>
                    <FormLabel htmlFor="bookingFormName">Name<sup>*</sup></FormLabel>
                    <FormControl id='bookingFormName' onBlur={handleStoreValue} className={`${nameStatus}`} name="name" defaultValue={stored_name} type='text' placeholder='Your Name' />
                </FormGroup>
                <div className='form-group mb-3'>
                    <FormLabel htmlFor="bookingFormEmail">Email<sup>*</sup></FormLabel>
                    <FormControl id='bookingFormEmail' onBlur={handleStoreValue} className={`${emailStatus}`} name="email_address" defaultValue={stored_email} type='text' placeholder='Your Best Email Address' />
                </div>
                <div className='form-group mb-3'>
                    <FormLabel htmlFor="bookingFormCompany">Company Name<sup>*</sup></FormLabel>
                    <FormControl id='bookingFormCompany' onBlur={handleStoreValue} className={`${companyStatus}`} name="company_name" defaultValue={stored_company_name} type='text' placeholder='Company Name' />
                </div>
                <div className='form-group mb-3'>
                    <FormLabel htmlFor="tech-challenges">What's Your Biggest Challenge Right Now?<sup>*</sup></FormLabel>
                    <FormSelect id="tech-challenges" onChange={handleStoreValue} name="tech_challenges" className={`${challengesStatus}`} defaultValue={stored_tech_challenges}>
                        {
                            convertKitData.tags.map((item, idx) => item.formData ? (<option key={idx} value={item.formData.value} >{item.formData.text}</option>) : null)
                        }
                    </FormSelect>
                </div>
                <div className='form-group mt-4 text-center'>
                    {btnSubmit}
                </div>
                <div>
                    <p className='disclaimer'>By submitting this form, you agree to receive communications from us regarding our services. We respect your privacy and will never share your information with third parties. You can unsubscribe at any time.</p>
                </div>
                <input type='hidden' name='source' value='booking_form' />
            </form>) : null}
            {formSubmitted && (
                <div className="calendar-container">
                    <Suspense fallback={<Preloader />}>
                        <InlineWidget
                            url="https://calendly.com/zaronology/clarity-call"
                            pageSettings={{
                                backgroundColor: '0f1a33',
                                hideEventTypeDetails: true,
                                hideLandingPageDetails: true,
                                primaryColor: 'ff5334',
                                textColor: 'ffd700'
                            }}
                            styles={{
                                height: '1000px'
                            }}
                            prefill={prefillData}
                        />
                    </Suspense>
                </div>
            )}
        </div>
    </>);

}

export default BookingForm;