import Head from "next/head";
import { CounterCaner } from "../features/counterCaner.js";

export default function Home() {
  return (
    <div className="App">
      <CounterCaner />
    </div>
  );
}
