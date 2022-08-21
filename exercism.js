export const EXPECTED_MINUTES_IN_OVEN = 40;

export function remainingMinutesInOven(min) {
  let remainingTime = EXPECTED_MINUTES_IN_OVEN - min;
  return remainingTime;
}

export function preparationTimeInMinutes(layer) {
  let timeSpent = layer * 2;
  return timeSpent;
}
preparationTimeInMinutes(1);

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  let layerTime = preparationTimeInMinutes(numberOfLayers);

  return layerTime + actualMinutesInOven;
}
totalTimeInMinutes(1, 5);
