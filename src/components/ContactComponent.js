// ContactComponent.js
const ContactComponent = {
  template: `
    <div class="section active vertical-center">
      <div class="back-button">
        <router-link to="/" class="nav-button">← Back</router-link>
      </div>
      <h1 class="name">Contact</h1>
      <div class="contact-content">
        <p>Get in touch with me through any of these channels:</p>
        <div class="contact-info">
          <div class="contact-item">
            <strong>Email: </strong>seunghye[AT]andrew[dot]cmu[dot]edu
          </div>
          <div class="contact-item">
            <strong>LinkedIn: </strong>
            <a href="https://www.linkedin.com/in/seunghyeok-lee/"
              >linkedin.com/in/seunghyeok-lee</a
            >
          </div>
          <div class="contact-item">
            <strong>GitHub: </strong>
            <a href="https://github.com/shstevelee">github.com/shstevelee</a>
          </div>
        </div>
      </div>
    </div>
  `,
};

export default ContactComponent;
