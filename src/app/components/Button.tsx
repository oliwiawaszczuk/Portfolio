type ButtonProps = {
    onClick: () => void;
}

const Button = (onClick: () => void) => {
    return (
        <div onMouseDown={onClick} className="w-100 h-100 bg-amber-200">

        </div>
    )
}

export default Button;