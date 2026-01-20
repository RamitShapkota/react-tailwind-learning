// Button.jsx
function Button({ bgColor, onClick }) {
    return (
        <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white text-center capitalize"
            style={{ backgroundColor: bgColor }}
            onClick={onClick} // This calls the function passed from App
        >
            {bgColor}
        </button>
    );
}

export default Button;