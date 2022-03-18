import './category-item.styles.scss';
const CategoryItem = ({category }) =>{
    const {imageUrl, id, title} = category;
    return(
    <div key={id} className="cat-container">
        <div className="background-image" style={{
          backgroundImage: `url(${imageUrl})`
        }}/>
        <div  className="cat-body-container">
          <h1>{title}</h1>
          <h2>Shope now</h2>
        </div>
    </div>
    )
}

export default CategoryItem;