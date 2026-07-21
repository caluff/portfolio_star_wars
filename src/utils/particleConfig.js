export const ParticleConfig = {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "width": 700,
        "height": 700
      }
    },
    "color": {
      "value": "#374151",
      // "animation": {
      //   "enable": true,
      //   "speed": 20,
      //   "sync": true
      // }

    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "animation": {
        "enable": false,
        "speed": 1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": {
        "enable": true,
        "minimumValue": 0.1
      },
      "animation": {
        "enable": false,
        "speed": 40,
        "sync": false
      }
    },
    "links": {
      "enable": true,
      "distance": 150,
      "color": "#4b5563",
      "opacity": 0.5,
      "width": 1,
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "outModes": {
        "default": "out"
      },
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "fullScreen":{
    "enable": false,
  },
  "interactivity": {
    "detectsOn": "window",
    "events": {
      "onHover": {
        "enable": true,
        "mode": "bubble"
      },
    "onClick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "links": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 4,
        "duration": 0.8,
        "opacity": 0.6,
        "speed": 1,
        "color":"#f5af19",

      },
      "repulse": {
        "distance": 400,
        "duration": 0.8
      },
      "push": {
        "quantity": 4
      },
      "remove": {
        "quantity": 2
      }
    }
  },
  "detectRetina": true
}
