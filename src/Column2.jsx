import alcarcia from './assets/svgs/alcarcia.svg'
import polymorphism from './assets/svgs/polymorphism.svg'
import opget from './assets/svgs/opget.svg'
import css from './assets/svgs/css.svg'
import git from './assets/svgs/git.svg'
import nodee from './assets/svgs/nodee.svg'

function Column2() {

  return (
      <section className='col-2'>

        <div className='projects topic'>
          <h4>PROJECTS</h4>
          <div className='alcarcia music project'>
            <img src={alcarcia} alt="alcarcia logo" />
            <p className='bold'>Alcarcia <br></br>
              <span>Artist / Producer</span><br></br>
              <a className='link' href='https://www.alcarcia.com' target="_blank">Website</a>
            </p>
          </div>
          <div className='polymorphism music project'>
            <img src={polymorphism} alt="polymorphism logo" />
            <p className='bold'>Polymorphism Records <br></br>
              <span>Record label</span><br></br>
              <a className='link' href='https://www.polymorphismrecords.com' target="_blank">Website</a>
            </p>
          </div>
          <p className='first extra-info'>Both projects take electronic music as their starting point. I collect vinyls and I'm fascinated by synths, drum machines and basically any gadget or device that makes noise.</p>
          <div className='opget design project'>
            <img src={opget} alt="opget logo" />
            <p className='bold'>OP(en) (Bud)GET<br></br>
              <span>Participation Platform</span><br></br>
              <a className='link' href='https://www.figma.com/proto/ZV8kHYzKufPkXbg3cTDFPu/Opget?node-id=1-2&node-type=canvas&t=UUBAc0ABtNcBZ9fA-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1' target="_blank">Prototype</a>
            </p>
          </div>
          <p className='second extra-info'>This project is a presentation to show my interests in economy and new technologies. I'd love to develop an idea like this one, mixing this two passions.</p>
        </div>

        <div className='skills topic'>
          <h4>SKILLS</h4>
          <div className='on-off'>
            <h5>Print & Digital</h5>
            <p>I have many useful references and resources to transmit the values of a brand and graphically capture them into online and offline media... In my <a className='link' href='https://www.behance.net/damalga' target="_blank">Behance</a> account you can find some of the work that I have most enjoyed along my graphic design studies.</p>
          </div>
          <div className='front-end'>
            <h5>Front-end web tools</h5>
            <div className='front-end-icons'>
              <div className='css'>
                <img src={css} alt="bootstrap" />
                <p className='text'>Advanced knowledge in HTML, CSS... Solid knowledge with <a className='link' href="https://sass-lang.com/" target="_blank">Sass</a>, grid-layout, flex-box and any kind of stylesheets based library. I'm good setting properly anything on the screen.</p>
                <p className='level'>***</p>
              </div>
              <div className='node'>
                <img src={nodee} alt="node" />
                <p className='text'>Mid level in Javascript, jQuery and I'm super into big libraries like <a className='link' href="https://gsap.com/" target="_blank">GSAP</a> for motion, <a className='link' href="https://d3js.org/" target="_blank">D3</a> for Data and small libraries like <a className='link' href="https://lenis.darkroom.engineering/" target="_blank">Lenis</a> to manage the scroll and get creative visual inputs. I’m interested in any new in the js environment.</p>
                <p className='level'>**</p>
              </div>
              <div className='git'>
                <img src={git} alt="git" />
                <p className='text'><del>Low level</del> Begineer in...<br></br>
                Ignorant of everthing.<br></br>
                Full coding energy.<br></br>
                <a className='link' href="https://github.com/damalga" target="_blank">Github</a>, <a className='link' href="https://bitbucket.org/damalga/" target="_blank">Bitbucket</a> & <br></br>
                <a className='link' href="https://stackoverflow.com/users/9181614/damalga" target="_blank">Stackoverflow</a>... and I must say that I'm looking for being a solid bridge between design and technology with tools like <a className='link' href="https://storybook.js.org/" target="_blank">Storybook</a>.</p>
                <p className='level'>*</p>
              </div>
            </div>
            <p className='extra-info'>Countless experiences as front-end developer in projects builds on Ruby on Rails, Symfony, React... and CMS’s like Liferay, Drupal, Magnolia, Wordpress and more. Or With tools like Gulp, Grunt, Vite, Webpack or Handlebars... I'm especially into any node / npm idea to develop anything.<br></br><br></br>
            Oh! and I'm definitely not bad on the terminal, neither on few linux distribution.</p>
          </div>
        </div>

      </section>
  )
}

export default Column2