import React, { useState, Fragment } from 'react'
import './Parallex.css';
import { Parallax } from 'react-parallax';
import background from '../working1.png'
import {AnimationOnScroll} from 'react-animation-on-scroll'
import "animate.css/animate.min.css";
import image1 from './bgweb.jpg'
import image2 from './bg1.png'
import image3 from './bg2.png'
import image4 from './bg3.png'
import image5 from './bg5.png'
import html from './logo/html.png'
import css from './logo/css.png'
import js from './logo/js.png'
import manworking from './logo/man_working.png'
import sql from './logo/sql.png'
import dotnet from './logo/dotnet.png'
import c from './logo/c#.jpg'
import java from './logo/java.png'
import react from './logo/react.png'
import mail from './logo/mail.jpg'
import linkedin from './logo/linkedin.jpg'
import twitter from './logo/twitter.jpg'
import instagram from './logo/instagram.jpg'
import right from './logo/right.png'
import left from './logo/left.png'
import icon  from './logo/icon.png'
import icon2 from './logo/icon2.png'
import icon3 from './logo/icon3.png'
import man_about from './logo/man_about.gif'
import man_workings from './logo/man_workings.png'
import man2 from './logo/man2.png'
import contact_links from './logo/linkedin.png'
import man_contact from './logo/man_workings.png'
import TypeWriterEffect from 'react-typewriter-effect';
import download from './logo/download.png'


import $ from 'jquery';
import {
  Nav,
  NavContainer, 
  NavLogo,
  NavItem,
  NavLinks,
  NavMenu,
  MobileIcon,
} from './Navbarstyle';










const inlineStyle = {
  background: '#fff',
  left: '50%',
  top: '50%',
  position: 'absolute',
  padding: '20px',
  transform: 'translate(-50%, -50%)',
}


const inlineStyle1 = {
    left: '80%',
    top: '1000px',
    
  }

 

  const element_one = {
    height: 800,
    width: 1520,
    
      
  }

  const element_o = {
    marginTop: 100,
    height: 800,
    width: 1520,
    
      
  }

  const element_skill = {
    height: 800,
    width: 1520,
    marginLeft:100,
    marginRight: -200
      
  }

  const element_onetwo = {
    height: 800,
    width: 1520,
    marginLeft:100,
    marginRight:1200
      
  }



  const element_two = {
    
    marginTop: '300px',
    marginLeft: '100px',
    fontSize :'70px',
    size:'100px',  
    fontWeight: 'bold'
  }

  const element_three = {
    
    marginTop: '0px',
    marginLeft: '820px',
    fontSize :'15px',
    textColor:'white',
    fontFamily: '"proxima nova bold", "Helvetica Neue", Helvetica, Arial, Sans-serif'
  }

  const element_four = {
    
    marginTop: '50px',
    marginLeft: '720px'
   
    
  }

  const element_five = {
    
    marginTop: '-450px',
    marginLeft: '220px'
  }

  const element_six = {
    
    marginTop: '50px',
    marginLeft: '60px'
    
  }

  const element_seven = {
    
    marginTop: '50px',
    marginLeft: '120px'
  }

  const element_eight = {
    
    marginTop: '-180px',
    marginLeft: '1200px'
  }

  const element_nine = {
    
    marginTop: '-400px',
    marginLeft: '700px'
  }

  const element_ten = {
    
    marginTop: '-20px',
    marginLeft: '1020px'
  }

  const element_eleven = {
    
    marginTop: '180px',
    marginLeft: '1100px'

  }

  const element_twelve = {
    
    marginTop: '0px',
    marginLeft: '120px'
  }

  const text2 = {
    
    marginTop: '100px',
    marginLeft: '-800px',
    fontSize :'20px',
    
  }

  const text4 = {
    
    marginTop: '-200px',
    marginLeft: '900px',
    marginRight: '100px',
    fontSize :'20px',
    textAlign: 'justify'
    
  }

  const subtitle = {
    
    marginTop: '-500px',
    marginLeft: '-1200px',
    fontSize :'20px',
    
  }
  





  


