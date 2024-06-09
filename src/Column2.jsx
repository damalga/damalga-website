import alcarcia from './assets/svgs/alcarcia.svg'
import polymorphism from './assets/svgs/polymorphism.svg'
import css from './assets/svgs/css.svg'
import git from './assets/svgs/git.svg'
import nodee from './assets/svgs/nodee.svg'

function Column2() {

  return (
      <section className='col-2'>

        <div className='projects topic'>
          <h4>PROJECTS</h4>
          <div className='alcarcia project'>
            <img src={alcarcia} alt="alcarcia logo" />
            <p className='bold'>Alcarcia <br></br>
              <span>Artist / Producer</span><br></br>
              <a className='link' href='https://www.alcarcia.com' target="_blank">Website</a>
            </p>
          </div>
          <div className='polymorphism project'>
            <img src={polymorphism} alt="polymorphism logo" />
            <p className='bold'>Polymorphism Records <br></br>
              <span>Record label</span><br></br>
              <a className='link' href='https://www.polymorphismrecords.com' target="_blank">Website</a>
            </p>
          </div>
          <p className='extra-info'>Both projects take electronic music as their starting point. I collect vinyls and I'm fascinated by synthesizers, drum machines and basically any gadget that makes noise.</p>
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
                <p className='text'>Advanced knowledge in HTML, CSS... Solid knowledge with <a className='link' href="https://sass-lang.com/"  target="_blank">Sass</a>, grid-layout, flex-box and any kind of stylesheets based library. I'm good setting properly anything on the screen.</p>
                <p className='level'>***</p>
              </div>
              <div className='node'>
                <img src={nodee} alt="node" />
                <p className='text'>Mid level in Javascript, jQuery and I'm super into big libraries like <a className='link' href="https://gsap.com/"  target="_blank">GSAP</a> for motion, <a className='link' href="https://d3js.org/"  target="_blank">D3</a> for Data and small libraries like <a className='link' href="https://lenis.darkroom.engineering/"  target="_blank">Lenis</a> to manage the scroll and get creative visual inputs. I’m interested in any new in the js environment.</p>
                <p className='level'>**</p>
              </div>
              <div className='git'>
                <img src={git} alt="git" />
                <p className='text'><del> Low level </del> Begineer in...<br></br>
                Ignorant of everthing.<br></br>
                Full coding energy.<br></br>
                <a className='link' href="https://github.com/damalga"  target="_blank">Github</a>, <a className='link' href="https://bitbucket.org/damalga/"  target="_blank">Bitbucket</a> & <br></br>
                <a className='link' href="https://stackoverflow.com/users/9181614/damalga"  target="_blank">Stackoverflow</a>... and I must say that AI came to stay.</p>
                <p className='level'>*</p>
              </div>
            </div>
            <p className='extra-info'>Countless experiences as front-end developer in projects builds on Ruby on Rails, Symfony, React... and CMS’s like Liferay, Drupal, Magnolia, Wordpress and AEM... Or With tools like Gulp, Webpack or Handlebars. I'm especially into any node and npm idea to develop anything.<br></br><br></br>
            Oh! and I'm definitely not bad on the terminal, neither linux, ubuntu or managing virtual machines with debian distribution images or windows.</p>
          </div>
        </div>

      </section>
  )
}

export default Column2