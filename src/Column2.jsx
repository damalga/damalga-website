import ps from './assets/svgs/ps.svg'
import ai from './assets/svgs/ai.svg'
import id from './assets/svgs/id.svg'
import pr from './assets/svgs/pr.svg'
import ae from './assets/svgs/ae.svg'
import live from './assets/svgs/live.svg'

function Column2() {

  return (
      <section className='col-2'>
        <div className='skills topic'>
          <h4>SKILLS</h4>
          <div className='branding'>
            <h5>Branding:</h5>
            <div className='bar branding-bar'></div><div className='pro-bar branding-pro-bar'></div>
          </div>
          <div className='editorial'>
            <h5>Editorial:</h5>
            <div className='bar editorial-bar'></div><div className='pro-bar editorial-pro-bar'></div>
          </div>
          <div className='web-dev'>
            <h5>Web development (Front-end):</h5>
            <div className='bar web-dev-bar'></div><div className='pro-bar web-dev-pro-bar'></div>
          </div>
          <div className='music-audio'>
            <h5>Music/Audio Production:</h5>
            <div className='bar music-audio-bar'></div><div className='pro-bar music-audio-pro-bar'></div>
          </div>
          <div className='illustration'>
            <h5>Illustration:</h5>
            <div className='bar illustration-bar'></div><div className='pro-bar illustration-pro-bar'></div>
          </div>
          <div className='photography'>
            <h5>Photography:</h5>
            <div className='bar photography-bar'></div><div className='pro-bar photography-pro-bar'></div>
          </div>
          <div className='video'>
            <h5>Video:</h5>
            <div className='bar video-bar'></div><div className='pro-bar video-pro-bar'></div>
          </div>
        </div>

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

      </section>
  )
}

export default Column2