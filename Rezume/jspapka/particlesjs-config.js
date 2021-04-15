

particlesJS('particles-js',
{
  "particles": {
    "number": {
      "value": 200,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#fff"
    },
    "shape": {
      "type": "star",
      "stroke": {
        "width": 0,
        "color": "yellow"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.65232414578222467,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 100,
        "opacity_min": 1,
        "sync": false
      }
    },
    "size": {
      "value": 6.02559045649142,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 60,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 80.17060304327615,
      "color": "#ffffff",
      "opacity": 0.8,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 300,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "star",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 100,
        "size": 100,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 6
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});