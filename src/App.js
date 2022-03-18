import CategoryItem from './components/category-item/category-item.component'
const  App = () => {

  const categories = [
    {
      id: 1,
      title: 'Monitor' ,
      imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    } ,
    {
      id: 2,
      title: 'Mouse',
      imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    } ,
    {
      id: 3,
      title: 'Keyboard',
      imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    } ,
    {
      id: 4,
      title: 'Headphone',
      imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    } ,
    {
      id: 5,
      title: 'Speaker',
      imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    } ,
  ]

  return (
    <div className="cats-container">
      {categories.map((category)=> (
        <CategoryItem key={category.id} category={category}/>
      ))}
    </div>
  );
}

export default App;
