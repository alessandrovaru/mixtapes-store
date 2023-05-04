import React from 'react'

import { Slider } from '../Slider';

import foto from '../../images/mand1.jpg';
import mandala_1 from '../../images/mandalas/1/2.jpg';
import mandala_2 from '../../images/mandalas/1/3.jpg';
import fotoSurrealista from '../../images/mandalas/1/foto-surreal.jpg';

import styled from 'styled-components';

const PoemPostContainer = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  .poemPostContentContainer{	
    width: 100%;
    margin-top: 100vh;
    padding: 10%;
    position: relative;
    box-sizing: border-box;
    z-index: 1;
    background-color: #fff;
    display: flex;
    flex-direction: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;  
    h1{
      font-size: 3rem;
      color: #000;
      text-align: right;
      margin-bottom: 2rem;
      width: 100%;
    }
    p{
      font-size: 1.5rem;
      font-weight: 400;
      color: #000;
      text-align: right;
      margin-bottom: 2rem;
      width: 100%;
    }
  }
`
 
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
    <PoemPostContainer>
      <Slider slides={slides} height={"100vh"} />
      <div className='poemPostContentContainer'>
        <h1>{poemPostContent.title}</h1>
        <p dangerouslySetInnerHTML={{__html: poemPostContent.text}}></p>
      </div>
    </PoemPostContainer>
  )
}

export { PoemPost }