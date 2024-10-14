import "./ContactData.css";

const onClickButton = (e) => {
  // submit 이벤트 기본 동작 방지
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  if (nameInput.value === "") {
    alert("이름을 입력해주세요.");
    nameInput.focus();
    return;
  } else if (emailInput.value === "") {
    alert("이메일을 입력해주세요.");
    emailInput.focus();
    return;
  } else if (messageInput.value === "") {
    alert("메시지를 입력해주세요.");
    messageInput.focus();
    return;
  }

  alert("메시지가 전송되었습니다.");

  // 입력 필드 초기화
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
};

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
        <label htmlFor="name">이름:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">이메일:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">메시지:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit" onClick={onClickButton}>
          보내기
        </button>
      </form>
    </div>
  );
};

export default ContactData;
