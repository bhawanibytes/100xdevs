import { useEffect, useRef, useState } from "react";

// import { useState } from 'react'
function App() {
  const [ws, setws] = useState<WebSocket | null>(null);
  const [chat, setchat] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  function sendMessage() {
    const message = inputRef?.current?.value;
    if (ws && message !== undefined) {
      ws.send(message);
    }
  }
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    ws.onopen = () => {
      console.log(`conncetion established`);
      ws.send(`Hello server`);
    };

    ws.onmessage = (message) => {
      setchat((prevChat) => prevChat + `\n` + message.data)
    };

    setws(ws);
    console.log(ws);
    return () => ws.close();
  }, []);
  return (
    <>
      <div className='h-screen w-screen bg-slate-600 flex flex-col justify-center items-center'>
        <div className='flex'>
          <input
            ref={inputRef}
            type='text'
            name=''
            id=''
            className='bg-white text-black'
          />{" "}
          <br />
          <button onClick={sendMessage}>Send</button>
          <br />
        </div>
        <div >{chat}</div>
      </div>
    </>
  );
}

export default App;
