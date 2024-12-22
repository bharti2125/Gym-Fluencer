import React, { useState } from "react";

function Contacts() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do i log my workouts?",
      answer:
        "You can easily log your workouts by selecting the exercise, entering the duration, and tracking your reps.",
    },
    {
      question: "Can i track my calories burned?",
      answer:
        "Yes, you can track calories burned through the application integrated tracking features.",
    },
    {
      question: "Is this application suitable for beginners?",
      answer:
        "absolutely! GymFluencer is designed to be user-friendly and suitable for all fitness levels.",
    },
    {
      question: "What features does the application offer?",
      answer:
        "The app offers workout logging, rep counting, calorie tracking, and progress reviews.",
    },
    {
      question: "How can i reset my password?",
      answer:
        'You can reset your password by going to the login screen and selecting "Forget Password."',
    },
  ];

  // const toggleFaq = (index) => {
  //   setActiveIndex((prev) => ({
  //     ...prev,
  //     [index]: !prev[index],
  //   }));
  // };
  const toggleFaq = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <section id="contacts" className="faq-container">
      <div className="logo-left"></div>
      <div className="logo-right"></div>
      <div className="faq-content">
        <h1 className="faq-que">
          FREQUENTLY
          <span style={{ display: "block" }}> ASKED QUESTIONS</span>{" "}
        </h1>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <span
                  className={`faq-icon
                  ${activeIndex === index ? "rotated" : ""}`}
                >
                  <i className="bi bi-plus-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      class="bi bi-plus-lg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                      />
                    </svg>
                  </i>
                </span>
                {faq.question}
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contacts;
