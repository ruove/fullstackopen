import { useState } from "react";

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  return (
    <div>
      <div>
        {left}
        <button onClick={() => setLeft(left + 1)}>
          left
        </button>
        <button onClick={() => setRight(right + 1)}>
          right
        </button>
        {right}
      </div>
    </div>
  )
}

// : kurssitiedot : 
// const App = () => {
//   const course = {
//   name:  'Half Stack application development',
//   parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   return(
//     <div>
//       <Header course={course.name} />
//       <Content parts={course.parts} />
//       <Total parts={course.parts} />
//     </div >
//   )
// }

// const Header = ({ course }) => {
//   return (
//     <div>
//       <h1>{course}</h1>
//     </div>
//   )
// }

// const Content = ({ parts }) => {
//   return (
//     <div>
//       <Part part={parts[0].name} exercises={parts[0].exercises} />
//       <Part part={parts[1].name} exercises={parts[1].exercises} />
//       <Part part={parts[2].name} exercises={parts[2].exercises} />
//     </div>
//   )
// }

// const Part = ({ part, exercises }) => {
//   return (
//     <div>
//       <p>
//         {part} {exercises}
//       </p>
//     </div>
//   )
// }

// const Total = ({ parts }) => {
//   return (
//     <div>
//       <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
//     </div>
//   )
// }

export default App;