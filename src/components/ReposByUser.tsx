/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router';
import { baseUrl } from '../constants';
import {  setReposByUser} from '../state'
import axios from 'axios'
import { Context } from '../state'





const ReposByUser = () => {
    const { user } = useParams<{ user: string }>();
    const [{reposByUser}, dispatch] = useContext(Context);
    const TOKEN:string|undefined= process.env.REACT_APP_TOKEN
    console.log('token', TOKEN)

    useEffect(() => {
        const fetchReposByUser = async () => {
            const { data } = await axios.get(

                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                `${baseUrl}/users/${user}/repos`, { 'headers': { 'Authorization': `token ${TOKEN}` }});
            dispatch(setReposByUser(data));
        }
        void fetchReposByUser()
    }
    , [user, dispatch])


    const linkIcon = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
        )}


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
                                        {linkIcon()} Name 
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

export default ReposByUser


