import { Order } from '../Order/Order';
import { Container } from '../Container/Container';
import style from './Catalog.module.css';
import { CatalogProduct } from '../CatalogProduct/CatalogProduct';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { productRequestAsync } from '../../store/product/productSlice';


export function Catalog() {
  const { products } = useSelector(state => state.product);
  const dispatch = useDispatch();
  const { category, activeCategory } = useSelector(state => state.category);

  useEffect(() => {
    if (category.length) {
      dispatch(productRequestAsync(category[activeCategory].title))
    }
  }, [category, activeCategory])

  return (
    <section className={style.catalog}>
      <Container className={style.container}>
        <Order />
        <div className={style.wrapper}>
          <h2 className={style.title}>{category[activeCategory]?.rus}</h2>

          <div className={style.wrap_list}>
            {products.length ? <ul className={style.list}>
                {products.map((item) => (
                  <li key={item.id} className={style.item}>
                    <CatalogProduct item={item} />
                  </li>
                ))}
              </ul> :
              <p className={style.empty}>
                Данной категории товаров сейчас нет
              </p>}

          </div>
        </div>
      </Container>
    </section>
  )
}