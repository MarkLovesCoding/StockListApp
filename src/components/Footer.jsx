


import React from 'react';
import {FaHtml5,FaCss3,FaJs,FaReact,FaNodeJs} from 'react-icons/fa'
import {FaFreeCodeCamp,FaGithub} from 'react-icons/fa'
var Footer = function(props) {
  return (
    <div className="footer">
      <div className="who">
      <p> <span>Mark Halstead</span></p>
        <p>WEB DEVELOPER</p>
       {/* <p>&copy; 2019</p>*/}
      </div>
      <ul className="social-coding">
        <li> <a href={'https://freecodecamp.com/markhalstead'}>
        <i class="fab fa-free-code-camp"></i>
        <FaFreeCodeCamp />
        </a>
        </li>
         <li>  <a href={'https://github.com/MarkTriesCoding/'}>
         <i class="fab fa-github"></i>
         <FaGithub />
         </a>
         </li>
      </ul>
      <div className="madeWith">
        <p>Made with:</p>
        <ul>

          <li>
          <FaHtml5 />
          </li>
          <li>
          <FaCss3 />
          </li>
          <li>
          <FaJs />
          </li>
          <li>
          <FaReact />
          </li>
          <li>
          <FaNodeJs />
          </li>
        </ul></div>

     </div>
  );
}
export default Footer
