let minRange = 1;
let maxRange = 118;

function generateRandomElement() {
  let atomicNumbers = Object.keys(periodicTable).filter(num => num >= minRange && num <= maxRange);
  if (document.getElementById('excludeF').checked) {
    atomicNumbers = atomicNumbers.filter(num => !(num >= 57 && num <= 71) && !(num >= 89 && num <= 103));
  }
  const randomAtomicNumber = atomicNumbers[Math.floor(Math.random() * atomicNumbers.length)];
  return randomAtomicNumber;
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('userAnswer').value);
  const correctAtomicNumber = parseInt(sessionStorage.getItem('correctAtomicNumber'));
  if (userAnswer === correctAtomicNumber) {
    document.getElementById('answer').innerText = 'Correct!';
  } else {
    document.getElementById('answer').innerText = 'Wrong. The correct answer is ' + correctAtomicNumber;
  }
  document.getElementById('checkButton').style.display = 'none';
  document.getElementById('nextButton').style.display = 'block';
}

function displayRandomElement() {
  document.getElementById('answer').innerText = '';
  document.getElementById('userAnswer').value = '';
  document.getElementById('checkButton').style.display = 'block';
  document.getElementById('nextButton').style.display = 'none';
  const randomAtomicNumber = generateRandomElement();
  const elementName = periodicTable[randomAtomicNumber];
  document.getElementById('question').innerText = 'What is the atomic number of ' + elementName + '?';
  sessionStorage.setItem('correctAtomicNumber', randomAtomicNumber);
}

function updateRange() {
  minRange = parseInt(document.getElementById('minRange').value);
  maxRange = parseInt(document.getElementById('maxRange').value);
  displayRandomElement();
}

const periodicTable = {
  1: 'Hydrogen', 2: 'Helium', 3: 'Lithium', 4: 'Beryllium', 5: 'Boron', 6: 'Carbon', 7: 'Nitrogen', 8: 'Oxygen', 9: 'Fluorine', 10: 'Neon',
  11: 'Sodium', 12: 'Magnesium', 13: 'Aluminum', 14: 'Silicon', 15: 'Phosphorus', 16: 'Sulfur', 17: 'Chlorine', 18: 'Argon', 19: 'Potassium', 20: 'Calcium',
  21: 'Scandium', 22: 'Titanium', 23: 'Vanadium', 24: 'Chromium', 25: 'Manganese', 26: 'Iron', 27: 'Cobalt', 28: 'Nickel', 29: 'Copper', 30: 'Zinc',
  31: 'Gallium', 32: 'Germanium', 33: 'Arsenic', 34: 'Selenium', 35: 'Bromine', 36: 'Krypton', 37: 'Rubidium', 38: 'Strontium', 39: 'Yttrium', 40: 'Zirconium',
  41: 'Niobium', 42: 'Molybdenum', 43: 'Technetium', 44: 'Ruthenium', 45: 'Rhodium', 46: 'Palladium', 47: 'Silver', 48: 'Cadmium', 49: 'Indium', 50: 'Tin',
  51: 'Antimony', 52: 'Tellurium', 53: 'Iodine', 54: 'Xenon', 55: 'Cesium', 56: 'Barium', 57: 'Lanthanum', 58: 'Cerium', 59: 'Praseodymium', 60: 'Neodymium',
  61: 'Promethium', 62: 'Samarium', 63: 'Europium', 64: 'Gadolinium', 65: 'Terbium', 66: 'Dysprosium', 67: 'Holmium', 68: 'Erbium', 69: 'Thulium', 70: 'Ytterbium',
  71: 'Lutetium', 72: 'Hafnium', 73: 'Tantalum', 74: 'Tungsten', 75: 'Rhenium', 76: 'Osmium', 77: 'Iridium', 78: 'Platinum', 79: 'Gold', 80: 'Mercury',
  81: 'Thallium', 82: 'Lead', 83: 'Bismuth', 84: 'Polonium', 85: 'Astatine', 86: 'Radon', 87: 'Francium', 88: 'Radium', 89: 'Actinium', 90: 'Thorium',
  91: 'Protactinium', 92: 'Uranium', 93: 'Neptunium', 94: 'Plutonium', 95: 'Americium', 96: 'Curium', 97: 'Berkelium', 98: 'Californium', 99: 'Einsteinium', 100: 'Fermium',
  101: 'Mendelevium', 102: 'Nobelium', 103: 'Lawrencium', 104: 'Rutherfordium', 105: 'Dubnium', 106: 'Seaborgium', 107: 'Bohrium', 108: 'Hassium', 109: 'Meitnerium', 110: 'Darmstadtium',
  111: 'Roentgenium', 112: 'Copernicium', 113: 'Nihonium', 114: 'Flerovium', 115: 'Moscovium', 116: 'Livermorium', 117: 'Tennessine', 118: 'Oganesson'
};

displayRandomElement();
