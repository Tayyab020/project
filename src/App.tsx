
import "./App.css"
import profileimg from "./assets/WhatsApp Image 2024-09-06 at 9.05.18 AM.jpeg"

import instaimg from "./components/icons8-insta.svg"
import whatsappimg from "./components/icons8-whatsapp.svg"
import youtubeimg from "./components/icons8-youtube.svg"
import facebookimg from "./components/facebook icon.png"
import twitterimg from "./components/twitter.png"

const App = () => {
  return (
    <>
    <header>
    <div> <h1 id='name'>Fizza Tahir</h1>
    <p id="intro">Studing in UOG, Student of CS(computer science),
    like to sleep,watch movies. currently living in Gujrat. Kind of a Fresher....</p>
    </div>
    <div>
      <img  src={profileimg} alt='image' id="image"/>
    </div>
    </header>
    
    <nav id="nav">
      <div>
  <a href='#EducationalHistory'>Educational History </a>
  <a href='#ProfessionalSkills'>Professional Skills</a>
  <a href="#ProfessionalProjects">Professional Projects</a>
  <a href="#Hobbies">Hobbies</a>
  <a href="#life-ambitions">Life Ambitions</a>
  <a href="#efforts-for-country">Efforts for Country</a>
  </div>
  <div>
  <a href="#Contact-Me">Contact Me</a>
  </div>
</nav>

<div className="div">
<div id="blank-div"></div>

<div id='main-contant'>

  <div id="EducationalHistory">

    <h2>Educational History</h2>
        <table>
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Degree Title</th>
                    <th>Passing Year</th>
                    <th>Total Marks</th>
                    <th>Obtained Marks</th>
                    <th>Percentage</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1.</td>
                    <td>BSC</td>
                    <td>2022</td>
                    <td>1000</td>
                    <td>850</td>
                    <td>85%</td>
                </tr>
                <tr>
                    <td>2.</td>
                    <td>Bachelor of CS</td>
                    <td>2026</td>
                    <td>1000</td>
                    <td>920</td>
                    <td>92%</td>
                </tr>
            </tbody>
        </table>
  
  </div>

  <div id="ProfessionalSkills">
<h2>Professional Skills</h2>
<ol>
<li>Html</li>
<li>Jawa Script</li>
<li>CSS</li>
<li>React</li>
</ol>
   </div>

  <div id="ProfessionalProjects">
<h2>Professional Projects</h2>
<ol>
<li>Personal Portfolio in (css, Html)</li>
<li>Personal Portfolio in (React,External CSS)</li>
<li>Personal Portfolio in (React,inline CSS)</li>
<li>Personal data Form</li>
</ol>
   </div>

  <div id="Hobbies">
<h2>Hobbies</h2>
<ul>
<li>Calligraphy</li>
<li>Sleeping</li>
<li>watching movies</li>
<li>Art</li>
</ul>
   </div>

   <div id="life-ambitions">
    <h2>Life Ambitions</h2>
    <ul>
      <li><b>Achieved</b></li>
      <ul>
        <li>Graduated from college</li>
        <li>Done 4 Semester </li>
        <li>Learned a new language</li>
        <li>Made a website </li>
      </ul>
      <li><b>Struggling</b></li>
      <ul>
        <li>Achieving study-life balance</li>
        <li>Adjusting in uni life</li>
        <li>Learning to new languages</li>
        <li>meating new new people</li>
      </ul>
    </ul>
    </div>

    <div id="efforts-for-country">
    <h2>Efforts for Country</h2>
    <ul>
      <li><b>Succeeded</b></li>
      <ul>
        <li>Studing in Pakistan</li>
        <li>learning new Skills</li>
        <li>Participated in voter education campaigns</li>
        <li>Donated to local charities for disaster relief</li>
      </ul>
      <li><b>Struggling</b></li>
      <ul>
        <li>Advocating for policy change in environmental laws</li>
        <li>Raising awareness on public health initiatives</li>
        <li>Struggling in finding better job</li>
        <li>Getting involved in local government activities</li>
      </ul>
    </ul>
  </div>

  </div>
  <div id="end"></div>
  </div>

<div id="Contact-Me">
  <footer id='footer'>
<h2>Contact Me: </h2>
<h4> Email: 22024119-112@uog.edu.pk</h4>
<div id="logo">
  <a href="https://www.instagram.com/" target='_blank'><img src={instaimg} alt='icon' className='icons'></img></a>
  <a href="https://web.whatsapp.com/" target='_blank'><img src={whatsappimg} alt='icon' className='icons'></img></a>
  <a href="https://www.youtube.com/" target='_blank'><img src={youtubeimg} alt='icon' className='icons'></img></a>
  <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F" target='_blank'><img src={facebookimg} alt='icon' className='icons'></img></a>
  <a href="https://twitter.com/i/flow/login" target='_blank'><img src={twitterimg} alt='icon' className='icons'></img></a>

</div>
  </footer>
  </div>
    </>
  )
}

export default App