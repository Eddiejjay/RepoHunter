import React, { useState } from 'react'
import {
    useHistory
} from "react-router-dom"

const Search = () => {
    const [searchField, setSerachField] = useState('')
    const history = useHistory()


    const handleSearchClick = () => {
        if(!searchField) {
            window.alert("You need to type search text")
        } else {
            history.push(`/${searchField}/repos`)
        }}
    const handleKeypress = (event: { key: string }) => {
        if (event.key === 'Enter') {
            void handleSearchClick()
        }
    }
    const searchIcon = () =>{
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        )
    }
    return (
        <div className="flex justify-center items-center m-16 gap-2.5">
            <div className="">{searchIcon()}</div>
            <input onChange = {(e) => setSerachField(e.target.value)} onKeyPress={handleKeypress} className="bg-gray-200 h-10 w-1/4 hover:bg-blue-100 rounded-lg"placeholder ="Search repositories by username"/>
            <button className="px-1 h-8 rounded-lg bg-gray-800 text-white hover:bg-blue-100 hover:text-black border-double border-pink-900"onClick = {handleSearchClick}>Search</button>
        </div>
    )
}

export default Search
