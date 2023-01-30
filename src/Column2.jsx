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
            <p>I have many useful references and resources to transmit the values of a brand and graphically capture them into online and offline media... In my <a className='link' href='https://www.behance.net/damalga'>Behance</a> account you can find some of the work that I have most enjoyed to date.</p>
          </div>
          <div className='front-end'>
            <h5>Front-end web tools</h5>
            <div className='front-end-icons'>
              <div className='css'>
                <img src={css} alt="bootstrap" />
                <p className='text'>Advanced knowledge in HTML, CSS, Sass, grid-layout, flex-box and any kind of stylesheets based library.</p>
                <p className='level'>***</p>
              </div>
              <div className='node'>
                <img src={nodee} alt="node" />
                <p className='text'>Mid level in Javascript, super into creative visual libraries and I’m super interested in any new in the node.js ecosystem.</p>
                <p className='level'>**</p>
              </div>
              <div className='git'>
                <img src={git} alt="git" />
                <p className='text'><del> Low level </del> Begineer in...<br></br>
                Ignorant of everthing.<br></br>
                Full coding energy.<br></br>
                <a className='link' href="https://github.com/damalga">Github</a>, <a className='link' href="https://bitbucket.org/damalga/">Bitbucket</a> & <a className='link' href="https://stackoverflow.com/users/9181614/damalga">Stack</a>...</p>
                <p className='level'>*</p>
              </div>
            </div>
            <p className='extra-info'>Countless experiences as front-end developer in projects built on Ruby on Rails, Symfony, React... and many CMS’s like Liferay, Drupal, Magnolia, Wordpress and AEM.</p>
          </div>
        </div>

      </section>
  )
}

export default Column2