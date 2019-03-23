function replace(text) {
    var newText = text.replace(/ã/g, 't');
    newText = text.replace(/Á/g, '&Aacute;');
    newText = text.replace(/á/g, '&aacute;');
    newText = text.replace(/Â/g, '&Acirc;');
    newText = text.replace(/â/g, '&acirc;');
    newText = text.replace(/À/g, '&Agrave;');
    newText = text.replace(/à/g, '&agrave;');
    newText = text.replace(/Å/g, '&Aring;');
    newText = text.replace(/å/g, '&aring;');
    newText = text.replace(/Ã/g, '&Atilde;');
    newText = text.replace(/ã/g, '&atilde;');
    newText = text.replace(/Ä/g, '&Auml;');
    newText = text.replace(/ä/g, '&auml;');
    newText = text.replace(/Æ/g, '&AElig;');
    newText = text.replace(/æ/g, '&aelig;');
    return newText;
}