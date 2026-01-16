function Greeting(){
    const name = "ramit";
    return(
        <div>
            <h3>Hello! I am a child component {name}</h3>
            <p>I live in a seperate file child Greeting.jsx.</p>
        </div>
    );
}

export default Greeting;