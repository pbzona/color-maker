import convert from 'color-convert';

function getStepSizes (a, b, numberOfSteps) {
  return b.map((n, i) => {
    return parseInt((n - a[i]) / (numberOfSteps - 1));
  });
}

function createSteps (startingRGB, stepSizes, numberOfSteps) {
  const a = [];
  for (let i = 1; i <= numberOfSteps - 2; i++) {
    const step = [];
    startingRGB.forEach((c, idx) => {
      step.push(c + stepSizes[idx] * i);
    });
    a.push(step);
  }
  return a;
}

function stepsToHex (steps) {
  return steps.map(s => {
    return `#${convert.rgb.hex(s)}`;
  });
}

export default function (colorA, colorB, numberOfSteps) {
  if (numberOfSteps <= 2) {
    return [];
  }

  const a = convert.hex.rgb(colorA);
  const b = convert.hex.rgb(colorB);
  const stepSizes = getStepSizes(a, b, numberOfSteps);
  const steps = createSteps(a, stepSizes, numberOfSteps);

  return stepsToHex(steps);
} 