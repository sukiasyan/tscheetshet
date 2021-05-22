import {useState} from 'react';

const users = [
    {name: 'Sarah', age: 20},
    {name: 'Hakob', age: 20},
    {name: 'Sara', age: 20},
]
const UserSearch: React.FC = () => {
    const [name, setName] = useState('')
    const [user, setUser] = useState<{name: string, age: number} | undefined>()


    const onClick = () =>{
        const foundUser = users.find((user) =>{
            return user.name === name
        })

        setUser(foundUser);
        
    }

    return <div>
        <h3>User Search</h3>
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={onClick}>Find Guest</button>
        <div>
            {user?.name}
            {user?.age}
        </div>
        </div>
    
}

export default UserSearch