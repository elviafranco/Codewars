//Create a function which answers the question "Are you playing banjo?". If the name starts with the letter "R" or lower case "r", return a string that takes a name as its only argument and returns name + " plays banjo". Otherwise return name + " does not play banjo". Names given are always valid strings!

function areYouPlayingBanjo(name) {
    if (typeof name === 'string' && name[0] === 'R' || name[0] === 'r') {
      return name + " plays banjo";
    } else {
      return name + " does not play banjo";
    }
  }
  
  areYouPlayingBanjo('elvia'); // returns "elvia does not play banjo"