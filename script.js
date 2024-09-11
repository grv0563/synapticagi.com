const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const sectionId = this.getAttribute('href');
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  });
});

function displayText(){


const atarai_text= `
               AAA                tttt                                                                   AAA               IIIIIIIIII
              A:::A            ttt:::t                                                                  A:::A              I::::::::I
             A:::::A           t:::::t                                                                 A:::::A             I::::::::I
            A:::::::A          t:::::t                                                                A:::::::A            II::::::II
           A:::::::::A   ttttttt:::::ttttttt      aaaaaaaaaaaaa  rrrrr   rrrrrrrrr                   A:::::::::A             I::::I  
          A:::::A:::::A  t:::::::::::::::::t      a::::::::::::a r::::rrr:::::::::r                 A:::::A:::::A            I::::I  
         A:::::A A:::::A t:::::::::::::::::t      aaaaaaaaa:::::ar:::::::::::::::::r               A:::::A A:::::A           I::::I  
        A:::::A   A:::::Atttttt:::::::tttttt               a::::arr::::::rrrrr::::::r             A:::::A   A:::::A          I::::I  
       A:::::A     A:::::A     t:::::t              aaaaaaa:::::a r:::::r     r:::::r            A:::::A     A:::::A         I::::I  
      A:::::AAAAAAAAA:::::A    t:::::t            aa::::::::::::a r:::::r     rrrrrrr           A:::::AAAAAAAAA:::::A        I::::I  
     A:::::::::::::::::::::A   t:::::t           a::::aaaa::::::a r:::::r                      A:::::::::::::::::::::A       I::::I  
    A:::::AAAAAAAAAAAAA:::::A  t:::::t    tttttta::::a    a:::::a r:::::r                     A:::::AAAAAAAAAAAAA:::::A      I::::I  
   A:::::A             A:::::A t::::::tttt:::::ta::::a    a:::::a r:::::r                    A:::::A             A:::::A   II::::::II
  A:::::A               A:::::Att::::::::::::::ta:::::aaaa::::::a r:::::r                   A:::::A               A:::::A  I::::::::I
 A:::::A                 A:::::A tt:::::::::::tt a::::::::::aa:::ar:::::r                  A:::::A                 A:::::A I::::::::I
AAAAAAA                   AAAAAAA  ttttttttttt    aaaaaaaaaa  aaaarrrrrrr                 AAAAAAA                   AAAAAAAIIIIIIIIII

`

const atarai=document.getElementById("atarai-animation");
atarai.textContent=atarai_text;

}
 // displayAge();
 setInterval(displayText,1)







