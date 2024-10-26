import face from './assets/svgs/face.svg'
import vocento from './assets/svgs/vocento.svg'
import cheil from './assets/svgs/cheil.svg'
import amaris from './assets/svgs/amaris.svg'
import nateevo from './assets/svgs/nateevo.svg'
import ging from './assets/svgs/ging.svg'

function Column1() {

  return (

      <section className='col-1'>
        <div className='intro'>
          <img src={face} className="face" alt="face vector"/>
          <label className="switch">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="moon" data-id="8"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
            <input type="checkbox" id="darkModeToggle"/>
            <span className="slider"></span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sun" data-id="9"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
          </label>
        </div>

        <div className='edu topic'>
          <h4>EDUCATION</h4>
          <div className='degree school'>
            <p><b>Graphic Design Degree</b> in the <b><a className='link' href="https://esdmadrid.es/" target="_blank">Escuela Superior de Diseño de Madrid</a></b> (ESDM).<br></br>[2012 --- 2017]</p>
          </div>
          <div className='erasmus school'>
            <p><b>Erasmus+</b> in <a className='link' href="https://www.aalto.fi/en/school-of-arts-design-and-architecture" target="_blank"><b>Aalto University</b> school of arts, design and achitecture</a> (Finland).<br></br> [2015 -- 5 months (1st semester)]</p>
          </div>
          <div className='course start'>
            <p className='extra-info'>To finish my degree in the ESDM,<br></br>I started working as a graphic designer for one of <a className='link' href="https://www.caser.es/" target="_blank">Caser</a>'s marketing departments for 6 months.</p>
          </div>
          <div className='master school'>
            <p><b>300h on-site course + final project</b> in web design and development. Escuela CICE.<br></br>[2016 -- 6 months]</p>
          </div>
          <div className='course school'>
            <p><b>50h on-site course</b> in Javascript.<br></br>
            Asociación Española de <br></br>Programadores Informáticos<br></br>[2019 - 2 months]
            </p>
          </div>
        </div>

        <div className='work topic'>
          <h4>WORK EXPERIENCE</h4>
          <div className='ging job'>
            <img src={ging} alt="ging logo" />
            <p>Research scholarship,<br></br> <b><a className='link' href="https://https://ging.github.io/" target="_blank">GING</a></b> (ETSIT / UPM).<br></br> (2016 - 2017).</p>
          </div>
          <div className='nateevo job'>
            <img src={nateevo} alt="nateevo logo" />
            <p>Front-layout developer,<br></br> <b><a className='link' href="https://nateevo.com/" target="_blank">Nateevo</a></b> (Vass Group).<br></br> (2018 - 5 months).</p>
          </div>
          <div className='amaris job'>
            <img src={amaris} alt="amaris logo" />
            <p>Front-layout developer,<br></br> <b><a className='link' href="https://amaris.com/" target="_blank">Amaris</a></b>.<br></br> (2018 - 6 months).</p>
          </div>
          <div className='cheil job'>
            <img src={cheil} alt="cheil logo" />
            <p>Digital Graphic Designer,<br></br> <b><a className='link' href="https://www.cheil.com/es" target="_blank">Cheil Spain</a></b>.<br></br> (2020 - 2022).</p>
          </div>
          <div className='vocento job'>
            <img src={vocento} alt="vocento logo" />
            <p>Front-end developer,<br></br> <b><a className='link' href="https://www.cheil.com/es" target="_blank">Vocento</a></b>.<br></br> (2023 - current).</p>
          </div>
        </div>
      </section>

  )
}

export default Column1