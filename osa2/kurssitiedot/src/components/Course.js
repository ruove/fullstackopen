const Course = ({ course }) => {
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }
  
  const Header = ({ course }) => {
    return (
      <div>
        <h1>{course}</h1>
      </div>
    )
  }
  
  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map(part =>
          <Part key={part.id} part={part.name} exercises={part.exercises} />
        )}
  
      </div>
    )
  }
  
  const Part = ({ part, exercises }) => {
    return (
      <div>
        <p>
          {part} {exercises}
        </p>
      </div>
    )
  }
  
  const Total = ({ parts }) => {
    // let exerciseTotal = 0;
    // for (let i = 0; i < parts.length; i++) {
    //   exerciseTotal += parts[i].exercises;
    // }
  
    const exerciseTotal = parts.map(part => part.exercises)
      .reduce((a, b) => {
        console.log('accumulator', a, 'current', b)
        return a + b;
      }, 0);
  
    return (
      <div>
        <p><b>Total of {exerciseTotal} exercises</b></p>
      </div>
    )
  }

export default Course;