function triangle(arg1, type1, arg2, type2) {
  function validateInput(value, type) {
    if (typeof value !== 'number' || value <= 0) {
      return `Invalid value for ${type}`;
    }
    return null;
  }

  function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
  }

  const error1 = validateInput(arg1, type1);
  const error2 = validateInput(arg2, type2);

  if (error1) {
    console.log(`Error: ${error1}`);
    return 'failed';
  }
  if (error2) {
    console.log(`Error: ${error2}`);
    return 'failed';
  }

  let sideA, sideB, hypotenuse, angleA, angleB;

  if (
    (type1 === 'leg' && type2 === 'hypotenuse') ||
    (type1 === 'hypotenuse' && type2 === 'leg')
  ) {
    sideA = (type1 === 'leg') ? arg1 : arg2;
    hypotenuse = (type1 === 'hypotenuse') ? arg1 : arg2;
    sideB = Math.sqrt(hypotenuse ** 2 - sideA ** 2);
    angleA = Math.asin(sideA / hypotenuse);
    angleB = Math.PI / 2 - angleA;
  } else if (
    (type1 === 'leg' && type2 === 'opposite angle') ||
    (type1 === 'opposite angle' && type2 === 'leg')
  ) {
    sideA = (type1 === 'leg') ? arg1 : arg2;
    const angleOpposite = degreesToRadians((type1 === 'opposite angle') ? arg1 : arg2);
    angleB = Math.PI / 2 - angleOpposite;
    hypotenuse = sideA / Math.sin(angleOpposite);
    sideB = Math.sqrt(hypotenuse ** 2 - sideA ** 2);
    angleA = Math.asin(sideA / hypotenuse);
  } else if (
    (type1 === 'leg' && type2 === 'adjacent angle') ||
    (type1 === 'adjacent angle' && type2 === 'leg')
  ) {
    sideA = (type1 === 'leg') ? arg1 : arg2;
    const angleAdjacent = degreesToRadians((type1 === 'adjacent angle') ? arg1 : arg2);
    angleA = Math.PI / 2 - angleAdjacent;
    hypotenuse = sideA / Math.cos(angleAdjacent);
    sideB = Math.sqrt(hypotenuse ** 2 - sideA ** 2);
    angleB = Math.asin(sideB / hypotenuse);
  } else if (
    (type1 === 'hypotenuse' && type2 === 'angle') ||
    (type1 === 'angle' && type2 === 'hypotenuse')
  ) {
    hypotenuse = (type1 === 'hypotenuse') ? arg1 : arg2;
    const angle = degreesToRadians((type1 === 'angle') ? arg1 : arg2);
    angleA = Math.asin(sideA / hypotenuse);
    angleB = Math.PI / 2 - angleA;
    sideA = hypotenuse * Math.sin(angle);
    sideB = hypotenuse * Math.cos(angle);
  } else {
    console.log('Error: Invalid combination of types.');
    return 'failed';
  }

  console.log('Triangle sides:');
  console.log(`a: ${sideA}`);
  console.log(`b: ${sideB}`);
  console.log(`c: ${hypotenuse}`);
  console.log(`alpha: (${angleA * (180 / Math.PI)} )`);
  console.log(`beta:  (${angleB * (180 / Math.PI)} )`);

  return 'success';
}

// Приклади використання функції
const result1 = triangle(60, "opposite angle", 5, "leg");
const result2 = triangle(7, "leg", 18, "hypotenuse");
const result3 = triangle(3, "leg", 45, "adjacent angle");
const result4 = triangle(5, "hypotenuse", 30, "angle");

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
