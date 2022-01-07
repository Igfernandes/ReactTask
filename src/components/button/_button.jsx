import './button.css';

const Button = ({text, handleBtn})=>{

    return (
        <>
            <button onClick={handleBtn}>{text}</button>
        </>
    )
}

export default Button;