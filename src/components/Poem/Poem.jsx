import styled from "styled-components";
import mand from '../../images/mand1.jpg';


const Poem = (randomLink) => {
  return (
    <div className="poem-container">
      <img onClick={randomLink} src={mand} className="App-logo" alt="logo" />
      <h2>Nausea Ansiosa</h2>
      <p>Estuvo aquí dentro de mí en todo momento.</p>
      <p>Un nudo en la garganta, que no puedo evitar,</p>
      <p>que me deja sin aire, sin salir mi lamento;</p>
      <p>y se siente como una nausea ansiosa</p>
      <p>que siempre me acompaña al despertar.</p>  
      <br></br>
      <p>La intento soltar, pero vuelve dentro de mí.</p>
      <br></br>
      <a href="https://instagram.com/alessandrovaru" target="_blank" rel="noreferrer"><h1>ALESSANDROVARU</h1></a>
    </div>
  )
}

export default Poem