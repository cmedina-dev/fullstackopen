const Header = (course) => {
  return (
    <div>
      <h1>
        {course.name}
      </h1>
    </div>
  )
}

const Content = (exercises) => {
  return (
    <div>
      <Part part={exercises.parts[0]}/>
      <Part part={exercises.parts[1]}/>
      <Part part={exercises.parts[2]}/>
    </div>
  )
}

const Total = (exercises) => {
  const sum = exercises.parts[0].exercises + 
              exercises.parts[1].exercises + 
              exercises.parts[2].exercises;

  return (
    <div>
        <p>Number of exercises {sum}</p>
    </div>
  )
}

const Part = (exercises) => {
  return (
    <div>
      <p>
        {exercises.part.name} {exercises.part.exercises}
      </p>
    </div>
  )
}

const App = () => {
  // const-definitions
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default App;
