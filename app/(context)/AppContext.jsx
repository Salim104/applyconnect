"use client";

import React, { createContext, useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import {products} from '@/lib/data';

const AppContext = createContext()

const AppContextProvider = ({children}) => {

const currency = "$";
const [productsList, setProductsList] = useState(products);
const [subTotal, setSubTotal] = useState(0);
const [totalAmount, setTotalAmount] = useState(0);
const router = useRouter();


const value = {
  productsList,
  subTotal,
  setSubTotal,
  totalAmount,
  setTotalAmount,
  router
};

  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider   

export const useAppContext = () => useContext(AppContext); 