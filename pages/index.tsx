import type { NextPage } from "next"
import Head from "next/head"
import OrderSummary from "../components/OrderSummary"

const Home: NextPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-paleBlue">
            <Head>
                <title>Order Summary Component</title>
                <link rel="icon" href="/favicon-32x32.png" />
            </Head>
            <OrderSummary />
        </div>
    )
}

export default Home
