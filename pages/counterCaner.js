import { useState } from "react";

const CounterCaner = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Start Counting!");

  function handleAddCounter() {
    setCount(count + 1);
    setText("Added 1");
  }

  function handleRemoveCounter() {
    setCount(count - 1);
    setText("Removed 1");
  }

  function handleResetCounter() {
    setCount(0);
    setText("Resetted");
  }

  return (
    <div
      style={{
        backgroundColor: "grey",
        borderStyle: "solid",
        borderRadius: 30,
        borderColor: "black",
        marginRight: "30%",
        marginLeft: "30%",
      }}
    >
      <p
        style={{
          fontSize: 40,
          backgroundColor: "grey",
          borderRadius: 10,
          borderColor: "black",
          margin: 10,
          paddingTop: 10,
        }}
      >
        Counter: {count}
      </p>
      <button
        style={{
          borderRadius: 5,
          backgroundColor: "red",
          borderStyle: "solid",
          borderColor: "black",
          margin: 10,
          paddingLeft: 20,
          paddingRight: 20,
          fontSize: 30,
        }}
        onClick={handleRemoveCounter}
      >
        -
      </button>
      <button
        style={{
          borderRadius: 5,
          backgroundColor: "",
          borderStyle: "solid",
          borderColor: "black",
          margin: 10,
          paddingLeft: 20,
          paddingRight: 20,
          fontSize: 30,
        }}
        onClick={handleResetCounter}
      >
        0
      </button>
      <button
        style={{
          borderRadius: 5,
          backgroundColor: "green",
          borderStyle: "solid",
          borderColor: "black",
          margin: 10,
          paddingLeft: 20,
          paddingRight: 20,
          fontSize: 30,
        }}
        onClick={handleAddCounter}
      >
        +
      </button>
      <p
        style={{
          fontSize: 20,
          backgroundColor: "grey",
          borderRadius: 10,
          margin: 10,
          paddingBottom: 10,
        }}
      >
        {text}
      </p>
    </div>
  );
};

export { CounterCaner };
