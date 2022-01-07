import React,{useState} from "react";

export default function CreateArea(props){

    const [note,setNote] = useState({
        title:"",
        content:""
    })

    function handleChange(event){
        const value = event.target.value;
        const name = event.target.name
        setNote(function noteIt(prevValue){
            if(name==="title"){
              return{
                title:value,
                content:prevValue.content
            }  
            }
            else if(name==="content"){
                return{
                    title:prevValue.title,
                    content:value
                }
            }
        })

    }

    function submitNote(event){
        
        props.onAdd(note)
        event.preventDefault();
    }
    return(

        <div>
        <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>+</button>
      </form>
        </div>


    )
}