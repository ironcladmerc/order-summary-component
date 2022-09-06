function OrderSummary() {
    return (
        <main className="w-80 rounded-2xl bg-white">
            <img
                src="illustration-hero.svg"
                alt="happy girl wearing headphones listening to music and dancing"
                className="rounded-t-2xl"
            />
            <div className="p-5 space-y-5">
                <h2 className="font-redhat font-black text-xl text-center">
                    Order Summary
                </h2>
                <p className="font-redhat font-medium text-xs text-desaturatedBlue text-center tracking-wide leading-relaxed">
                    You can now listen to millions of songs, audiobooks, and
                    podcasts on any device anywhere you like!
                </p>
                <div className="flex flex-row justify-between items-center bg-veryPaleBlue rounded-2xl p-5 mx-auto">
                    <img src="icon-music.svg" alt="music note icon" />
                    <div>
                        <div className="font-redhat font-black text-sm">
                            Annual Plan
                        </div>
                        <div className="font-redhat font-medium text-xs text-desaturatedBlue">
                            $59.99/year
                        </div>
                    </div>
                    <div className="font-redhat font-black text-xs cursor-pointer underline text-brightBlue hover:text-opacity-75 hover:no-underline">
                        Change
                    </div>
                </div>
                <div className="font-redhat font-bold text-sm cursor-pointer text-center bg-brightBlue p-3 rounded-lg text-white shadow-lg shadow-desaturatedBlue hover:bg-opacity-70">
                    Proceed to Payment
                </div>
                <div className="font-redhat font-black text-xs cursor-pointer text-center text-desaturatedBlue hover:text-darkBlue">
                    Cancel Order
                </div>
            </div>
        </main>
    )
}

export default OrderSummary
