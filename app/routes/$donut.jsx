import { Link, useLoaderData } from 'remix';

export const loader = async ({ params }) => {
  const result = await fetch(
    'https://api.crystallize.com/learn-with-jason/catalogue',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query($language: String!, $path: String!) {
            catalogue(language: $language, path: $path) {
              path
              name
          
              ... on Product {
                defaultVariant {
                  firstImage {
                    url
                    altText
                  }
                  price
                  stock
                }
              }
            }
          }      
        `,
        variables: {
          language: 'en',
          path: `/${params.donut}`,
        },
      }),
    },
  ).then((res) => res.json());

  return result?.data?.catalogue ?? {};
};

export default function Donut() {
  const donut = useLoaderData();

  return (
    <>
      <h1>{donut.name}</h1>
      <img
        className="product-image"
        src={donut.defaultVariant.firstImage.url}
        alt={donut.defaultVariant.firstImage.altText}
      />
      <p>{donut.defaultVariant.price} €</p>
      <button>Buy Now</button>
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </>
  );
}
