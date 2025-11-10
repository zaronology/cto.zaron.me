"use client";
import React, { useState, useEffect } from "react";
import NewsLetterForm from "./NewsLetterForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane as icon } from "@awesome.me/kit-d469f7d4aa/icons/duotone/light";

const url = "/api/newsletter";

const SidebarNewsletter = () => {
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    const tolakBtns = document.querySelectorAll(".tolak-btn");

    if (tolakBtns.length > 0) {
      tolakBtns.forEach((btn) => {
        const handleMouseEnter = (e) => {
          const parentOffset = btn.getBoundingClientRect(),
            relX = e.pageX - window.scrollX - parentOffset.left,
            relY = e.pageY - window.scrollY - parentOffset.top;

          const span = btn.querySelector("span");
          if (span) {
            span.style.top = relY + "px";
            span.style.left = relX + "px";
          }
        };

        const handleMouseOut = (e) => {
          const parentOffset = btn.getBoundingClientRect(),
            relX = e.pageX - window.scrollX - parentOffset.left,
            relY = e.pageY - window.scrollY - parentOffset.top;

          const span = btn.querySelector("span");
          if (span) {
            span.style.top = relY + "px";
            span.style.left = relX + "px";
          }
        };

        btn.addEventListener("mouseenter", handleMouseEnter);
        btn.addEventListener("mouseout", handleMouseOut);

        // Clean up event listeners on component unmount
        return () => {
          btn.removeEventListener("mouseenter", handleMouseEnter);
          btn.removeEventListener("mouseout", handleMouseOut);
        };
      });
    }
  }, [isMount]);

  useEffect(() => {
    setIsMount(true);
  }, []);
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
        setStatus("success");
        setMessage(data.message || "You have successfully subscribed!");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("An unexpected error occurred. Please try again later.");
    }
  };
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const formObject = Object.fromEntries(formData.entries());
    if (formObject.email_address.indexOf("@") == -1) {
      setStatus("error");
      setMessage("Please Enter Vaild Email Address");
    } else {
      setStatus("sending");
      handleSubmit(formObject);
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className={`sidebar-one__newsletter mc-form`}>
        <input type="text" name="email_address" placeholder="Email address" />
        <input type="hidden" name="source" value="newsletter_cta" />
        <>
          <button type="submit">
            <FontAwesomeIcon icon={icon} />
            <span className="sr-only">submit</span>
          </button>
        </>
      </div>
      <div className="mc-form__response">
        {status === "sending" && <div className="sending">sending...</div>}
        {status === "error" && <div className="error"> {message}</div>}
        {status === "success" && <div>Subscribed !</div>}
      </div>
    </form>
  );
};

export default SidebarNewsletter;
