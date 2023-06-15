import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Checkout = () => {
    const { user, setLoading, loading } = useContext(AuthContext);
    const { price, _id, title, img } = useLoaderData();
    const email = user?.email;
    const handleCheckout = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = event.target.email.value;
        const date = form.date.value;
        const amount = form.amount.value;
        const message = form.message.value;
        const booking = {
            customerName: name,
            email: email,
            date,
            amount,
            service: title,
            service_id: _id,
            price,
            message,
            image: img,
        }
        fetch(`http://localhost:5000/bookings`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })

    }

    return (
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-7 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Checkout</h1>

                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <form onSubmit={handleCheckout} className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Date</label>
                                    <input type="date" id="email" name="date" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Your Email</label>
                                    <input type="email" id="email" defaultValue={email} name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Amount</label>
                                    <input type="text" id="name" name="amount" defaultValue={`$ ${price}`} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <input className="btn w-full flex mx-auto bg-[#FF3811] border-0 text-white" type="submit" value="Order Confirm" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Checkout;