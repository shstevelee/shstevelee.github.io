// AboutComponent.js
const AboutComponent = {
  template: `
    <div class="section active vertical-center">
      <div class="back-button">
        <router-link to="/" class="nav-button">← Back</router-link>
      </div>
      <h1 class="name">About Me</h1>
      <div class="about-content">
        <h2>👨‍🎓🪫⚡</h2>
        <p>
          Hi! I'm Seunghyeok Lee, an Electrical and Computer Engineering
          student at Carnegie Mellon University with a strong passion for
          hardware systems and real-world problem solving. I'm especially
          interested in computer memory, nanofabrication, and building
          smarter, more efficient hardware that benefits people in meaningful
          ways.
        </p>
        <p>
          Beyond academics, I've had the chance to explore a wide range of
          experiences—from designing experiential marketing zones in Amman to
          founding a consulting firm with friends and engaging in a farm
          development project🌱. I'm always excited to learn, build, and
          collaborate—especially on projects that sit at the intersection of
          engineering, design, and social impact.
        </p>
        <h3>Skills</h3>
        <div class="skills-list">
          <span class="skill-tag">C/C++</span>
          <span class="skill-tag">GPIB</span>
          <span class="skill-tag">SCPI</span>
          <span class="skill-tag">Python</span>
          <span class="skill-tag">LaTeX</span>
          <span class="skill-tag">Java</span>
          <span class="skill-tag">JS</span>
          <span class="skill-tag">CSS</span>
          <span class="skill-tag">HTML</span>
        </div>
      </div>
    </div>
  `,
};

export default AboutComponent;
