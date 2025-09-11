export default function Evesnts(){
    function handleClick(){
        alert("I clicked")
    }
    return (
    <>
    <button onClick={handleClick}>Click Me</button>
    </>
    );
}