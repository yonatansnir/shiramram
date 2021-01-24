const Input = ({ title, require, name, type, placeholder, value, handleChange }) => (
    <div>
        <h4>{title}<span>{require ? '*' : ''}</span></h4>
        <input name={name} required={require} type={type} value={value} placeholder={placeholder} onChange={handleChange} />
    </div>
)

export default Input;