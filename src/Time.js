function digitalClock(seconds) {
    const hours = Math.floor(seconds / 3600) % 24;
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formatTime = (time) => time.toString().padStart(2, '0');
 
    return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(remainingSeconds)}`;
   
}

// Examples
console.log(digitalClock(5025)); // "01:23:45"
console.log(digitalClock(61201)); // "17:00:01"
console.log(digitalClock(87000)); // "00:10:00"