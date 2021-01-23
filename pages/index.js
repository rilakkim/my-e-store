
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/Link'

import { useCart } from  '../hooks/use-cart'

export default function Home() {
  const { 
    addToCart,
    products,
  } = useCart();

  return (
    <div className={styles.container}>
      <Head>
        <title>Space Jelly Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          The Best Space Jellyfish store in the World!
        </p>

        <ul className={styles.grid}>
          {
            products.map(product => {
              const { title, id, price, description, image } = product;

              return (
                <li className={styles.card} key={ id }>
                  <Link href={`/products/${id}`}>
                    <a>
                      <img src={image} alt={ title }></img>
                      <h3>{ title }</h3>
                      <p>€{ price }</p>
                      <p>{ description }</p>
                    </a>
                  </Link>
                  <p>
                    <button className={styles.button} onClick={() => {
                      addToCart({ id })
                    }}>Add to Cart</button>
                  </p>
                </li>
              )
            })
          }
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
