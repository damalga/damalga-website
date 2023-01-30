import hello from './assets/svgs/hello.svg'

function Header() {

  return (
    <header>
      <section className='first'>
        <div className='hello'>
          <h1>
            <img src={hello} alt="hello friend"/>
          </h1>
        </div>
        <div className='intro'>
          <h2>WHO I AM</h2>
          <p>I am Damian, from Madrid, Spain. I love designing simple and functional. Removing what is unnecessary, to create smart code and clean designs. I cannot stop improving my design and development skills and I am super into in new creative experiences.</p>
        </div>
      </section>
      <section className='second'>
        <div className='name'>
          <h3>GRAPHIC DESIGNER AND FRONT-LAYOUT WEB DEVELOPER</h3>
        </div>
      </section>
    </header>
  )
}

export default Header