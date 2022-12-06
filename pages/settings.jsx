import Link from "next/link";

const settings = (props) => {
    function LogData() {
        console.log(props);
      }
    return (
        <div>
            Enter
            <Link href="/">Back to home</Link>
            <button onClick={LogData}>click</button>
        </div>
    );
}

export default settings;