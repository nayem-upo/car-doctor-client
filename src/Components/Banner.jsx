
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[600px]">
                    <img src="/assets/images/banner/5.jpg" className="w-full object-cover rounded-xl" />
                    <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-1">
                        <a href="#slide4" className="btn btn-circle bg-[#FF3811] border-[#7d1500]">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-[#FF3811] border-[#7d1500]">❯</a>
                    </div>
                    <div className="bg-gradient-to-r rounded-xl flex items-center from-[#000000] to-[rgba(21, 21, 21, 0) 100%)] h-full text-white absolute transform -translate-y-1/2 top-1/2">
                        <div className="w-[600px] flex flex-col gap-3 pl-24 ">
                            <h1 className="text-6xl font-semibold">Affordable <br /> Price For Car Servicing</h1>
                            <h1 className="text-xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</h1>
                            <div className="flex gap-4">
                                <button className="bg-[#FF3811] hover:bg-[#e62c07] py-3 rounded-md font-semibold px-4">Discover More</button>
                                <button className="hover:bg-[#FF3811] border py-3 rounded-md font-semibold px-5">Latest Project</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[600px]">
                    <img src="/assets/images/banner/1.jpg" className="w-full object-cover rounded-xl" />
                    <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-1">
                        <a href="#slide1" className="btn btn-circle bg-[#FF3811] border-[#7d1500] ">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-[#FF3811] border-[#7d1500] ">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[600px]">
                    <img src="/assets/images/banner/2.jpg" className="w-full object-cover rounded-xl" />
                    <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-1">
                        <a href="#slide2" className="btn btn-circle bg-[#FF3811] border-[#7d1500] ">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-[#FF3811] border-[#7d1500] ">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-[600px]">
                    <img src="/assets/images/banner/3.jpg" className="w-full object-cover rounded-xl" />
                    <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-1">
                        <a href="#slide3" className="btn btn-circle bg-[#FF3811] border-[#7d1500] ">❮</a>
                        <a href="#slide5" className="btn btn-circle bg-[#FF3811] border-[#7d1500] ">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full h-[600px]">
                    <img src="/assets/images/banner/4.jpg" className="w-full object-cover rounded-xl" />
                    <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-1">
                        <a href="#slide4" className="btn btn-circle bg-[#FF3811] border-[#7d1500] ">❮</a>
                        <a href="#slide6" className="btn btn-circle bg-[#FF3811] border-[#7d1500] ">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full h-[600px]">
                    <img src="/assets/images/banner/6.jpg" className="w-full object-cover rounded-xl" />
                    <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-1">
                        <a href="#slide5" className="btn btn-circle bg-[#FF3811] border-[#7d1500] ">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-[#FF3811] border-[#7d1500] ">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;