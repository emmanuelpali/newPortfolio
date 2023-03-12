let stack = document.getElementById("stack");


const skillsArray = ["JavaScript","C#",".Net","React","CSS","Bootstrap","NodeJS/Express"];


var counter = 0;
setInterval(function(){
    // do your thing
    stack.innerHTML = " " + skillsArray[counter]
    counter++;
    if(counter === skillsArray.length) {
        counter = 0
    }
}, 2000);

let intro = document.getElementsByClassName("stackHolder");

// let arr = "I'm Emmanuel, a software developer with a passion for creating visually stunning websites and applications that deliver unparalleled user experiences. I have experience working with".split("");

// console.log(intro);

// function displayLetters(arr) {
//     let i = 0;
//     const interval = setInterval(function() {
//       intro[0].innerHTML += "" + arr[i];
//       i++;
//       if (i === arr.length) {
//         clearInterval(interval);
//       }
//     }, 20);

//   }



// / ----------------------SKILLS ------------------------/ 




const container = document.getElementById('skills-container');
const generalArray = ["JavaScript","SASS","MongoDB","C#",".Net","React","CSS","Bootstrap","NodeJS","Express"];
const numBalls = 10;
console.log(container);
const balls = [];

function getRandomPosition(max) {
  return Math.floor(Math.random() * max);
}

function getRandomDirection() {
  return Math.random() > 0.5 ? 1 : -1;
}

let skillsArrayIndex = 0
function createBall() {
  // Create a new ball element
  const ball = document.createElement('div');
  ball.setAttribute('backgroundColor', `none`);

  ball.classList.add('ball');

  // Set a random position for the ball

  let x = getRandomPosition(container.offsetWidth);
  console.log(container.offsetHeight);
  let y = getRandomPosition(container.offsetHeight);
  let z = getRandomPosition(500);
  ball.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;

  // Set a random velocity for the ball
  let dx = getRandomDirection();
  let dy = getRandomDirection();
  let dz = getRandomDirection();

  // Set the text of the ball
  ball.innerHTML = generalArray[skillsArrayIndex % generalArray.length];
  skillsArrayIndex++;


 
  // Add the ball to the container and the balls array
  container.appendChild(ball);
  balls.push({element: ball, position: {x, y, z, dx, dy, dz}});
}

function createBalls(num) {
  for (let i = 0; i < num; i++) {
    createBall();
  }
}

function animate() {
    balls.forEach(ball => {
      // Get the current position and direction of the ball
      let {x, y, z, dx, dy, dz} = ball.position;
  
      // Update the position based on the direction
      x += dx;
      y += dy;
      z += dz;
  
      // Check if the ball hit a wall and reverse its direction if necessary
      if (x <= 0) {
        x = 0;
        dx = Math.abs(dx);
      }
      if (x >= container.offsetWidth - ball.element.offsetWidth) {
        x = container.offsetWidth - ball.element.offsetWidth;
        dx = -Math.abs(dx);
      }
      if (y <= 0) {
        y = 0;
        dy = Math.abs(dy);
      }
      if (y >= container.offsetHeight - ball.element.offsetHeight) {
        y = container.offsetHeight - ball.element.offsetHeight;
        dy = -Math.abs(dy);
      }
      if (z <= -500) {
        z = -500;
        dz = Math.abs(dz);
      }
      if (z >= 500) {
        z = 500;
        dz = -Math.abs(dz);
      }
      // Update the ball's position and direction
      ball.element.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
      ball.position = {x, y, z, dx, dy, dz};
    });
    balls.forEach((ball) => {
        ball.element.innerHTML
    })
    requestAnimationFrame(animate);
  }
  

createBalls(numBalls);
animate();

// -------------------- Error Code -----------------------

// get form and input elements
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

// add form submission event listener
form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent default form submission behavior

  // check that email is valid
  const email = emailInput.value;
  if (!isValidEmail(email)) {
    emailError.textContent = 'Please enter a valid email address.';
    return;
  } else {
    emailError.textContent = '';
  }

  // check that message is at least 10 characters
  const message = messageInput.value;
  if (message.length < 10) {
    messageError.textContent = 'Please enter a message that is at least 10 characters long.';
    return;
  } else {
    messageError.textContent = '';
  }

  // if inputs are valid, send form content to email client
  const subject = `New contact form submission from ${nameInput.value}`;
  const body = `Email address: ${email}\nMessage: ${message}`;
  const mailToLink = `mailto:paliemmanuel@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailToLink;
});

// function to validate email address
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
