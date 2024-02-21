import { useState } from "react";

function Tamrin() {
  const [average, setAverage] = useState();
  const [Username, setUsername] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const averageHandler = (e) => {
    const average = e.target.value;
    setAverage(average);
  };

  const usernameHandler = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const clickHandler = () => {
    setIsClicked(true);
  };

  const averageNumberHandler = () => {
    if (average >= 18) {
      return "(awli)";
    } else if (average >= 10 && average <= 17) {
      return "(normal)";
    } else if (average <= 10) {
      return "(low)";
    }
  };

  const myStyle = {
    display: "flex",
    gap: "10px",
  };

  if (!isClicked) {
    return (
      <>
        <input type="number" onChange={averageHandler} value={average} />
        <p>average</p>
        <input type="string" onChange={usernameHandler} value={Username} />
        <p>username</p>
        <hr />
        <div>
          <p>name: {Username}</p>
          <p>average: {average}</p>
        </div>
        <hr />
        <button onClick={clickHandler}>interact</button>
      </>
    );
  } else {
    return (
      <>
        <div style={myStyle}>
          <p>{Username}'s</p>
          <p> average: </p>
          <p>{average}</p>
          <p>{averageNumberHandler()}</p>
        </div>
      </>
    );
  }
}

export default Tamrin;
