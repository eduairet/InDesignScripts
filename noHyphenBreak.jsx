// Desarrollado por Eduardo Aire Torres 2021
// eduairet.com

var document = app.activeDocument; // Selector del documento actual
var documentStories = document.stories.everyItem(); // Selector de todas las historias del documento
var documentLines = documentStories.lines.everyItem().contents; // Selector de todas las líneas del documento

for (var line in documentLines){ // Hacemos un bucle en las líneas del documento
    var currentLine = documentStories.lines[line]; // Variable para línea de texto en curso.
        if (
            currentLine.insertionPoints[-1].contents !== '/n' ||
            currentLine.insertionPoints[-1].contents !== '/r' ||
            currentLine.insertionPoints[-1].contents !== SpecialCharacters.DISCRETIONARY_LINE_BREAK
            ){ // Solo aplicar el salto de línea si el caracter no es un salto de línea
                currentLine.insertionPoints[-1].contents = SpecialCharacters.DISCRETIONARY_LINE_BREAK; // Aplicar salto de línea
        }
}