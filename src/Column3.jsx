import css from './assets/svgs/css.svg'
import git from './assets/svgs/git.svg'
import nodee from './assets/svgs/nodee.svg'
import musiccinema from './assets/svgs/music-cinema.svg'
import scitec from './assets/svgs/sci-tec.svg'
import tripsliterature from './assets/svgs/trips-literature.svg'

function Column3() {

  return (
      <section className='col-3'>
        <div className='front-end-web-tools'>
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
              Github, Bitbucket & Stack...
              User: damalga</p>
              <p className='level'>*</p>
            </div>
          </div>
          <p className='cms'>Countless experiences as front-end developer in projects built on Ruby on Rails, React, Symfony... and many CMS’s like Liferay, Drupal, Magnolia, Wordpress and AEM.</p>
        </div>

        <div className='langs topic'>
          <h4>LANGUAGES</h4>
          <div className='level'>
            <label>Spanish <br></br><span>(Native)</span></label>
            <label>English <span>(Good comunication skills)</span></label>
          </div>
        </div>

        <div className='interests topic'>
          <h4>INTERESTS</h4>
          <div className='points'>
            <div className='music-cinema interest'>
              <img src={musiccinema} className="music-cinema-img" alt="music and cinema"/>
              <p>Music, cinema & digital arts</p>
            </div>
            <div className='sci-tec interest'>
              <img src={scitec} className="sci-tec-img" alt="science and technology"/>
              <p>Science, Nature & Technology</p>
            </div>
            <div className='trips-literature interest'>
              <img src={tripsliterature} className="trips-literature-img" alt="trips and literature"/>
              <p>Trips, vehicles & narratives</p>
            </div>
          </div>
        </div>

        <div className='contact topic'>
          <h4>CONTACT</h4>
          <div className='points'>
            <div className='email point'>
              <p>
                <b>Email:</b><br></br>
                damalgadesign[at]gmail.com
              </p>
            </div>
          </div>
        </div>

      </section>
  )
}

export default Column3