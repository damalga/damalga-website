import ps from './assets/svgs/ps.svg'
import ai from './assets/svgs/ai.svg'
import id from './assets/svgs/id.svg'
import pr from './assets/svgs/pr.svg'
import ae from './assets/svgs/ae.svg'
import live from './assets/svgs/live.svg'
import int1 from './assets/svgs/int1.svg'
import int2 from './assets/svgs/int2.svg'
import int3 from './assets/svgs/int3.svg'

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
          <p className='extra-info'>I know how outdated is this bar system to indicate the level I have with any software... but I find it cute.<br></br>By the way, I'm OK with Adobe XD and Figma.</p>
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
          <p className='extra-info'>As you can see my level in video is lower, but I love to use my own pictures and videos in my work. And I'm super interested in DaVinci Resolve.</p>
          <h5>Audio tools</h5>
          <div className='soft-skill'>
            <img src={live} alt="ableton live logo" />
            <div className='bar live-bar'></div><div className='pro-bar live-pro-bar'></div>
            <p className='label-soft-skill ab'>Ableton</p>
          </div>
          <p className='extra-info'>I mostly use ableton to record what I do with my hardware. But I have used this software a lot in many ways. The next goal is use it for a film!</p>
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
            <div className='mus-film interest'>
              <img src={int1} className="int1" alt="music, films and digital arts"/>
              <p>Music, cinema<br></br>& digital arts</p>
            </div>
            <div className='sci-tec interest'>
              <img src={int2} className="int2" alt="science, nature and technology"/>
              <p>Science, Nature<br></br>& Technology</p>
            </div>
            <div className='trips-narr interest'>
              <img src={int3} className="int3" alt="trips, vehicles and narratives"/>
              <p>Trips, vehicles<br></br>& narratives</p>
            </div>
          </div>
        </div>

        <div className='contact topic'>
          <h4>CONTACT</h4>
          <div className='points'>
            <div className='email point'>
              <p>
                <b>Email:</b> damalga@protonmail.com
              </p>
            </div>
          </div>
        </div>

        <div className='bye topic'>
          <h4>BYE!</h4>
          <p>... and have a nice <span className='opensource'>(opensource)</span> day.</p>
          <h6>Damian;</h6>
        </div>

      </section>
  )
}

export default Column3