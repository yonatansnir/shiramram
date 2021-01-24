import { categories, item } from './categories.module.scss';
const categoriesList = [
    {id: 1, name: 'כוסות', image: 'https://static.wixstatic.com/media/02c210_09656d33bf8c49758a304b98dbec82bb~mv2.jpg/v1/fill/w_871,h_689,al_c,q_85,usm_0.66_1.00_0.01/02c210_09656d33bf8c49758a304b98dbec82bb~mv2.webp'},
    {id: 2, name: 'בקבוקים', image: 'https://static.wixstatic.com/media/02c210_5ff85dab7edb422d910365bede1cf222~mv2.jpg/v1/fill/w_460,h_689,al_c,q_85,usm_0.66_1.00_0.01/02c210_5ff85dab7edb422d910365bede1cf222~mv2.webp'},
    {id: 3, name: 'מחברות', image: 'https://static.wixstatic.com/media/02c210_836ef676657d409fa1f25834ee1fe8c1~mv2.jpg/v1/fill/w_460,h_689,al_c,q_85,usm_0.66_1.00_0.01/02c210_836ef676657d409fa1f25834ee1fe8c1~mv2.webp'},
    {id: 4, name: 'חולצות', image: 'https://static.wixstatic.com/media/02c210_19856a48d0474458a4a7a49a1cc88dcc~mv2.jpg/v1/fill/w_689,h_689,al_c,q_85,usm_0.66_1.00_0.01/02c210_19856a48d0474458a4a7a49a1cc88dcc~mv2.webp'}
]

const Categories = () => (
    <div className={categories}>
        {categoriesList.map(({ id, name, image }) => (
            <div className={item} key={id} style={{ backgroundImage: `url(${image})` }}>
                <h3>{name}</h3>
            </div>
        ))}
    </div>
)

export default Categories;