import React from 'react'

import { Slider } from '../Slider';

import foto from '../../images/mand1.jpg';
import mandala_1 from '../../images/mandalas/1/2.jpg';
import mandala_2 from '../../images/mandalas/1/3.jpg';
import fotoSurrealista from '../../images/mandalas/1/foto-surreal.jpg';

 
const PoemPost = () => {
  
  const slides = [
      {
        id: 1,
        image: foto,
        title: 'Foto',
        description: 'Foto',
        url: 'https://www.google.com'
      },
      {
        id: 2,
        image: mandala_1,
        title: 'Mandala 1',
        description: 'Mandala 1',
        url: 'https://www.google.com'
      },
      {
        id: 3,
        image: mandala_2,
        title: 'Mandala 2',
        description: 'Mandala 2',
        url: 'https://www.google.com'
      },
      {
        id: 4,
        image: fotoSurrealista,
        title: 'Foto Surrealista',
        description: 'Foto Surrealista',
        url: 'https://www.google.com'
      }
  ];

  const poemPostContent = {
    title: 'Nausea Ansiosa',
    text: 'Estuvo aquí dentro de mí en todo momento.<br> Un nudo en la garganta que no puedo evitar,<br> que me deja sin aire, sin salir mi lamento;<br> y se siente como una nausea ansiosa<br> que siempre me acompaña al despertar.<br><br> La intento soltar, pero vuelve dentro de mí.',
    url: 'https://www.google.com'
  }

  return (
    <div className='poem-post-container' PoemPostContainer>
      <Slider slides={slides} height={"100vh"} />
      <div className='poem-post-content-container'>
        <h1>{poemPostContent.title}</h1>
        <p dangerouslySetInnerHTML={{__html: poemPostContent.text}}></p>
      </div>
    </div>
  )
}

export { PoemPost }