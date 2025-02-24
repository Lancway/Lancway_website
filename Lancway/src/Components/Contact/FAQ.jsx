import { useState } from "react";
import "./ContactUs.css";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a variety of services that include web development, mobile app development, machine learning solutions, business intelligence, and Power BI dashboards. Our team works with clients to tailor these services to their specific needs, ensuring that each project is unique and addresses key business challenges effectively.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "The duration of a project depends on its complexity and scope. A standard web development project typically takes around 2-4 weeks, while more complex solutions like custom mobile applications or machine learning models can take 2-3 months.",
  },
  {
    question: "What makes your services unique?",
    answer:
      "Our services stand out due to our dedication to providing custom, scalable solutions designed to fit the exact needs of our clients. We focus on clean, efficient code, modern design trends, and integrating the latest technologies.",
  },
  {
    question: "Can I see some examples of your work?",
    answer:
      "Absolutely! We have a portfolio that showcases a wide range of projects we’ve worked on. You can explore our portfolio section to see the results of our past collaborations.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, we provide post-launch support to ensure that your website or application continues to run smoothly. This includes bug fixes, software updates, and technical assistance for any issues that arise.",
  },
  {
    question: "What technologies do you use for development?",
    answer:
      "We use modern technologies such as React, Angular, Node.js, Python, MySQL, MongoDB, and more. We also implement machine learning solutions and specialize in Power BI and Tableau for data visualization.",
  },
  {
    question: "What is the cost of a project?",
    answer:
      "The cost of a project varies based on its scope, complexity, and the resources required. We provide a transparent pricing structure and a personalized quote based on your needs.",
  },
  {
    question: "How do I get started with Lancway?",
    answer:
      "Getting started with Lancway is simple! You can contact us through the website's contact form or send us an email detailing your project needs. We'll then schedule a consultation to discuss your requirements.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq section" data-aos="fade-up">
      <div className="container">
        {/* FAQ Header */}
        <div className="section-header text-center">
          <h2>FAQ</h2>
          <p style={{ color: "white" }}>
            Explore answers to commonly asked questions about our services.
          </p>
        </div>

        <div className="row gy-4">
          {/* FAQ Introduction */}
          <div className="col-lg-4">
            <div className="faq-intro" data-aos="fade-right">
              <h3>
                Frequently Asked <strong>Questions</strong>
              </h3>
              <p>Got questions? Browse through the FAQs below.</p>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="col-lg-8">
            <div className="faq-container">
              {faqData.map((item, index) => (
                <div key={index} className={`faq-item ${activeIndex === index ? "faq-active" : ""}`}>
                  <h3 onClick={() => toggleFAQ(index)}>
                    <span className="num">{index + 1}.</span>
                    <span className="faq-question">{item.question}</span>
                    <i
                      className={`faq-toggle bi ${
                        activeIndex === index ? "bi-chevron-up" : "bi-chevron-down"
                      }`}
                    ></i>
                  </h3>
                  <div
                    className="faq-content"
                    style={{
                      maxHeight: activeIndex === index ? "500px" : "0px",
                      overflow: "hidden",
                      transition: "max-height 0.3s ease-in-out",
                    }}
                  >
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
