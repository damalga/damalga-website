import alcarcia from "./assets/svgs/alcarcia.svg";
import polymorphism from "./assets/svgs/polymorphism.svg";
import css from "./assets/svgs/css.svg";
import git from "./assets/svgs/git.svg";
import nodee from "./assets/svgs/nodee.svg";

function Column2() {
  return (
    <section className="col-2">
      <div className="skills topic">
        <h4>SKILLS</h4>
        <div className="on-off">
          <h5>Print & Digital</h5>
          <p>
            I have many useful references and resources to transmit the values
            of a brand and graphically capture them into online and offline
            media... In my
            <a
              className="link"
              href="https://www.behance.net/damalga"
              target="_blank"
            >
              Behance
            </a>
            account you can find some of the work that I have most enjoyed along
            my graphic design studies.
          </p>
        </div>
        <div className="front-end">
          <h5>Front-end web tools</h5>
          <div className="front-end-icons">
            <div className="css">
              <img src={css} alt="bootstrap" />
              <p className="text">
                Proficient in HTML and CSS, with solid knowledge of
                <a
                  className="link"
                  href="https://handlebarsjs.com/"
                  target="_blank"
                >
                  Handlebars
                </a>
                for dynamic templating, as well as
                <a
                  className="link"
                  href="https://sass-lang.com/"
                  target="_blank"
                >
                  Sass
                </a>
                and various stylesheet libraries. Skilled at efficiently setting
                and styling elements on the screen.
              </p>
            </div>
            <div className="node">
              <img src={nodee} alt="node" />
              <p className="text">
                Mid level in JavaScript. I'm deeply passionate about the
                language and always up-to-date with libraries and frameworks.
                Constantly exploring new ways to maximize the potential of ES6
                and beyond.
              </p>
            </div>
            <div className="git">
              <img src={git} alt="git" />
              <p className="text">
                <del>Low level</del> Begineer in...<br></br>
                Ignorant of everthing.<br></br>
                Full coding energy.<br></br>
                <a
                  className="link"
                  href="https://github.com/damalga"
                  target="_blank"
                >
                  Github
                </a>
                ,
                <a
                  className="link"
                  href="https://bitbucket.org/damalga/"
                  target="_blank"
                >
                  Bitbucket
                </a>
                and <br></br>
                <a
                  className="link"
                  href="https://stackoverflow.com/users/9181614/damalga"
                  target="_blank"
                >
                  Stackoverflow
                </a>
                . Ready to fuse design and tech with creativity and code.
              </p>
            </div>
          </div>
          <p className="extra-info">
            Countless experiences as front-end developer in projects builds on
            Ruby on Rails, Symfony, React... And CMS’s like Liferay, Drupal,
            Magnolia, Wordpress and more. Or With tools like Gulp, Grunt, Vite
            or Webpack...<br></br>
            <br></br>
            Oh! and I'm definitely not bad on the terminal, neither on few linux
            distribution...<br></br>I use Arch btw XD
          </p>
        </div>
      </div>

      <div className="projects topic">
        <h4>PROJECTS</h4>
        <div className="alcarcia music project">
          <img src={alcarcia} alt="alcarcia logo" />
          <p className="bold">
            Alcarcia <br></br>
            <span>Artist / Producer</span>
            <br></br>
            <a className="link" href="https://www.alcarcia.com" target="_blank">
              Website
            </a>
          </p>
        </div>
        <div className="polymorphism music project">
          <img src={polymorphism} alt="polymorphism logo" />
          <p className="bold">
            Polymorphism Records <br></br>
            <span>Record label</span>
            <br></br>
            <a
              className="link"
              href="https://www.polymorphismrecords.com"
              target="_blank"
            >
              Website
            </a>
          </p>
        </div>
        <p className="first extra-info">
          Both projects take electronic music as their starting point. I collect
          vinyls and I'm fascinated by synths, drum machines and basically any
          gadget or device that makes noise.
        </p>
      </div>

      <div className="langs topic">
        <h4>LANGUAGES</h4>
        <div className="level">
          <label>
            Spanish <br></br>
            <span>(Native)</span>
          </label>
          <label>
            English <span>(Fluent-ish chaos master)</span>
          </label>
        </div>
      </div>
    </section>
  );
}

export default Column2;
