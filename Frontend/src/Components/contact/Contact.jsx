import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css"

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    // Optionally reset the form
    e.target.reset();
  };

  return (
    <div className="contact-container">
      <h1 className="contact-heading">📞 Contact Us</h1>
      <p className="contact-info">We'd love to hear from you!</p>

      <div className="contact-details">
        <p>
          <strong>Phone:</strong> +91 6778393903
        </p>
        <p>
          <strong>Email:</strong> support@cravekart.com
        </p>
        <p>
          <strong>Address:</strong> 101 CraveKart Tower, Foodie Street, Indore,
          MP
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message..." rows="5" required></textarea>
        <button type="submit"> Send Message</button>
      </form>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
