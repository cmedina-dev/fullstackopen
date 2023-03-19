const Header = ({name}) => {
    return (
      <div>
        <h2>
          {name}
        </h2>
      </div>
    )
  }
  
  const Content = ({parts}) => {
    return (
      <div>
        {parts.map(p => 
          <Part part={p} key={p.id}></Part>
        )}
      </div>
    )
  }
  
  const Total = ({parts}) => {
    const sum = parts
                  .filter(obj => obj.hasOwnProperty("exercises") && typeof obj["exercises"] === "number")
                  .map(obj => obj["exercises"])
                  .reduce((sum, exercises) => sum + exercises);
  
    return (
      <div>
          <strong>total of {sum} exercises</strong>
      </div>
    )
  }
  
  const Part = ({part}) => {
    return (
      <div>
        <p>
          {part.name} {part.exercises}
        </p>
      </div>
    )
  }
  
  const Course = ({course}) => {
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
  
    )
  }

  export default Course