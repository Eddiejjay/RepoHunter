import React, { useReducer, useContext, } from 'react'
import { Context } from '../state'


const ReposByUserPage = () => {

  const [{ reposByUser }, dispatch] = useContext(Context)

  return (
        <div>
        {reposByUser.map(repo => <li key = {repo.id}> <a href = {repo.html_url} >{repo.name}</a></li>)}
      </div>
    )
}

export default ReposByUserPage
