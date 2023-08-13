import { NoteData, Tag } from "./App";
import { NoteForm } from "./NoteForm";

type NewNoteProps ={
    onSubmit:(data:NoteData)=>void
    onAddTag :(tag:Tag)=>void
    availibleTags:Tag[]
}

export function NewNote({onSubmit,onAddTag ,availibleTags}:NewNoteProps){
    return <>
    
    <h1 className="mb-4">New Note</h1>
    <NoteForm onSubmit={onSubmit} onAddTag = {onAddTag} availableTags={availibleTags}/>
    </>
}