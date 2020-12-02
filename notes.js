const fs = require('fs')
const chalk = require('chalk')

// adding note to JASON, require both title and body
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicates = notes.find((note) => note.title === title)

    if(!duplicates){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
    }
    else{
        console.log(chalk.red.inverse('Note title taken !'))
    }
}

// removing note from JSON only need a title
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !==title)

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note added ! '))
        saveNotes(notesToKeep)
    }
    else{
        console.log(chalk.red.inverse('No notes found'))
    }
}

// List of all notes
const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes are = '))
    
    note.forEach((note) =>{
        console.log(note.title)
    })
}

// Reading a note with provided title
const readNote = (title) => {
    const notes = loadNotes()

    const note = note.find((note) => note.title===title)

    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.red.inverse('Note not found'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.jason')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }   
    catch(e){
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}