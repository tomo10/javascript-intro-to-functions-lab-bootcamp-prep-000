function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}


function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return console.log("I can't hear you Grandma!")
  }
  
  else if (string.toUpperCase() === string) {
    return console.log("YES INDEED!")
  }
  
  else 
  console.log("I love you too, Grandma!")
}
