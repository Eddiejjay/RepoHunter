/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useContext } from 'react'
import axios from 'axios'
import LinkIcon from './LinkIcon';
import { useParams } from 'react-router';
import { baseUrl } from '../constants';
import {  setReposByUser, Context, setErrorMessage  } from '../state'


const Repos = () => {
    const { user } = useParams<{ user: string }>();
    const [{reposByUser, enabled}, dispatch] = useContext(Context);
    const TOKEN:string|undefined= process.env.REACT_APP_TOKEN
    const url = !enabled ?  `${baseUrl}/users/${user}/repos?per_page=100&type=owner` : `${baseUrl}/orgs/${user}/repos?per_page=100&type=owner`
    const axiosGetWithToken = async () => await axios.get(url, { 'headers': { 'Authorization': `token ${TOKEN}` }})
    const axiosGetWithoutToken = async () => await axios.get(url)

    useEffect(() => {
        const fetchReposByUser = async () => {
            try {
                const { data }   = TOKEN ? await axiosGetWithToken() : await axiosGetWithoutToken()
                dispatch(setReposByUser(data));
            }catch(e:any){
                console.error(e)
                dispatch(setErrorMessage(e.message))
            }}
        void fetchReposByUser()
    }
    , [user, dispatch, enabled])

    return (
        <div className="flex flex-col container mx-auto " >
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200 h-1/5">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex gap-3"
                                    >
                                        <LinkIcon/> Name 
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                Created at
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                Last update
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {reposByUser.map((repo) => (
                                    <tr key={repo.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="ml-4 ">
                                                    <div className="text-sm font-medium text-gray-900 "><a target= "_blank" href = {repo.html_url} rel="noreferrer">{repo.name}</a></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{new Date(repo.created_at).toLocaleString()}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{new Date(repo.updated_at).toLocaleString()}</div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Repos


