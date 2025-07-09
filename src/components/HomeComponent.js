// HomeComponent.js
const HomeComponent = {
  template: `
    <div class="section active vertical-center">
      <h1 class="name">Seunghyeok Lee</h1>
      <p class="intro">
        Hi! I'm Seunghyeok, a Sophomore at Carnegie Mellon University studying
        Electrical and Computer Engineering. My interests are in Classical and
        Flamenco Guitar, Weightlifting, Language Learning, Economics, Consumer
        Electronics, Computer Memory, Nanofabrication, ASICs and FPGAs
      </p>

      <div class="nav-buttons">
        <router-link to="/projects" class="nav-button">Projects</router-link>
        <router-link to="/events" class="nav-button">Events</router-link>
        <router-link to="/arts" class="nav-button">Arts</router-link>
        <router-link to="/certificates" class="nav-button">Certificates</router-link>
        <router-link to="/about" class="nav-button">About</router-link>
        <router-link to="/contact" class="nav-button">Contact</router-link>
      </div>

      <div class="resume-download">
        <a
          href="resumes/resume.pdf"
          class="resume-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"
            />
          </svg>
          Download Resume
        </a>
      </div>
    </div>
  `,
};

export default HomeComponent;
