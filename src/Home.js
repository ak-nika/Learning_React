import { useState } from "react"

const Home = () => {
    // let name = 'Luigi';
    const [name, setName] = useState('Luigi');

    function handleClick(){
        setName('Mario');
    }

    function handleClickAgain(name){
        console.log("hello " + name);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name }</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClickAgain('Mario')}>Click me again</button>
        </div>
    );
}
 
export default Home;