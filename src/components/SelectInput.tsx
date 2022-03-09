import React from 'react'

interface Props {
    onChange: (value: string) => void;
}

const SelectInput = ({ onChange }: Props) => {
    return (
        <label>
            <span>Filter:</span>
            <select className='select' onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}>
                <option value={'http://localhost:3000/trips'}>All Trips</option>
                <option value={'http://localhost:3000/trips?loc=Europe'}>European Trips</option>
            </select>
        </label>
    )
}

export default SelectInput;