class Character {
  constructor(name, charClass, level, health, image) {
    this.name = name;
    this.charClass = charClass;
    this.level = level;
    this.health = health;
    this.image = image;
  }

  attacked() {
    if (this.health >= 20) {
      this.health -= 20;
    } else {
      alert(`${this.name} has died.`);
    }
  }

  levelUp() {
    this.level += 1;
    this.health += 20;
  }
}

const snortleblat = new Character("Snortleblat", "Swamp Beast Diplomat", 5, 100, "https://andejuli.github.io/wdd131/character_card/snortleblat.webp");
const elariel = new Character("Elariel", "Sylvan Herald", 3, 80, "https://andejuli.github.io/wdd131/character_card/elariel.webp"); // example image

const characters = [snortleblat, elariel];

const container = document.querySelector('.card-container');

characters.forEach((char, index) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <img class="image" src="${char.image}" alt="${char.name}">
    <div class="name">${char.name}</div>
    <div class="stats">
    <p><strong>Class:</strong> <span id="class-${index}">${char.charClass}</span></p>
    <p><strong>Level:</strong> <span id="level-${index}">${char.level}</span></p>
    <p><strong>Health:</strong> <span id="health-${index}">${char.health}</span></p>
    </div>
    <div class="buttons">
    <button id="attacked-${index}">Attack</button>
    <button id="levelup-${index}">Level Up</button>
    </div>
  `;
  container.appendChild(card);

  // Event Handlers
  document.querySelector(`#attacked-${index}`).addEventListener('click', () => {
    char.attacked();
    updateStats(char, index);
  });

  document.querySelector(`#levelup-${index}`).addEventListener('click', () => {
    char.levelUp();
    updateStats(char, index);
  });
});

function updateStats(character, index) {
  document.querySelector(`#level-${index}`).textContent = character.level;
  document.querySelector(`#health-${index}`).textContent = character.health;
}


