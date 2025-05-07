import { useState, useEffect } from "react";
import "./App.css";
import { Input } from "./Components/Input";
import { Letter } from "./Components/Letter";
import { Layout } from "./Components/Layout";

function App() {
  const [block, isBlock] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 4) {
      isBlock(false);
      document.body.classList.remove("ju");
    }
    console.log(block);
  }, [count]);

  if (block) {
    return (
      <Layout count={count}>
        <Input count={count} setCount={setCount} />
      </Layout>
    );
  }
  return <Letter />;
}

export default App;
