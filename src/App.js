import './categories.styles.scss';
const  App = () => {

  const categories = [
    {
      id: 1,
      title: 'Monitor' 
    } ,
    {
      id: 2,
      title: 'Mouse'
    } ,
    {
      id: 3,
      title: 'Keyboard'
    } ,
    {
      id: 4,
      title: 'Headphone'
    } ,
    {
      id: 5,
      title: 'Speaker'
    } ,
  ]

  return (
    <div className="cats-container">
      {categories.map(({title, id})=> (
        <div key={id} className="cat-container">
          <div className="background-image"/>
          <div  className="cat-body-container">
            <h1>{title}</h1>
            <h2>Shope now</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
