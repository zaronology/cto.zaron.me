"use client";
import React from "react";

const BookingModal = ({ onClose, onConfirm }) => {
    return (
        <div
            className="modal fade bg-dark"
            id="bookingModal"
            tabIndex="-1"
            aria-labelledby={`bookingModalLabel`}
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={`bookingModalLabel`}>
                            Let’s Get Started—Schedule Your Clarity Call
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={onClose}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div
                            style={{
                                height: "700px",
                            }}
                        >
                            <iframe
                                src="https://calendly.com/zaronology/clarity-call?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=ff5334"
                                width="100%"
                                height="100%"
                                allow="fullscreen"
                            ></iframe>
                        </div>
                    </div>
                    <div className="modal-footer">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;