import React, { useEffect } from "react";

const MatrixBackground = () => {
  useEffect(() => {
    const container = document.querySelector(".matrix-container");
    const chars = "ZARONOLOGY1010101010101010"; // Letters to use
    const letterCount = 50; // Controls how many letters appear at once

    function createLetter() {
      const letter = document.createElement("span");
      letter.classList.add("matrix-letter");
      letter.textContent = chars[Math.floor(Math.random() * chars.length)];

      // Set random position & delay
      letter.style.left = Math.random() * 100 + "vw";
      letter.style.animationDuration = Math.random() * 30 + 20 + "s"; // Slow fall (6-10s)
      letter.style.animationDelay = Math.random() * .1 + "s";

      // Random color in the orange-yellow range
      const hue = 10 + Math.random() * (51 - 10);
      letter.style.color = `hsl(${hue}, 100%, ${45 + Math.random() * 10}%)`;

      container.appendChild(letter);

      // Remove letter after it falls
      setTimeout(() => {
        letter.remove();
      }, 10000); // Matches longest animation duration
    }

    // Generate new letters at a steady pace
    const interval = setInterval(createLetter, 10);

    return () => clearInterval(interval); // Cleanup function
  }, []);

  return <div className="matrix-container"></div>;
};

export default MatrixBackground;