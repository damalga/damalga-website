import hello from './assets/svgs/hello.svg'

function Header() {

  return (
    <header>
      <section className='hello'>
        <h1>
          <img src={hello} alt="hello tag"/>
        </h1>
      </section>
      <section className='intro'>
        <h2>WHO I AM</h2>
        <p>I am Damian, from Madrid, Spain. I love designing simple and functional. Removing what is unnecessary, to create smart code and clean designs. I cannot stop improving my design skills and I am super into in new web coding experiences.</p>
      </section>
      <section className='name'>
        <h3>GRAPHIC DESIGNER AND FRONT-LAYOUT WEB DEVELOPER</h3>
      </section>
    </header>
  )
}

export default Header