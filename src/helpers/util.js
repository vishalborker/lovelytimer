const getCurrentMinutesHrs = () => {
    const t = new Date();
    let hr = t.getHours(), min = t.getMinutes();
    const rem = min % 5;
    if (hr > 12) {
      hr = hr - 12;
    }
    if (min > 30) {
      hr = hr === 11 ? 0 : hr + 1;
    }
    if ( rem > 0) { 
      min = min - rem;
    }
    return [min , hr];
}

export { getCurrentMinutesHrs };