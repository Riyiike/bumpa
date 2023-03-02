// this is needed for highlighting the parts of the
// country name that matches with the search
export default function namePieces(str, match) {
    str = str.toLowerCase();
    match = match.toLowerCase();
    var pieces = [];
    var index,
      pos = 0;
  
    while ((index = str.indexOf(match, pos)) >= 0) {
      if (pos !== index) {
        pieces.push(str.substr(pos, index - pos));
      }
      pieces.push(match);
      pos = index + match.length;
    }
    if (pos < str.length) {
      pieces.push(str.substr(pos));
    }
    return pieces;
  }