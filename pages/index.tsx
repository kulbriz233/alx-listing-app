import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="An Airbnb clone listing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-3xl font-bold">Welcome to the ALX Listing App</h1>
      </main>
    </>
  )
}