import React from 'react';
import { useState } from 'react';
import useGetProduct from '../../../../hooks/useGetProduct';
import ConfirmModal from '../../../sheared/ConfirmModal/ConfirmModal';
import ManageProductRow from './ManageProductRow';

const ManageProduct = () => {
  const [products, productsLoading] = useGetProduct();

  return (
    <div className="max-w-screen w-full">
      <h1 className="text-3xl font-bold text-center text-orange-600 bg-stone-100 py-3 shadow-md w-full">
        <span className="">Manage Order</span>
      </h1>

      
        <div className="mt-5 max-w-screen-xl mx-auto">
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product name</th>
                  <th>Stock available</th>
                  <th>Price <sup>(per pice)</sup></th>
                  <th>Minimum order</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  products?.map(product => {
                    return <ManageProductRow
                      key={product._id}
                      product={product}
                    ></ManageProductRow>
                  })
                }
                  
              </tbody>

              <tfoot>
                <tr>
                  <th>...</th>
                  <th>...</th>
                  <th>...</th>
                  <th>...</th>
                  <th>...</th>
                  <th>...</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
    </div>
  );
};

export default ManageProduct;