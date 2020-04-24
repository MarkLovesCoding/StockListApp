var React = require('react');
var Footer = function(props) {
  return (
    <div className="footer">
      <div className="who">
      <p> <span>Mark Halstead</span></p>
        <p>WEB DEVELOPER</p>
       {/* <p>&copy; 2019</p>*/}
      </div>
      <ul className="social-coding">
        <li> <a href={'https://freecodecamp.com/markhalstead'}> <i class="fab fa-free-code-camp"></i></a></li>
         <li>  <a href={'https://github.com/MarkTriesCoding/'}><i class="fab fa-github"></i></a></li>
      </ul>
      <div className="madeWith">
        <p>Made with:</p>
        <ul>
          <li><i class="fab fa-html5"  /></li>
          <li><i class="fab fa-css3"  /></li><li><i class="fab fa-js"  /></li><li><i class="fab fa-react" /></li>
          <li><i class="fab fa-node-js"  /></li>
        </ul></div>

     </div>
  );
}
module.exports = Footer
