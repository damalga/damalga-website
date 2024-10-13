import face from './assets/svgs/face.svg'
import face2 from './assets/svgs/face2.svg'
import vocento from './assets/svgs/vocento.svg'
import cheil from './assets/svgs/cheil.svg'
import amaris from './assets/svgs/amaris.svg'
import nateevo from './assets/svgs/nateevo.svg'
import ging from './assets/svgs/ging.svg'

function Column1() {

  return (

      <section className='col-1'>
        <img src={face2} className="face" alt="face vector"/>

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
          <div className='course start'>
            <p className='extra-info'>Before finish this previous long course,<br></br>I started working in my second scholarship at GING. An amazing year where I learned the basics of coding.</p>
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
            <p>Web designer (Front-end),<br></br> <b><a className='link' href="https://nateevo.com/" target="_blank">Nateevo</a></b> (Vass Group).<br></br> (2018 - 5 months).</p>
          </div>
          <div className='amaris job'>
            <img src={amaris} alt="amaris logo" />
            <p>Web designer (Front-end),<br></br> <b><a className='link' href="https://amaris.com/" target="_blank">Amaris</a></b>.<br></br> (2018 - 6 months).</p>
          </div>
          <div className='cheil job'>
            <img src={cheil} alt="cheil logo" />
            <p>Digital Graphic Designer,<br></br> <b><a className='link' href="https://www.cheil.com/es" target="_blank">Cheil Spain</a></b>.<br></br> (2020 - 2022).</p>
          </div>
          <div className='vocento job'>
            <img src={vocento} alt="vocento logo" />
            <p>Web designer (Front-end),<br></br> <b><a className='link' href="https://www.cheil.com/es" target="_blank">Vocento</a></b>.<br></br> (2023 - current).</p>
          </div>
          <div className='info job'>
            <p className='extra-info'>If you have interest in<br></br>
            what I have been doing<br></br>
            on this companies...<br></br>
            please, ask me!
            </p>
          </div>
        </div>
      </section>

  )
}

export default Column1