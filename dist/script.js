// menu toggle 
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
})

// menu list toggle
const menuList = document.querySelector('.menu-list');

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("active");
})

// project details 
const projects = [
    // css projects 
    {
        name: 'Buttons',
        image: 'dist/img/buttons.png',
        sourceCode: 'https://github.com/Dinil-Thilakarathne/50-css-projects/tree/main/buttons',
        liveDemo: 'https://dinil-thilakarathne.github.io/50-css-projects/buttons/',
    },
    {
        name: 'Drop down menu',
        image: 'dist/img/drop-down-menu.png',
        sourceCode: 'https://github.com/Dinil-Thilakarathne/50-css-projects/tree/main/drop%20down%20menu',
        liveDemo: 'https://dinil-thilakarathne.github.io/50-css-projects/drop%20down%20menu',
    },
    {
        name: 'Sidebar Menu',
        image: 'dist/img/sidebar-menu.png',
        sourceCode: 'https://github.com/Dinil-Thilakarathne/50-css-projects/tree/main/Sidebar%20Menu',
        liveDemo: 'https://dinil-thilakarathne.github.io/50-css-projects/Sidebar%20Menu',
    },
    {
        name: 'Search Bar',
        image: 'dist/img/search-box.png',
        sourceCode: 'https://github.com/Dinil-Thilakarathne/50-css-projects/tree/main/Search%20Bar',
        liveDemo: 'https://dinil-thilakarathne.github.io/50-css-projects/Search%20Bar',
    },
    {
        name: 'Loaders',
        image: 'dist/img/loader.png',
        sourceCode: 'https://github.com/Dinil-Thilakarathne/50-css-projects/tree/main/loader',
        liveDemo: 'https://dinil-thilakarathne.github.io/50-css-projects/loader',
    },
    {
        name: 'Text Animation',
        image: 'dist/img/animated-text.png',
        sourceCode: 'https://github.com/Dinil-Thilakarathne/50-css-projects/tree/main/text%20animation',
        liveDemo: 'https://dinil-thilakarathne.github.io/50-css-projects/text%20animation',
    },
    {
        name: 'Profile Cards',
        image: 'dist/img/profile-card.png',
        sourceCode: 'https://github.com/Dinil-Thilakarathne/50-css-projects/tree/main/profile%20card',
        liveDemo: 'https://dinil-thilakarathne.github.io/50-css-projects/profile%20card',
    },
    {
        name: 'Product Cards',
        image: 'dist/img/product-card.png',
        sourceCode: 'https://github.com/Dinil-Thilakarathne/50-css-projects/tree/main/product%20card',
        liveDemo: 'https://dinil-thilakarathne.github.io/50-css-projects/product%20card',
    },
    {
        name: 'Pricing Cards',
        image: 'dist/img/pricing-cards.png',
        sourceCode: 'https://github.com/Dinil-Thilakarathne/50-css-projects/tree/main/pricing%20cards',
        liveDemo: 'https://dinil-thilakarathne.github.io/50-css-projects/pricing%20cards',
    },
    {
        name: 'Footers',
        image: 'dist/img/footer.png',
        sourceCode: 'https://github.com/Dinil-Thilakarathne/50-css-projects/tree/main/footer',
        liveDemo: 'https://dinil-thilakarathne.github.io/50-css-projects/footer',
    },
    {
        name: 'Flip Card',
        image: 'dist/img/flip-card.png',
        sourceCode: 'https://github.com/Dinil-Thilakarathne/50-css-projects/tree/main/flip%20card',
        liveDemo: 'https://dinil-thilakarathne.github.io/50-css-projects/flip%20card',
    },
    {
        name: 'Modal/Popup CSS',
        image: 'dist/img/modal-popup.png',
        sourceCode: 'https://github.com/Dinil-Thilakarathne/50-css-projects/tree/main/modal-popup',
        liveDemo: 'https://dinil-thilakarathne.github.io/50-css-projects/modal-popup',
    },
    {
        name: 'Survey Form',
        image: 'dist/img/survery-form.png',
        sourceCode: 'https://github.com/Dinil-Thilakarathne/50-css-projects/tree/main/survey%20form',
        liveDemo: 'https://dinil-thilakarathne.github.io/50-css-projects/survey%20form',
    },
    {
        name: 'Responsive Navbar',
        image: 'dist/img/responsive-nav-bar.png',
        sourceCode: 'https://github.com/Dinil-Thilakarathne/50-css-projects/tree/main/responsive%20navbar',
        liveDemo: 'https://dinil-thilakarathne.github.io/50-css-projects/responsive%20navbar',
    },
    {
        name: 'Animated Counter',
        image: 'dist/img/animated-loader.png',
        sourceCode: 'https://github.com/Dinil-Thilakarathne/50-css-projects/tree/main/animated%20loader',
        liveDemo: 'https://dinil-thilakarathne.github.io/50-css-projects/animated%20loader',
    },
    {
        name: 'Grid Layout',
        image: 'dist/img/grid-layout.png',
        sourceCode: 'https://github.com/Dinil-Thilakarathne/50-css-projects/tree/main/grid%20layout',
        liveDemo: 'https://dinil-thilakarathne.github.io/50-css-projects/grid%20layout',
    },
    {
        name: 'Animated Counter',
        image: 'dist/img/image-carsoule.png',
        sourceCode: 'https://github.com/Dinil-Thilakarathne/50-css-projects/tree/main/image%20carousel',
        liveDemo: 'https://dinil-thilakarathne.github.io/50-css-projects/image%20carousel',
    },

    // js projects 
    {
        name: 'Simple Calculator',
        image: 'dist/img/simple-calculator.png',
        sourceCode: 'https://github.com/Dinil-Thilakarathne/50-js-projects/tree/main/simple%20calculator',
        liveDemo: 'https://dinil-thilakarathne.github.io/50-js-projects/simple%20calculator/',
    },
    {
        name: 'To-do list',
        image: 'dist/img/tip-calculator.png',
        sourceCode: 'https://github.com/Dinil-Thilakarathne/50-js-projects/tree/main/todo%20app',
        liveDemo: 'https://dinil-thilakarathne.github.io/50-js-projects/todo%20app/',
    },
    {
        name: 'Tip Calculator',
        image: 'dist/img/todo-list.png',
        sourceCode: 'https://github.com/Dinil-Thilakarathne/50-js-projects/tree/main/tip%20calculator',
        liveDemo: 'https://dinil-thilakarathne.github.io/50-js-projects/tip%20calculator/',
    },
    {
        name: 'Age Calculator',
        image: 'dist/img/age-calculator.png',
        sourceCode: 'https://github.com/Dinil-Thilakarathne/50-js-projects/tree/main/age%20calculator',
        liveDemo: 'https://dinil-thilakarathne.github.io/50-js-projects/age%20calculator/',
    },
    {
        name: 'BMI Calculator',
        image: 'dist/img/bmi-calculator.png',
        sourceCode: 'https://github.com/Dinil-Thilakarathne/50-js-projects/tree/main/bmi%20calculator',
        liveDemo: 'https://dinil-thilakarathne.github.io/50-js-projects/bmi%20calculator/',
    },
    {
        name: 'Digital Clock',
        image: 'dist/img/digital-clock.png',
        sourceCode: 'https://github.com/Dinil-Thilakarathne/50-js-projects/tree/main/digital%20clock',
        liveDemo: 'https://dinil-thilakarathne.github.io/50-js-projects/digital%20clock/',
    },
    {
        name: 'Analog Clock',
        image: 'dist/img/analog-clock.png',
        sourceCode: 'https://github.com/Dinil-Thilakarathne/50-js-projects/tree/main/analog%20clock',
        liveDemo: 'https://dinil-thilakarathne.github.io/50-js-projects/analog%20clock',
    },
    {
        name: 'Alarm Clock',
        image: 'dist/img/alarm-clock.png',
        sourceCode: 'https://github.com/Dinil-Thilakarathne/50-js-projects/tree/main/alarm%20clock',
        liveDemo: 'https://dinil-thilakarathne.github.io/50-js-projects/alarm%20clock',
    },
    {
        name: 'Pomodoro Timer',
        image: 'dist/img/pomodoro-Timer.png',
        sourceCode: 'https://github.com/Dinil-Thilakarathne/50-js-projects/tree/main/pomodoro%20timer',
        liveDemo: 'https://dinil-thilakarathne.github.io/50-js-projects/pomodoro%20timer',
    },
    {
        name: 'Stopwatch',
        image: 'dist/img/stopwatch.png',
        sourceCode: 'https://github.com/Dinil-Thilakarathne/50-js-projects/tree/main/stopwatch',
        liveDemo: 'https://dinil-thilakarathne.github.io/50-js-projects/stopwatch)',
    },
    {
        name: 'Currency Converter',
        image: 'dist/img/currency-converter.png',
        sourceCode: 'https://github.com/Dinil-Thilakarathne/50-js-projects/tree/main/currency%20converter',
        liveDemo: 'https://dinil-thilakarathne.github.io/50-js-projects/currency%20converter',
    },
    {
        name: 'Length Converter',
        image: 'dist/img/length-converter.png',
        sourceCode: 'https://github.com/Dinil-Thilakarathne/50-js-projects/tree/main/length%20converter',
        liveDemo: 'https://dinil-thilakarathne.github.io/50-js-projects/length%20converter',
    },
    {
        name: 'Weight Converter',
        image: 'dist/img/length-converter.png',
        sourceCode: 'https://github.com/Dinil-Thilakarathne/50-js-projects/tree/main/weight%20converter',
        liveDemo: 'https://dinil-thilakarathne.github.io/50-js-projects/weight%20converter',
    },
    

    // coming soon 
    {
        name: 'Coming soon...',
        image: '',
        sourceCode: '',
        liveDemo: '',
    }
  ];
  
  const projectList = document.querySelector('.project-list');

