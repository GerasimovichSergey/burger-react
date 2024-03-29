import style from './CatalogProduct.module.css';
import { API_URL } from '../../const';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/order/orderSlice';


export function CatalogProduct({ item }) {
  const dispatch = useDispatch();

  return (
    <article className={style.product}>
      <img src={`${API_URL}/${item.image}`} alt={item.title} className={style.image} />

      <p className="price">{item.price}<span className="currency">₽</span></p>

      <h3 className="title">
        <button className={style.detail}>{item.title}</button>
      </h3>

      <p className={style.weight}>{item.weight}г</p>

      <button className={style.add} type="button" onClick={() => dispatch(addProduct({ id: item.id }))}>Добавить
      </button>
    </article>
  )
}