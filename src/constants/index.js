const hrMappings = {
  0: 'twelve', 1: 'one', 2: 'two', 3: 'three', 4: 'four',
  5: 'fivehr', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
  10: 'tenhr', 11: 'eleven', 12: 'twelve'
};

const minMappings = {
  5: ['five', 'minutes', 'past'], 10: ['ten', 'minutes', 'past'],
  15: ['quarter', 'past'], 20: ['twenty', 'minutes', 'past'],
  25: ['twenty', 'five', 'minutes', 'past'],
  30: ['half', 'past'], 35: ['twenty', 'five', 'minutes', 'to'],
  40: ['twenty', 'minutes', 'to'], 45: ['quarter', 'to'],
  50: ['ten', 'minutes', 'to'], 55: ['five', 'minutes', 'to'], 0: ['oclock']
};

export {hrMappings, minMappings};
