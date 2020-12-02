# notesapp

This is a notes management app which fetch commands through terminal and parse it through yargs npm module.
For stoage of data JASON file is used

Commands - 

#Adding notes
node app.js --title="Heading 1" --body="This is a note"

#List of all notes
node app.js listNotes

#Reading noted of provided title
node app.js read title

#Removing notes of provided title
node app.js remove title
