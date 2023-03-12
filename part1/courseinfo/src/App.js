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
      <Part part={exercises.part1}/>
      <Part part={exercises.part2}/>
      <Part part={exercises.part3}/>
    </div>
  )
}

const Total = (exercises) => {
  return (
    <div>
        <p>Number of exercises {exercises.count}</p>
    </div>
  )
}

const Part = (exercises) => {
  return (
    <div>
      <p>
        {exercises.part.name} {exercises.part.count}
      </p>
    </div>
  )
}

const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header name={course} />
      <Content 
        part1={{name: part1, count: exercises1}} 
        part2={{name: part2, count: exercises2}} 
        part3={{name: part3, count: exercises3}}
      />
      <Total count={exercises1 + exercises2 + exercises3} />
    </>
  )
}

export default App;
