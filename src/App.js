import React,{useState} from 'react';
import './App.css';
import Head from './header';
import Footer from './footer';
import CreateArea from './CreateArea';
import Note from './note';

function App() {

  const[notes,setNoteItem]= useState([])
  function addNote(notes){
        setNoteItem(function noted(prevNote){
          return[...prevNote,notes]
        });
  }

  function deleteNote(id){
        
        setNoteItem(function del(prevsNote){
          return prevsNote.filter((items,index)=>{
            return index !== id;
          })

        })
  }
  return (
    <>
      <Head/>
      <CreateArea
      onAdd={addNote}
      />
     {notes.map((itemNote,index)=>{
        return(<Note 
          key={index}
          id={index}
         title={itemNote.title}
         content={itemNote.content}
         onDelete={deleteNote}
         />) 
      })} 
      <Footer/>
      </>
    
  );
}

export default App;
