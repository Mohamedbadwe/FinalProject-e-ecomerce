import { detailsSubCategories, SubCategoriesdetails } from '@/Servies/routemisr.servies'
import React from 'react'

export default async function page(props: { params: { id: string } }) {
const params = await props.params;
  const id = params.id; 

const detailsSubCategoriese = await detailsSubCategories(id)
console.log(detailsSubCategoriese);
 
  
  
  return (
    <div>
      categories
    </div>
  )
}
