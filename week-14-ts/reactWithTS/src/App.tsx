import "./App.css";

interface TodoType {
description: string;
status: string;
}
interface TodoInput {
  todo: TodoType;
}

function App( todo: TodoInput) {
  return (
    <>
      <div className='h-screen bg-slate-600 flex justify-center items-center text-red-400'>
        Hello there
        <br />
        Your todos are:
        <br />
        1: {todo?.description }, and It is {todo?.status} <br />
        {/* 2: {todo[2]?.description }, and It is {todo[2]?.status} <br /> */}
      </div>
    </>
  );
}

export default App;
