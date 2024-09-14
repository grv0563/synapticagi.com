import React from 'react';
import './Home.css'
const text = `  
               AAA                 SSSSSSSSSSSSSSS   IIIIIIIIII
              A:::A              SS:::::::::::::::   I::::::::I
             A:::::A            S:::::SSSSSS::::::   I::::::::I
            A:::::::A           S:::::S     SSSSSS   II::::::II
           A:::::::::A          S:::::S                I::::I  
          A:::::A:::::A         S:::::S                I::::I  
         A:::::A A:::::A         S::::SSSS             I::::I  
        A:::::A   A:::::A         SS::::::SSSSS        I::::I  
       A:::::A     A:::::A          SSS::::::::SS      I::::I  
      A:::::AAAAAAAAA:::::A            SSSSSS::::S     I::::I  
     A:::::::::::::::::::::A                S:::::S    I::::I  
    A:::::AAAAAAAAAAAAA:::::A               S:::::S    I::::I  
   A:::::A             A:::::A  SSSSSSS     S:::::S  II::::::II
  A:::::A               A:::::A S::::::SSSSSS:::::S  I::::::::I
 A:::::A                 A:::::S  :::::::::::::::SS  I::::::::I
AAAAAAA                   AAAAAAS  SSSSSSSSSSSSSS    IIIIIIIIII
`;
const animation=()=>{
  const animation =document.getElementById("animation-text");
  
  animation.innerText={text};
  repeat_animation()
}
const repeat_animation=()=>{
  
  animation();
}

function Home() {
  return (
    <div className='home-container'>
       <div className='animation-container' id="app-text">
        <h6 id='animation-text'>
          <pre>{text}</pre>
        </h6>
      </div>
      <div className='home-main'>
        <h3>SynapticAGI - Artificial Super Intelligence</h3>
        <p>
          Objective of building Powerfull AI or AGI is not to eliminate humans
          or replace humans. Infact we like to work but there main problem is
          that we are part of two distinct world. Mental and physical world.
          Where mental world works very fast and adapts the changes quickly. On
          the other hand physical world that work way slower we think. The
          frustration lies in making the harmony between both World. The purpose
          of building the Powerful AI or AGI to make the physical world more
          agile and more adaptable and facilitates us to create and test and
          destroy our product of vision and imagination.
        </p>
        <p>
          There are lot of people with ideas and alreday have products and
          sevices in their imagination but don't know how to execute their
          vision and imagination in the reality without having massive capital.
        </p>
        <div className='links'>
        <a href='/research'>Research</a>
        
        
        <a href="/contact" style={{color:"blue"}}>Contact</a>
        
        </div>
      </div>
      <footer>
     
      </footer>
    </div>
  )
}

export default Home
