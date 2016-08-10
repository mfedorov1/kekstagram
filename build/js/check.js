function getMessage(a , b) {
  var result="";
  if (typeof(a) === "boolean") {
   if (a) {
      result = "Переданное GIF-изображение анимировано и содержит " +b +" кадров";
    } else {
     result = "Переданное GIF-изображение не анимировано";
    }
  } 
  if (typeof a === "number") {
    result = "Переданное SVG-изображение содержит " + a + " объектов и " +(b*4) +" атрибутов";
  }
  if (typeof a === "object" &&  a ) { 
    var amountOfRedPoints = a.reduce(function(sum, current) {
      return sum + current;
    }, 0);
    result = "Количество красных точек во всех строчках изображения: " + amountOfRedPoints;
    if (typeof b === "object" && b ) { 
      var artifactsSquare = a.reduce(function(sum, current, i) {
        return sum + (current * b[i]);
      }, 0);
      result = "Общая площадь артефактов сжатия: " + artifactsSquare + " пикселей";
      }
  }
  return result;  
}