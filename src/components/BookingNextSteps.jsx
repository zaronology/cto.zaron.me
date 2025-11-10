"use client";
import React, { useEffect, useState } from "react";
import selectedNeedData from "@/data/SelectedNeedData";
import dynamic from "next/dynamic";
import JarallaxImage from "./JarallaxImage";
import matrixBkgd from "@/assets/images/matrix-bkgd-og-ls.jpg";
import NextStepsBlocks from "./NextStepsBlocks";
import { useSearchParams } from "next/navigation";
const Jarallax = dynamic(() => import("@/components/Jarallax"), {
  ssr: false,
});

const BookingNextSteps = () => {
  const [mounted, setMounted] = useState(false);
  const searchParams = useSearchParams();
  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined" && window.gtag) {
      const eventID = searchParams.get("event_type_uuid");
      const fullName = searchParams.get("invitee_full_name");
      const email = searchParams.get("invitee_email");
      if (eventID) {
        window.gtag("event", "conversion_event_book_appointment", {
          event_category: "engagement",
          event_label: "Appointment Confirmation",
          value: 1,
          event_id: eventID,
          user_name: fullName,
          user_email: email,
        });
      }
    }
  }, []);
  useEffect(() => {}, [mounted]);

  if (!mounted) {
    return null;
  }
  const need_data = selectedNeedData;
  const selected_need = localStorage.getItem("selected_need")
    ? localStorage.getItem("selected_need")
    : "tech-not-working";
  const intro_text = need_data[selected_need]?.intro;
  return (
    <section className="booking-next-steps">
      <Jarallax
        className="matrix-background-img-container-img"
        speed={0.3}
        imgPosition="center cnter"
      >
        <JarallaxImage src={matrixBkgd.src} />
      </Jarallax>
      <div className="why-zaronology-inner">
        <NextStepsBlocks />
        <div className="sec-title right-side text-center">
          <h6 className="sec-title__tagline">
            <span className="sec-title__tagline__left"></span> What's Next?
            <span className="sec-title__tagline__right"></span>
          </h6>
          <h3 className="sec-title__title">
            Prepare for an Insightful and Impactful Conversation
          </h3>
          <p>{intro_text}</p>
        </div>
      </div>
    </section>
  );
};

export default BookingNextSteps;
