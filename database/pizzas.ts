interface SeedProduct {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ValidSizes[];
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
    gender: 'men'|'women'|'kid'|'unisex'
}

type ValidSizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
type ValidTypes = 'shirts'|'pants'|'hoodies'|'hats';

interface SeedData {
    products: SeedProduct[],
}


export const initialData: SeedData = {
    products: [
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'P3.jpg',
                'P3.jpg',
            ],
            inStock: 7,
            price: 35,
            sizes: ['GRANDE','MEDIANA','PEQUEÑA'],
            slug: "/product/slug",
            type: 'shirts',
            tags: ['sweatshirt'],
            title: "Pizza 10 porciones Dos Quesos",
            gender: 'men'
        },
        {
            description: "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
            images: [
                'P5.jpg',
                'P5.jpg',
            ],
            inStock: 5,
            price: 65,
            sizes: ['GRANDE','MEDIANA','PEQUEÑA'],
            slug: "/product/slug",
            type: 'shirts',
            tags: ['jacket'],
            title: "Pizza Arúgula",
            gender: 'men'
        },
        
        {
            description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
            images: [
                'P9.jpg',
                'P9.jpg'
            ],
            inStock: 10,
            price: 90,
            sizes: ['GRANDE','MEDIANA','PEQUEÑA'],
            slug: "/product/slug",
            type: 'shirts',
            tags: ['shirt'],
            title: "COMBO 3",
            gender: 'men'
        },
    ]
}