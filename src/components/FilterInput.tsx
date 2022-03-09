interface Props {
    onClick: (value: string) => void;
}

const FilterInput = ({ onClick }: Props) => {
    return (
        <div className='filters'>
            <button onClick={() => onClick('http://localhost:3000/trips')}>All Trips</button>

            <button onClick={() => onClick('http://localhost:3000/trips?loc=Europe')} >European Trips</button>
        </div>
    )
}

export default FilterInput;