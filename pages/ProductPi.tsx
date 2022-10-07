import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '../components/layouts';
import { initialData } from '../database/pizzas';
import { ProductList } from '../components/products';


const  ProductPi = () => {
  return (
    <ShopLayout title={'Pizza CHEESE - Home'} pageDescription={'Pizza de la más alta calidad'}>
        <Typography variant='h1' component='h1'>PIZZERIA CHEESE</Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>Tipos de productos</Typography>

        <ProductList 
          products={ initialData.products as any }
        />
    

    </ShopLayout>
  )
}

export default ProductPi
