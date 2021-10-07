import React, { useContext } from 'react'
import { Switch } from '@headlessui/react'
import { Context, toggleEnabled } from '../state'


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Toggle() {
    const [{enabled}, dispatch] = useContext(Context);
 
    const  onChangeE = () => {
        dispatch(toggleEnabled(!enabled))

    }

    return (
        <div className="flex flex-col items-center m-5">
            <Switch
    
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                checked={enabled}
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                onChange= {onChangeE}
                className={`${
                    enabled ? 'bg-blue-600' : 'bg-gray-200'
                } relative inline-flex items-center h-6 rounded-full w-11`}
            >
                <span className="sr-only">Enable notifications</span>
                <span
                    className={`${
                        enabled ? 'translate-x-6' : 'translate-x-1'
                    } inline-block w-4 h-4 transform bg-white rounded-full`}
                />
            </Switch>
            {!enabled ? <p className ="text-xl"> Search by user</p>: <p className ="text-xl">Search by organization</p>}
            
            
        </div>

    )
}

export default Toggle