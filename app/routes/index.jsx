import { useLoaderData, Link } from 'remix';

export const loader = async () => {
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
              children {
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
          }        
        `,
        variables: {
          language: 'en',
          path: `/`,
        },
      }),
    },
  ).then((res) => res.json());

  return result?.data?.catalogue?.children ?? [];
};

export default function Index() {
  const donuts = useLoaderData();

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Welcome to Remix</h1>
      <ul className="products">
        {donuts.map((donut) => {
          if (donut.defaultVariant.stock < 1) {
            return null;
          }

          return (
            <li key={donut.path}>
              <Link to={donut.path}>
                <img
                  src={donut.defaultVariant.firstImage.url}
                  alt={donut.defaultVariant.firstImage.altText}
                />
              </Link>
              <Link to={donut.path}>{donut.name}</Link>
              <p>{donut.defaultVariant.price} €</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
