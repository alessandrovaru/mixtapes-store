import React from 'react'

import { Slider } from '../Slider';

import foto from '../../images/mand1.jpg';
import mandala_1 from '../../images/mandalas/1/2.jpg';
import mandala_2 from '../../images/mandalas/1/3.jpg';
import fotoSurrealista from '../../images/mandalas/1/foto-surreal.jpg';
import foto_cuadro from '../../images/mandalas/1/foto-cuadro.jpg';

import Image from 'next/image'

import localFont from 'next/font/local'
import { PoemPostIcons } from '../PoemPostIcons';

const microgramma = localFont({
  src: [
    {
      path: '../../../public/fonts/microgramma-bold.otf'
    },
  ],
})
 
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
    image: foto_cuadro,
    title: 'Nausea Ansiosa',
    text: 'Estuvo aquí dentro de mí en todo momento.<br> Un nudo en la garganta que no puedo evitar,<br> que me deja sin aire, sin salir mi lamento;<br> y se siente como una nausea ansiosa<br> que siempre me acompaña al despertar.<br><br> La intento soltar, pero vuelve dentro de mí.',
    url: 'https://www.google.com'
  }

  const scrollToElement = () => {
    const element = document.getElementById("poemPost");
    element.scrollIntoView();
  };

  return (
    <>
      <header className="App-header">
        <button className='startButton' onClick={()=>scrollToElement()}>Start</button>
      </header>
      <div id='poemPost' className='poem-post-container'>
        <Slider slides={slides} height={"100vh"} />
        <div className='poem-post-content-container'>
          <div className='poem-post-text-container'>
            <h1 className={`${microgramma.className}`}>{poemPostContent.title}</h1>
            <p dangerouslySetInnerHTML={{__html: poemPostContent.text}}></p>
            <small>Fotografía tomada en un autobús en la ciudad de Caracas. El Mandala es el centro este proyecto, símbolo de totalidad y orden interior. Los diseños son creados a partir de mis fotos y mi producción inconsciente.</small>
            <hr />
            <div className='poem-post-svg-container'>
              <PoemPostIcons />
            </div>
          </div>
          <div className='poem-post-image'>
            <Image src={poemPostContent.image} alt="Foto" width={400} height={400} />
          </div>
        </div>
      </div>
    </>
  )
}

export { PoemPost }