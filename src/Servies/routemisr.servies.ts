import { CategoryType, ProductType, SingleType } from "@/app/types/route.misr";

export async function GetAllProduct(): Promise<ProductType[] | null> {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products`, {
      cache: "force-cache",
    });
    const data = await res.json();
    return data.data;
  } catch (err) {
    return null;
  }
}

export async function getProduct(id: string): Promise<ProductType | undefined> {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`,
      {
        cache: "force-cache",
      },
    );
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.log(err);
    return undefined;
  }
}
export async function getAllCategory(): Promise<CategoryType[] | undefined> {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/categories`,
      {
        cache: "force-cache",
      },
    );
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.log(err);
    return undefined;
  }
}
export async function Singlecategory(id: string): Promise<SingleType | null> {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/categories/${id}`,
      {
        cache: "force-cache",
      },
    );
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function allorders(productId : string) {
try{
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${productId}`, {
    cache: "force-cache",
  });

  const data = await res.json();

  return data;
}
catch(err){
  console.log(err);
  
}
}


export async function Brands() {
try{
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands`, {
    cache: "force-cache",
  });

  const data = await res.json();

  return data.data;
}
catch(err){
  console.log(err);
  
}
}

export async function BrandDetails(id: string): Promise<SingleType | null> {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/brands/${id}`,
      {
        cache: "force-cache",
      },
    );
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}


export async function Brandcard(id: string): Promise<SingleType | null> {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products?brand=${id}`,
      {
        cache: "force-cache",
      },
    );
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}




export async function SubCategories() {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/subcategories`,
      {
        cache: "force-cache",
      },
    );
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}



export async function detailsSubCategories(id: string): Promise<SingleType | null> {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`,
      {
        cache: "force-cache",
      },
    );
    const data = await res.json();
    return data
  } catch (err) {
    console.log(err);
    return null;
  }
}