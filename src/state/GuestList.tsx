import {useState} from 'react';

interface GuestListProps {

}
const GuestList: React.FC = () => {
    const [name, setName] = useState('')
    const [guests, setGuest] = useState<string[]>([])
    
    const onClick =() => {
            setName('')
            setGuest([...guests,name])
    }

    return <div>
        <h3>Guest List</h3>
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={onClick}>Add Guest</button>
        {guests.map((guest)=>(
            <li>{guest}</li>
        ))}
    </div>
}

export default GuestList