// Function to shuffle the array
function shuffleArray(array) {
    for (let i = array.length - 2; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}
  
// Shuffle the items array
shuffleArray(projects);

// Loop through the products array and create product cards
projects.forEach((project) => {
    const card = document.createElement('div');
    card.classList.add('project-card');
  
    const image = document.createElement('img');
    image.src = project.image;
    image.alt = project.name;
    image.classList.add('project-img');
  
    const projectDetails = document.createElement('div');
    projectDetails.classList.add('project-details');

    const name = document.createElement('h3');
    name.textContent = project.name;
    name.classList.add('project-title')

    const taggroup = document.createElement('div');
    taggroup.classList.add('tag-gruop');

    const btngroup = document.createElement('div');
    btngroup.classList.add('btn-gruop');
  
    const sourceCodeBtn = document.createElement('a');
    sourceCodeBtn.textContent = 'Source code';
    sourceCodeBtn.setAttribute('href', project.sourceCode)
    sourceCodeBtn.setAttribute('target', '_blank')
    sourceCodeBtn.classList.add('source-code-btn')
  
    const liveDemoBtn = document.createElement('a');
    liveDemoBtn.textContent = 'Live Demo';
    liveDemoBtn.setAttribute('href', project.liveDemo)
    liveDemoBtn.setAttribute('target', '_blank')
    liveDemoBtn.classList.add('live-demo-btn')

    btngroup.appendChild(sourceCodeBtn);
    btngroup.appendChild(liveDemoBtn);

    projectDetails.appendChild(name);
    projectDetails.appendChild(btngroup)

    card.appendChild(image);
    card.appendChild(projectDetails)
  
    projectList.appendChild(card);
  });
  

// github star count 
const star = document.querySelectorAll('.star-count');

let starCount = 0;
star.textContent = starCount;

function starUp() {
    starCount ++
    star.forEach((starSpan) => {
        starSpan.textContent = starCount;
    })
    if(starCount == 42){
        clearInterval(timerInterval);
    }
}
function startTimer() {

    timerInterval = setInterval(starUp, 100);
}

document.addEventListener('DOMContentLoaded',startTimer);


// scroller reveal 
animateElement = (element,delay,distance,duration,origin) => {
    // Initialize ScrollReveal with options
    const sr = ScrollReveal({
        delay: delay,
        distance: distance,
        duration: duration,
        easing: 'ease',
        origin: origin
    });
  
    // Reveal the element
    sr.reveal(element);
}

// select all project cards 
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((project,index) => {
    animateElement(project,500 + index * 100,'500px',500,'bottom');
})