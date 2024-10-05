import React from "react";
import "./Home.css";
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
const animation = () => {
  const animation = document.getElementById("animation-text");

  animation.innerText = { text };
  repeat_animation();
};
const repeat_animation = () => {
  animation();
};

function Home() {
  return (
    <div className="home-container">
      <div className="animation-container" id="app-text">
        <h6 id="animation-text">
          <pre>{text}</pre>
        </h6>
      </div>
      <div className="home-main">
        <h3>SynapticAGI - Artificial Super Intelligence</h3>
        <p>
          Objective of building Powerfull AI or AGI is to replace humans is
          ridiculous. Infact humans love what they, however they do but there
          underrated or unexplored problem is that we(humans) are part of two
          distinct world; Mental World ( Cognitive abilities which do High level
          cognitive function such thinking, reasoning and decision making) and
          physical world (which deals with robotics functions like coordination
          and control in tasks like walking, running and more complex movement
          during Dance, Boxing and performing Gymnastics or Martial Arts).
          Mental world works very fast and adapts the changes quickly. On the
          other hand physical world is very complex, follows the laws of physics
          and works way slower than mental world. Laws of physics are simple but
          because physics is universal that overwhelms the algorithmic and
          computation capabilities of machine due combinatorial complexity of
          applications of laws of physics. Mental world works beforehand
          physical world because of hard informational dependency. The
          frustration always lies in making the harmony between both World.
          Mental world's nature is declarative whereas physical world's
          imperative means biological evolution made our brain more advanced in
          declaring any solution or problem than actually weaving the solution
          which works in the presence of physical world's friction.
        </p>
        <p>
          The purpose of engineering super intelligence is to increase the
          declarative power of machine in declaring the solutions of problems
          like climate change, protein folding, clean energy Crisis, cure for
          cancer and Alzheimer, which can be easily woven in the physical world
          and can be made accessible to everyone.
        </p>
        <div className="links">
          <a href="/research">Research</a>

          <a href="/contact" style={{ color: "blue" }}>
            Contact
          </a>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}

export default Home;
