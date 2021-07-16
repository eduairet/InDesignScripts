// This script exports the same page of all the documents open in the app to the desktop

// User settings
// _________________________________________________________

var pageToExport = 1; // 0 indexed it ignores doc numbering 
var exportRes = 72; // PNG resolution
var antiAliasing = true; // Toggle anti alias
var pngQual = PNGQualityEnum.MAXIMUM; // PNG export quality
var bgTransparency = false; // PNG export transparency

// _________________________________________________________

// Save all the open documents in inDesign in a variable
var documents = app.documents
// Go through each document
for (var i=0; i<documents.length; i++){
    // Save the current document in a variable
    var currentDocument = documents[i];
    // This will be your output name, I'm using the file name,
    // and cleaning the InDesign extension from it with the replace method
    var myBaseName = currentDocument.name.replace('.indd', '');
    // PNG output options taken from the user settings.
    with(app.pngExportPreferences){
        pageString = currentDocument.pages.item(pageToExport).name; // Page to export
        pngExportRange = PNGExportRangeEnum.EXPORT_RANGE; // Activate page range export
        antiAlias = antiAliasing; // Anti alias taken from user settings variable
        exportResolution = exportRes; // Resolution taken from user settings variable
        pngQuality = pngQual; // PNG quality taken from user settings variable
        transparentBackground = bgTransparency; // Background transparency taken from user settings variable
    }
    // Now export the document. You'll have to fill in your own file path.
    myFilePath = Folder.desktop + "/portadas/" + myBaseName + ".png"; // Define your path
    myFile = new File(myFilePath); // Put your path in a new file
    // exportFile (format:Varies ExportFormat String, to:File, [showingOptions:Boolean=Boolean]);
    currentDocument.exportFile(ExportFormat.PNG_FORMAT, myFile, false);
}
