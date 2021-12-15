import Head from "next/head";
import { CounterCaner } from "./counterCaner.js";

export default function Home() {
  return (
    <div className="App">
      <CounterCaner />
    </div>
  );
}
