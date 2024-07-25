
const ColorTextItem = ({color, setColor}) => {
    return (
        <form className="colorForm" onSubmit={(e) => e.preventDefault()}>
            <input 
                id='color'
                type="text"
                role='color-in-box'
                placeholder="Add color name"
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />

        </form>
    )
}

export default ColorTextItem
