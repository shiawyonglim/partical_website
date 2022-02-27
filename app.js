var pwd = document.getElementById("pwd");
var eye = document.getElementById("eye");

eye.addEventListener("click", togglePass);

function togglePass() {
  eye.classList.toggle("active")(pwd.type == "password")
    ? (pwd.type = "text")
    : (pwd.type = "password");
}

function checkStuff() {
  var email = document.form1.email;
  var password = document.form1.password;
  var msg = document.getElementById("msg");

  if (email.value == "") {
    msg.style.display = "block";
    msg.innerHTML = "please enter your email";
    email.focus();
    return false;
  } else {
    msg.innerHTML = "";
  }
  if (password.value == "") {
    msg.innerHTML = "please enter your password";
    password.focus();
    return false;
  } else {
    ms.innerHTML = "";
  }
}

particlesJS("particles-js", {
  particles: {
    number: {
      value: "60",
      density: {
        eneble: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.4,
      random: false,
      anim: {
        enabled: false,
        speed: 10,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 6,
      random: false,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    move: {
      enabled: true,
      speed: 1.5,
      random: false,
      stright: false,
      attract: {
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
});
