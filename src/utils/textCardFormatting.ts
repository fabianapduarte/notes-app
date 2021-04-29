export function formatTextCard(text: string) {
  let newString = limitTextLength(text);
  
  return limitTextLines(newString);
}

export function limitTextLines(text: string) {
  const textLines = text.split("\n");

  if (textLines.length > 4) {
    let newText = "";

    for (let i = 0; i < 4; i++) {
      newText += textLines[i];
      
      if (i !== 3) {
        newText += "\n";
      }
    }

    return `${newText}...`;
  }

  return text;
}

export function limitTextLength(text: string) {
  if(text.length > 180) {
    return `${text.substr(0, 180)}...`;
  }
  return text;
}