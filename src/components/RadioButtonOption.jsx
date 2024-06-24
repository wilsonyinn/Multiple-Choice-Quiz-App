export default function RadioButtonGroup({ value, selected, onButtonClick }) {
    return (
        <div>
            <label>
                <input type="radio" value="option1" checked={selected} onChange={onButtonClick} />
                {value}
            </label>
            <br /> 
        </div>
    );
}