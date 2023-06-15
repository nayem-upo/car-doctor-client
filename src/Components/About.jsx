/* eslint-disable react/no-unescaped-entities */

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:items-center lg:flex-row">
                    <div className="lg:w-1/2 relative">
                        <img src="/assets/images/about_us/person.jpg" className="w-3/4 h-96 object-left object-cover rounded-lg shadow-2xl" />
                        <div className="right-20 absolute w-1/2 top-48 bg-white rounded-xl">
                            <img src="/assets/images/about_us/parts.jpg" className="p-2 h-64 object-cover " />
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <h1 className="text-[#FF3811] font-bold text-2xl pb-3">About Us</h1>
                        <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                        <p className="pt-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className="py-6">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="bg-[#FF3811] hover:bg-[#e62c07] py-3 rounded-md font-semibold px-4 text-white">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;