import "./ContactData.css";

const ContactData = () => {
  return (
    <div className="contactData">
      <h2>Contact Me</h2>
      <div className="contact_info">
        <p>📞 Phone: 010-0000-5575</p>
        <p>📧 Email: ysjjw2003@naver.com</p>
        <p>📍 Location: Seoul</p>
      </div>
      <form className="contact_form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactData;
