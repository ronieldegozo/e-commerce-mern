import CategoryItem from '../category-item/category-item.component';
import './CatContainer.styles.scss';
const CatContainer = ({categories}) =>{
    return (
    <div className="category-container">
        {categories.map((category)=> (
          <CategoryItem key={category.id} category={category}/>
        ))}
    </div>
    )
}

export default CatContainer;