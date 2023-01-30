import ps from './assets/svgs/ps.svg'
import ai from './assets/svgs/ai.svg'
import id from './assets/svgs/id.svg'
import pr from './assets/svgs/pr.svg'
import ae from './assets/svgs/ae.svg'
import live from './assets/svgs/live.svg'
import musiccinema from './assets/svgs/music-cinema.svg'
import scitec from './assets/svgs/sci-tec.svg'
import tripsliterature from './assets/svgs/trips-literature.svg'

function Column3() {

  return (
      <section className='col-3'>

        <div className='soft-skills topic'>
          <h4>SOFTWARE SKILLS</h4>

          <h5>Graphic tools</h5>
          <div className='soft-skill'>
            <img src={ps} alt="photoshop logo psd adobe" />
            <div className='bar psd-bar'></div><div className='pro-bar psd-pro-bar'></div>
            <p className='label-soft-skill psd'>photoshop</p>
          </div>
          <div className='soft-skill'>
            <img src={ai} alt="illustrator logo ai adobe" />
            <div className='bar ai-bar'></div><div className='pro-bar ai-pro-bar'></div>
            <p className='label-soft-skill ai'>illustrator</p>
          </div>
          <div className='soft-skill'>
            <img src={id} alt="indesign logo id adobe" />
            <div className='bar id-bar'></div><div className='pro-bar id-pro-bar'></div>
            <p className='label-soft-skill id'>indesign</p>
          </div>

          <h5>Video tools</h5>
          <div className='soft-skill'>
            <img src={pr} alt="premiere logo pr adobe" />
            <div className='bar pr-bar'></div><div className='pro-bar pr-pro-bar'></div>
            <p className='label-soft-skill pr'>Premiere</p>
          </div>
          <div className='soft-skill'>
            <img src={ae} alt="after effects logo ae adobe" />
            <div className='bar ae-bar'></div><div className='pro-bar ae-pro-bar'></div>
            <p className='label-soft-skill ae'>After Effects</p>
          </div>
          
          <h5>Audio tools</h5>
          <div className='soft-skill'>
            <img src={live} alt="ableton live logo" />
            <div className='bar live-bar'></div><div className='pro-bar live-pro-bar'></div>
            <p className='label-soft-skill pr'>Ableton</p>
          </div>
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
                <b>Email:</b> damalgadesign[at]gmail.com
              </p>
            </div>
          </div>
        </div>

      </section>
  )
}

export default Column3