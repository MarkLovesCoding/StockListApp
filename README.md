

<a name="readme-top"></a>
[![MIT License][license-shield]][license-url]


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Stocklists App][product-screenshot]

[Online Version]


### StockLists
Application to search for stock quotes, and create custom lists.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![HTML][html-shield]][html-url]
* [![SCSS][scss-shield]][SCSS-url]
* [![Javascript][javascript-shield]][javascript-url]
* [![React][React-shield]][React-url]
* [![NodeJS][Node-shield]][javascript-url]
* [![ExpressJS][Express-shield]][Express-url]
* [![Webpack][Webpack-shield]][Webpack-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started


### Prerequisites

You'll need to have npm and node installed locally, globally.

* npm
  ```sh
  npm install npm@latest -g
  ```
* node  --> Install latest Node version globally via https://nodejs.org/en
* TwelveData API Key  --> Free account on twelvedata.com provides 8 API calls/min. User has to manually link within code structure.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/MarkLovesCoding/StockListApp.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run 'npm run start' in terminal to load page locally on port 3000.
   ```sh
   npm run start
   ```
4. IMPORTANT: User will have to create their own API key on TwelveData.com. For security purposes the .env file used for our working site is not container in this repository. User will have to create their own .env file and map any API Keys and links onto the StockApp.jsx file.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Mark Halstead - (https://www.markhalstead.dev) 

Project Link: [https://github.com/MarkLovesCoding/StockListApp](https://github.com/MarkLovesCoding/StockListApp)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

I'd like to provide credit to the online educational community that paved the way for me as a self-taught developer. As well I'd like to provide credit to free image and MaterializeCSS resources used for the web app and read me. I use a free version of the twelvedata.com stock quote API, which has limited API calls per minute.
* [FreeCodeCamp](https://www.freecodecamp.org)
* [Codecademy](https://www.codecademy.com/)
* [Img Shields](https://shields.io)
* [React-Icons](https://react-icons.github.io/react-icons/)
* [FontAwesome](https://fontawesome.com/)
* [Materialize-CSS](https://materializecss.com//)
* [Twelve-Data](https://twelvedata.com/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->

[license-shield]: https://img.shields.io/github/license/MarkLovesCoding/stocklistapp.svg?style=for-the-badge
[license-url]: https://github.com/MarkLovesCoding/StockListApp/blob/master/LICENSE.txt
[product-screenshot]: public/assets/stocklists.png
[Online Version]: https://www.markhalstead.dev/markdown
[html-shield]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[html-url]: https://html.com/
[scss-shield]: https://img.shields.io/badge/SCSS-FF2D50?style=for-the-badge&logo=sass&logoColor=white
[scss-url]: https://sass-lang.com/documentation/syntax/
[javascript-shield]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[javascript-url]: https://javascript.com
[React-shield]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[React-url]: https://react.dev 
[Node-shield]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/
[Express-shield]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express-url]: https://expressjs.com/
[Webpack-shield]: https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black
[Webpack-url]: https://webpack.js.org/