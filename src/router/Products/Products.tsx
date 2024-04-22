import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import ProductsItem from "../../Components/ProductsItem/ProductsItem";
import { useProductData } from "../../hooks/useProductsData";
import s from './Products.module.scss';
import { IProduct } from "../../Types";



const Products: FC = () => {
  const [page, setPage] = useState<number>(() => {
    const savedData = localStorage.getItem('saveData');
    if (savedData) {
      const { savedPage } = JSON.parse(savedData);
      return savedPage;
    }
    return 1; 
  });
  // console.log(page)
  const [sortBy, setSortBy] = useState<string>('default');
  const [filter, setFilter] = useState<string>('');
  const skip = (page - 1) * 12;
  const { data, isError, isFetching } = useProductData(skip,'');
// console.log(data)

useEffect(() => {
  if (data) {
    const savedData = JSON.stringify({ savedPage: page, });
    localStorage.setItem('saveData', savedData);
  }
}, [page,  data]);
  const totalPages = Math.ceil(( data?.total || null) / 12);
  // console.log(totalPages)
  
  const clickNext = () => {
    setPage(prevPage => prevPage + 1);
  };
  
  // const clickNext = () => {
  //   if(page < 1) {
  //    setPage(page + 1 )
  //   }
  //  };

  const clickPrev = () => {
    if (page > 1) {
      setPage(page - 1); 
    }
  };
  
  const pageClick = (pageIndex: number) => {
   
    setPage(pageIndex);
  };

  const sortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const searchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  let sortedProducts = data?.products ? [...data.products] : [];

  if (sortBy !== 'default') {
    sortedProducts.sort((a: IProduct, b: IProduct) => {
      if (sortBy === 'price') return b.price - a.price;
      if (sortBy === 'stock') return a.stock - b.stock;
      if (sortBy === 'name') {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
       
      }
      return 0;
    });
  }

  if (filter) {
    sortedProducts = sortedProducts.filter(el =>
      el.title.toLowerCase().includes(filter.toLowerCase())
    );
  }

  return (
    isFetching ? <Loading /> :
      isError ? <h2>Error</h2> :
    <> 
    
    
       <div className="container">
    <div className={s.div}>
   
         <select className={s.div_select} name="selectedProducts" onChange={sortChange} value={sortBy}>
       
           <option value="default"> Sort by: </option>
           <option value="name">Name</option>
           <option value="price">Price</option>
           <option value="stock">Stock</option>
         </select>
     
       <div >
      <div  className={s.div_search}>
      <input className={s.div_search_inp}
         type="text"
         placeholder="Search"
         value={filter}
         onChange={searchInput}
       />
      </div>
      </div>
    </div>
   <div className={s.products}>         

     <div className={s.products__box}>
       {sortedProducts.map((product: IProduct) => (
         <Link key={product.id} to={`/${product.id}`}>
           <ProductsItem product={product} />
         </Link>
       ))}
     </div>
   </div>

   <div className={s.products_pagination}>
            <button onClick={clickPrev}
              disabled={page === 1}
              className={s.products_pagination_btn}>
              Prev
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button 
                key={index + 1}
                onClick={() => pageClick(index + 1)}
                disabled={page === index + 1}
                className={s.products_pagination_number}
              >
                {index + 1}
              </button>
            ))}
            <button onClick={clickNext}
              disabled={data.products.length < 12}
              className={s.products_pagination_btn}>
              Next
            </button>
          </div>
 </div></>
  );
};

export default Products;
