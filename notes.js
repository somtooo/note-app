const fs = require('fs');
const chalk = require('chalk');


const addNote = (title, body) =>{
    let notes = loadNotes();
    const duplicateNotes = notes.find((note) => note.title === title);
    debugger
    if (!duplicateNotes){
        notes.push({
            title:title,
            body:body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'))
    }else {
        console.log(chalk.red.inverse('Note title taken!'))
    }

};

const removeNote = function (title) {
    let notes = loadNotes();
    const noteToRemove = notes.filter(function(note){
        return note.title === title
    });
    if (noteToRemove.length !== 0){
        notes.pop();
        saveNotes(notes);
        console.log(chalk.green.inverse("Note with title = " + title + "has been removed"))
    }else {
        console.log(chalk.red.inverse("No note with title = " + title + " was found"));
    }
};

const listNotes = () =>{
    const notesToList = loadNotes();
    if (notesToList.length > 0){
        notesToList.forEach((notes)=>console.log(chalk.green.inverse(notes.title)))
    }else {
        console.log(chalk.red.inverse("There are no notes to list"))
    }


};


const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = function(){

    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    }catch (e) {
        return []
    }

};

const readNote = (title) => {
    const noteToRead = loadNotes().find((note) => note.title === title );
    if (noteToRead){
        console.log(chalk.green.inverse(noteToRead.title), '\n' + noteToRead.body)
    }else{
        console.log(chalk.red.inverse("No notes to read"))
    }

};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};