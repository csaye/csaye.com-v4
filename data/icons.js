function getImg(name) {
  return require(`../images/icons/${name}`).default;
}

export const icons = {
  "Ace": {
    icon: <i className="far fa-window-restore icon-blue" />,
    website: "https://ace.c9.io"
  },
  "Acorn": {
    icon: <i className="fas fa-leaf icon-brown" />,
    website: "https://github.com/acornjs/acorn"
  },
  "Angular": {
    icon: <i className="fab fa-angular icon-red" />,
    website: "https://angular.io"
  },
  "Aseprite": {
    icon: <i className="fas fa-pencil-alt icon-brown" />,
    website: "https://www.aseprite.org"
  },
  "Atom": {
    icon: <i className="fas fa-file-alt icon-green" />,
    website: "https://atom.io"
  },
  "Audacity": {
    icon: <i className="fas fa-headphones icon-blue" />,
    website: "https://www.audacityteam.org"
  },
  "Bash": {
    icon: <i className="fas fa-dollar-sign icon-gray">_</i>,
    website: "https://www.gnu.org/software/bash"
  },
  "BFXR": {
    icon: <i className="fas fa-file-audio icon-gray" />,
    website: "https://www.bfxr.net"
  },
  "Bit.ly API": {
    icon: <i className="fas fa-link icon-green" />,
    website: "https://dev.bitly.com"
  },
  "Blender": {
    icon: <i className="fas fa-cubes icon-orange" />,
    website: "https://www.blender.org"
  },
  "Brackets": {
    icon: <i className="fas fa-file-code icon-green" />,
    website: "http://brackets.io"
  },
  "C": {
    icon: <i className="fab devicon-c-plain icon-blue" />,
    website: "https://en.wikipedia.org/wiki/C_(programming_language)"
  },
  "C++": {
    icon: <i className="fab devicon-cplusplus-plain icon-blue" />,
    website: "https://en.wikipedia.org/wiki/C%2B%2B"
  },
  "C#": {
    icon: <i className="fab devicon-csharp-plain icon-purple" />,
    website: "https://docs.microsoft.com/en-us/dotnet/csharp"
  },
  "CodeMirror": {
    icon: <i className="far fa-window-restore icon-purple" />,
    website: "https://codemirror.net"
  },
  "CoffeeScript": {
    icon: <i className="fab devicon-coffeescript-original icon-brown" />,
    website: "https://coffeescript.org"
  },
  "Command Line": {
    icon: <i className="fas fa-terminal icon-gray" />,
    website: "https://en.wikipedia.org/wiki/Command-line_interface"
  },
  "CSS": {
    icon: <i className="fab fa-css3 icon-blue" />,
    website: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  "CSS Modules": {
    icon: <i className="fab fa-css3 icon-blue" />,
    website: "https://github.com/css-modules/css-modules"
  },
  "Datamuse API": {
    icon: <i className="fas fa-book icon-blue" />,
    website: "https://www.datamuse.com/api"
  },
  "Firebase": {
    icon: <i className="fas fa-fire-alt icon-orange" />,
    website: "https://firebase.google.com"
  },
  "FL Studio": {
    icon: <i className="fas fa-pepper-hot icon-orange" />,
    website: "https://www.image-line.com"
  },
  "FullCalendar": {
    icon: <i className="far fa-calendar icon-blue" />,
    website: "https://fullcalendar.io"
  },
  "GIMP": {
    icon: <i className="fas fa-images icon-brown" />,
    website: "https://www.gimp.org"
  },
  "Git": {
    icon: <i className="fab devicon-git-plain icon-orange" />,
    website: "https://git-scm.com"
  },
  "GitHub": {
    icon: <i className="fab fa-github icon-black" />,
    website: "https://github.com"
  },
  "GitHub API": {
    icon: <i className="fab fa-github icon-black" />,
    website: "https://docs.github.com"
  },
  "Haskell": {
    icon: <i className="fab devicon-haskell-plain icon-purple" />,
    website: "https://www.haskell.org"
  },
  "Heroku": {
    icon: <i className="fab devicon-heroku-original icon-purple" />,
    website: "https://www.heroku.com"
  },
  "HTML": {
    icon: <i className="fab fa-html5 icon-orange" />,
    website: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  "IDLE": {
    icon: <img className="img-icon" src={getImg("python.png")} alt="" />,
    website: "https://docs.python.org/3/library/idle.html"
  },
  "Java": {
    icon: <i className="fab fa-java icon-red" />,
    website: "https://www.java.com"
  },
  "JavaScript": {
    icon: <i className="fab fa-js icon-yellow" />,
    website: "https://www.javascript.com"
  },
  "JSX": {
    icon: <i className="fab fa-react icon-blue" />,
    website: "https://reactjs.org/docs/introducing-jsx.html"
  },
  "MonoGame": {
    icon: <img className="img-icon" src={getImg("monogame.png")} alt="" />,
    website: "https://www.monogame.net"
  },
  "Netlify": {
    icon: <img className="img-icon" src={getImg("netlify.png")} alt="" />,
    website: "https://www.netlify.com"
  },
  "Next.js": {
    icon: <i className="fab devicon-nextjs-original icon-black" />,
    website: "https://nextjs.org"
  },
  "Node.js": {
    icon: <i className="fab fa-node-js icon-green" />,
    website: "https://nodejs.org"
  },
  "OpenCV": {
    icon: <i className="fas fa-video icon-green" />,
    website: "https://opencv.org"
  },
  "OpenWeather API": {
    icon: <i className="fas fa-sun icon-orange" />,
    website: "https://openweathermap.org/api"
  },
  "PeerJS": {
    icon: <i className="fas fa-plug icon-black" />,
    website: "https://peerjs.com"
  },
  "Pygame": {
    icon: <i className="fas fa-gamepad icon-green" />,
    website: "https://www.pygame.org"
  },
  "Python": {
    icon: <img className="img-icon" src={getImg("python.png")} alt="" />,
    website: "https://www.python.org"
  },
  "Random Word API": {
    icon: <i className="fas fa-random icon-purple" />,
    website: "https://random-word-api.herokuapp.com"
  },
  "React": {
    icon: <i className="fab fa-react icon-blue" />,
    website: "https://reactjs.org"
  },
  "Sass": {
    icon: <i className="fab fa-sass icon-pink" />,
    website: "https://sass-lang.com"
  },
  "SDL2": {
    icon: <i className="fas fa-pencil-ruler icon-purple" />,
    website: "https://www.libsdl.org"
  },
  "Shell": {
    icon: <i className="fas fa-file-code icon-black" />,
    website: "https://en.wikipedia.org/wiki/Shell_script"
  },
  "Spotify API": {
    icon: <i className="fab fa-spotify icon-green" />,
    website: "https://developer.spotify.com/documentation/web-api"
  },
  "Trello": {
    icon: <i className="fab fa-trello icon-blue" />,
    website: "https://trello.com"
  },
  "TypeScript": {
    icon: <i className="fab devicon-typescript-plain icon-blue" />,
    website: "https://www.typescriptlang.org"
  },
  "Unity": {
    icon: <i className="fab fa-unity icon-black" />,
    website: "https://unity.com"
  },
  "Vercel": {
    icon: <img className="img-icon" src={getImg("vercel.png")} alt="" />,
    website: "https://vercel.com"
  },
  "Visual Studio": {
    icon: <i className="fab devicon-visualstudio-plain icon-purple" />,
    website: "https://visualstudio.microsoft.com"
  },
  "VSCode": {
    icon: <i className="fas fa-code icon-blue" />,
    website: "https://code.visualstudio.com"
  },
  "WebRTC": {
    icon: <i className="fas fa-comment-alt icon-purple" />,
    website: "https://webrtc.org"
  },
  "Yelp API": {
    icon: <i className="fab fa-yelp icon-red" />,
    website: "https://www.yelp.com/developers"
  }
};
