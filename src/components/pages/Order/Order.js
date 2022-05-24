import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosPrivate from '../../../api/axiosPrivate';
import Loading from '../../sheared/Loading/Loading';
import ProductCard from '../Home/ProductDisplay/ProductCard';
import OrderCard from './OrderCard';

const Order = () => {
  const {id} = useParams();
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    if (id.length > 2) {
      ( async () => {
        const {data} = await axiosPrivate.get(`/product/${id}`);
        if (data.success) {
          setLoading(false);
          setProduct(data.product);
        }
      })();
    }

  }, [id])

  if (loading) {
    return <Loading/>
  }

  return (
    <div className=''>
      <div className=''>
        {
          (product in product._id) && <OrderCard key={product._id} product={product}/>
        } 
      </div>
    </div>
  );
};

export default Order;