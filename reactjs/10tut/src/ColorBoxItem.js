
const ColorBoxItem = ({color}) => {
    return (
        <div>
            <canvas
                id='colorbox'
                width='300'
                height='200'
                style={{backgroundColor: color}}
                >
            </canvas>
        
            <p>
                {color}
            </p>
        
        </div>
    )
}

export default ColorBoxItem