function Parallex() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);

  

  return (



<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">

<div class="container"   >





<Parallax bgImage={ image1 } style={element_one} strength={500}   >
 <div>

 <Fragment>
        <Nav style={{ backgroundColor: 'white', position: 'fixed', top: 0, height: 60, width: 600, marginLeft: 400}} className={colorChange}>
           <NavContainer >
             
              
              <NavMenu>
                <NavItem style={{ marginTop: 65}}>
                  <a class="btn btn2" href="#page-top">H O M E</a>
                </NavItem>
                <NavItem style={{ marginTop: 65}}>
                <a class="btn btn2" href="#about">A B O U T</a>
                  
                </NavItem>
                <NavItem style={{ marginTop: 65}}>
                <a class="btn btn2" href="#skills">S K I L L S</a>
                  
                </NavItem>
                <NavItem style={{ marginTop: 65}}>
                <a class="btn btn2" href="#works">W O R K S</a>
                 
                </NavItem>

                <NavItem style={{ marginTop: 65}}>
                <a class="btn btn2" href="#contact">C O N T A C T</a>
                 
                </NavItem>
                
              </NavMenu>
           </NavContainer>
        </Nav>
      </Fragment>

</div> 
 
<AnimationOnScroll initiallyVisible="true"  animateIn="bounceInRight"  animateOut="bounceOutRight"  duration={2.0}>
<h1 style={{ marginLeft: '50px',marginTop: '190px'}} >Hi, <br/> I am
Raghuram</h1>

<div className='r'  style={{marginTop: '-169px', marginLeft: '216px'}}>Raghuram</div>
</AnimationOnScroll>

<div style={{marginTop: '-109px',  marginLeft: '800px'}}>

<TypeWriterEffect
            textStyle={{ color: 'white', fontSize: 60, fontWeight: 'bold', fontFamily: 'Courier New'  }}
            startDelay={100}
            cursorColor="black"
            text="< web  developer />"
            typeSpeed={150}
            
          />
    </div>
<AnimationOnScroll style={element_three} initiallyVisible="true" animateIn="fadeIn"  animateOut="fadeOut"  duration={1.0}>

<p style={{ fontSize :'18px',  marginLeft: '5px', color: 'white'}}>
        I am a Full Stack Developer based in Kakinada, India. worked on more <br/>  10 web  projects  proficient in frontend, backend and database 
         ,currently <br/> working as full stack web developer at starmark software<br/>
         </p>
</AnimationOnScroll>


</Parallax>
                
<section id="about" class="about-section" >          
<Parallax bgImage={ left } style={element_o}  strength={-100}>
       
        <img  src={man_about} style={{marginTop: '0px', marginLeft: '-900px'}} />
        <div style={{marginTop: '-500px', marginLeft: '500px', fontSize :'40px'}}>A B O U T</div>
        <p style={{marginTop: '00px', marginLeft: '900px',  marginRight: '150px', fontSize :'20px', textAlign: 'justify'}}>
        I am a Full Stack Developer located in Kakinada, India. I enjoy  <br/> creating  things that live on the internet. 
         My interest in  web development started back in 2016 when I decided to try recreating  one of my favorite 
         website using  HTML & CSS<br/>
         <br/> 
      Fast Forward to today, I have created more than 10 web projects as   a Student and as a Software Engineer,
I graduated in 2021 and  got a job as full stack web developer at starmark software, after my training 
I was selected as lead for a project among 20 trainees, later   moved a team which works  on companies main 
product, after one year  at starmark, i decided it time to next big step in life,
And move   to a company where i can upskill and challenge myself

        </p>
        
        
        </Parallax>

</section>
    


<section id="skills" class="about-section">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
            
            <Parallax bgImage={ right } style={element_skill} strength={-100}   >
        
        <AnimationOnScroll style={element_four} animateIn="fadeIn"  animateOut="fadeOut"  duration={2.0}>
        
        
        <img style={{ height: 550, marginLeft: -200, marginTop: 0  }} src={man_workings} alt="Logo" />
        
        </AnimationOnScroll>

        <AnimationOnScroll style={element_five} animateIn="bounceInLeft"  animateOut="fadeOut"  duration={2.0}>
        
        
        <img style={{ height: 80, marginTop: -100  }} src={html} alt="Logo" />
        
        </AnimationOnScroll>

        <AnimationOnScroll style={element_six} animateIn="bounceInLeft"  animateOut="fadeOut"  duration={2.0}>
        
        
        <img style={{ height: 100  }} src={css} alt="Logo" />
        
        </AnimationOnScroll>

        <AnimationOnScroll style={element_seven} animateIn="bounceInLeft"  animateOut="fadeOut"  duration={2.0}>
        
        
        <img style={{ height: 80  }} src={js} alt="Logo" />
        
        </AnimationOnScroll>

       

        <AnimationOnScroll style={element_nine} animateIn="bounceInRight"  animateOut="fadeOut"  duration={2.0}>
        
        
        <img style={{ height: 80  }} src={sql} alt="Logo" />
        
        </AnimationOnScroll>

        <AnimationOnScroll style={element_ten} animateIn="bounceInRight"  animateOut="fadeOut"  duration={2.0}>
        
        
        <img style={{ height: 80  }} src={react} alt="Logo" />
        
        </AnimationOnScroll>

        <AnimationOnScroll style={element_eleven} animateIn="bounceInRight"  animateOut="fadeOut"  duration={2.0}>
        
        
        <img style={{ height: 60,marginLeft:-100   }} src={dotnet} alt="Logo" />
        
        </AnimationOnScroll>
   

        <div style={{marginTop: '-400px', marginLeft: '-1200px', fontSize :'40px'}}>S K I L L S</div>
   
  
       
   <p style={{ marginTop: '100px', marginLeft: '60px', fontSize :'20px', textAlign: 'justify'}}> Throughout my years of learning and working on web based  <br/> projects, 
                        I am very strong at front end HTML, CSS, JS and REACT, <br/> I have created 
                         more than 100+ User Interfaces. After I started <br/> working I improved my 
                          backend and database knowledge also. <br/> Using .net and c# and I resolved  
                          many bugs and created more than  <br/> 70+ Wep APIs. using SQL server   i wrote many Store produces and  <br/>Views 
    </p>
    

    <AnimationOnScroll style={element_eight} animateIn="bounceInRight"  animateOut="fadeOut"  duration={2.0}>
        
        
        <img style={{ height: 80, marginLeft:-100  }} src={java} alt="Logo" />
        
        </AnimationOnScroll>

       
      </Parallax>
            </div>
        </div>
    </div>
</section>


<section id="works" class="about-section">
    <div class="container"  >
        <div class="row">
            <div class="col-lg-12">
            <Parallax bgImage={ left } style={element_one} strength={-100} >
        
       
        

      <div style={{ marginLeft: 150 }}>
        <div class="card" style={{ height: 100, width: 100, marginTop: 50, marginLeft: 50 }} >
            <div class="slide slide1">
                <div class="content">
                    <div class="icon">
                    <h2 style={{ fontSize :'40px', marginLeft: -30}}>
                        Vital <p style={{ color :'orange',marginTop: -54, marginLeft: 140}}>dx</p>
                    </h2>
                        <i class="fa fa-user-circle" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="slide slide2">
                <div class="content">
                <br/>
                
                <div class="tags"  style={{ marginTop: -38}}>
                        HTML
                        <div style={{ marginTop: -18, marginLeft: 52, position: 'centre' }} class="tags" >
                        CSS
                    </div>
                    <div style={{ marginTop: -20, marginLeft: 106, position: 'centre' }} class="tags" >
                       JS
                    </div>
                    <div style={{ marginTop: -20, marginLeft: 160, position: 'centre' }} class="tags" >
                        React
                    </div>
                    <br/>
                    <br/>
                    <div style={{ marginTop: -20, marginLeft: 0, position: 'centre' }} class="tags" >
                        .NET
                    </div>
                    <div style={{ marginTop: -20, marginLeft: 52, position: 'centre' }} class="tags_sql" >
                        SQLserver
                    </div>
                    </div>
                    <br/>
                    <br/>
                    <p style={{ fontSize: 12 }}>This is Company’s Product, worked on developing new features and fixing bugs on this project</p>
                </div>
            </div>

            
        </div>

        <div class="card" style={{ height: 100, width: 100, marginLeft: 400, marginTop: -100 }} >
            <div class="slide slide1">
                <div class="content">
                    <div class="icon">
                    <img  style={{ height: 150, width: 250}} src={icon3} />
                        <i class="fa fa-user-circle" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="slide slide2">
                <div class="content">
                <br/>
                <div class="tags"  style={{ marginTop: -38}}>
                        HTML
                        <div style={{ marginTop: -18, marginLeft: 52, position: 'centre' }} class="tags" >
                        CSS
                    </div>
                    <div style={{ marginTop: -20, marginLeft: 106, position: 'centre' }} class="tags" >
                       JS
                    </div>
                    <div style={{ marginTop: -20, marginLeft: 160, position: 'centre' }} class="tags" >
                        React
                    </div>
                    
                    <br/>
                    <br/>
                    <div style={{ marginTop: -20, marginLeft: 0, position: 'centre' }} class="tags" >
                        .NET
                    </div>
                    <div style={{ marginTop: -20, marginLeft: 52, position: 'centre' }} class="tags_sql" >
                        SQLserver
                    </div>
                    </div>
                    <br/>
                    <br/>
                    
                    <p style={{ fontSize: 12 }}>This application helps to rise, view a ticket, which is used by support team to monitor tickets</p>
                </div>
            </div>

            
        </div>

        <div class="card" style={{ height: 100, width: 100, marginTop: 200, marginLeft: 50 }} >
            <div class="slide slide1">
                <div class="content">
                    <div class="icon">
                    <img  style={{ height: 150, width: 250}} src={icon2} />
                        <i class="fa fa-user-circle" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="slide slide2" >
                <div class="content">
                <div class="tags"  style={{ marginTop: -38}} >
                        HTML
                        <div style={{ marginTop: -18, marginLeft: 52, position: 'centre' }} class="tags" >
                        CSS
                    </div>
                    <div style={{ marginTop: -20, marginLeft: 106, position: 'centre' }} class="tags" >
                       Django
                    </div>
                    <div style={{ marginTop: -20, marginLeft: 160, position: 'centre' }} class="tags" >
                        SQLlite
                    </div>
                    </div>
                    <br/>
                    <p style={{ fontSize: 12 }}>It is a online library, I did it as part of my training, It has all the function similar to real library</p>
                </div>
            </div>

            
        </div>

        <div class="card" style={{ height: 100, width: 100 , marginLeft: 400, marginTop: -100 }} >
            <div class="slide slide1">
              
                <div class="content">
                  
                    <div class="icon">
                    <img  style={{ height: 150, width: 250}} src={icon} />
                        <i class="fa fa-user-circle" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="slide slide2">
                <div class="content">
                <br/>
                   <div class="tags"  style={{ marginTop: -38}}>
                        HTML
                        <div style={{ marginTop: -18, marginLeft: 52, position: 'centre' }} class="tags" >
                        CSS
                    </div>
                    <div style={{ marginTop: -20, marginLeft: 106, position: 'centre' }} class="tags" >
                       Django
                    </div>
                    <div style={{ marginTop: -20, marginLeft: 160, position: 'centre' }} class="tags" >
                        SQLlite
                    </div>
                    </div>
                    <br/>
                    <p style={{ fontSize: 12 }}>It is a Student Management System which has a unique feature to predict the future grades of the student based on the past results using Machine Learning</p>
                </div>
            </div>

            
        </div>
        </div>

       

        <div style={text4}> I worked on 10 web based project, 5 are for my college purpose,  
                           and 2 projects are part of training, And the other 3 are live projects. 
                           I did when i am working at starmark software <br/>
                           
                           <p style={{ color : '#BDE1C4' , fontSize :'25px', fontWeight: 'bold'}}>Please hover on the project to get details</p>
 
    </div>

    <div style={{marginTop: '-300px', marginLeft: '500px', fontSize :'40px'}}>W O R K S</div>

        
      </Parallax> 
            </div>
        </div>
    </div>
</section>




<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>

<script src="https://cdn.jsdelivr.net/jquery.easing/1.3/jquery.easing.1.3.min.js"></script>
    
 

      

<section id="contact" class="contact-section">


        <Parallax bgImage={ right } style={element_onetwo} strength={-100} > 
        <div>

        <div style={{marginTop: '100px', marginLeft: '-750px', fontSize :'40px'}}> L E T S  &nbsp; G E T &nbsp; I N &nbsp; T O U C H  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  <br/><br/> &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp; <p style={{ marginTop: '-100px',marginLeft: '1500px',fontSize :'30px', color:'white'}}>  I'm currently looking for new  <br/> challenge and oppotunity to grow <br/> in career, i  always belivee their is <br/>  not ending for learning  </p></div>
        <div style={{marginTop: -300, marginLeft: '100px'}}>
      

        <img  src={man2} style={{ height: 600, width: 250}} />
        </div>
        <div style={{marginTop: '-200px', marginLeft: '1000px'}}>
        <a class = "bn bn2" href={require("../Download_Resume/YerramsettiRaghuram.pdf")}  download="Y Raghuram Resume" > Download Resume  
         </a> 
        </div>
        
       
        
       

        <div class="cards middle" style={{ marginLeft: -600, marginTop: 0 }} >
          
          <div class="front">
            <img  src={mail} />
          </div>
          <div class="back">
            <div class="back-content middle">
              <span><a href="mailto: yerramsettiraghuram@gmail.com" target="_blank"><img  style={{ height: 200, width: 310}} src={contact_links} /></a></span>
              
            </div>
          </div>
        </div>


    
    <div class="cards middle" style={{ marginLeft: -300, marginTop: 0 }} >
      <div class="front">
        <img  src={linkedin} />
      </div>
      <div class="back">
        <div class="back-content middle">
          <span><a href="https://www.linkedin.com/in/yerramsettiraghuram/" target="_blank"><img  style={{ height: 200, width: 310}} src={contact_links} /></a></span>
         
        </div>
      </div>
    </div>

    <div class="cards middle" style={{ marginLeft: -600, marginTop: 250 }} >

      <div class="front">
        <img  src={instagram} />
      </div>
      <div class="back">
        <div class="back-content middle">
          <span><a href="#"><img  style={{ height: 200, width: 310}} src={contact_links} /></a></span>
         
        </div>
      </div>
    </div>

    <div class="cards middle" style={{ marginLeft: -300, marginTop: 250 }} >

      <div class="front">
        <img  src={twitter} />
      </div>
      <div class="back">
        <div class="back-content middle">
        <span><a href="#"><img  style={{ height: 200, width: 310}} src={contact_links} /></a></span>
         
        </div>

       
      </div>

    </div>
    
    
    </div>  
     </Parallax>

    
     
     </section>

     <div>
       
       <div style={{ height: 100, backgroundColor:'white' }} >
         
       </div>
     </div>

      <Parallax style={{ height: 200, backgroundColor:'black' }}>
       
        <div  >
          

          <p style={{color:'white', marginTop: 70, marginLeft: 100, fontSize :'20px',  }}> Y E R R A M S E T T I &nbsp;   R A G H U R A M </p>

          <p style={{color:'white', marginTop: -50, marginLeft: 900, fontSize :'20px',  }}> Contact </p>

          <p style={{color:'white', marginTop: -50, marginLeft: 1200, fontSize :'20px',  }}>  Address</p>

          <p style={{color:'grey', marginTop: 0, marginLeft: 900, fontSize :'15px',  }}> +917730939333 <br/> yerramsettiraghuram@gmail.com</p>

          <p style={{color:'grey', marginTop: -55, marginLeft: 1200, fontSize :'15px',  }}> Kakianda <br/> Andhra Predesh, India</p>


          <p style={{color:'grey', marginTop: 30, marginLeft: 680, fontSize :'15px',  }}>Made in 2022</p>
        


          </div>
      </Parallax>
     
      </div>
    </body>
  );
}

export default Parallex;