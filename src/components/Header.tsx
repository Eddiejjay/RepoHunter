import React from 'react'


const codeIcon = () => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 color-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke="#ffffff"strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
    )
}
const Header = () => { 
    return (
        
        <div className="bg-gray-800 p-3 flex justify-between items-center h-20">
            <div className="ml-4">{codeIcon()}</div>
            <h2 className ="text-white text-3xl">GitHub RepoHunter</h2>
            <div className = "invisible">{codeIcon()}</div>
            
        </div>
    )
}

export default Header

