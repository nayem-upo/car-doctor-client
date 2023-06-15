import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const { _id, service_id, title, img, price, description, facility } = service;
    return (
        <div>
            <div className="card glass rounded-lg">
                <figure><img className="w-[332px] h-[220px] my-4 object-cover rounded-lg" src={img} alt="" /></figure>
                <div className="">
                    <h2 className="ms-4 text-left font-bold text-xl">{title}</h2>
                    <div className="mx-4 flex justify-between py-3 items-center">
                        <p className="text-left text-[#FF3811] font-semibold text-lg">Price: ${price}</p>
                        <Link to={`/checkout/${_id}`}>
                            <svg className="" width="20px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="#FF3811" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)" stroke="#FF3811"><g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(0,0), scale(1)"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="arrow-right"> <g> <polyline data-name="Right" fill="none" id="Right-2" points="16.4 7 21.5 12 16.4 17" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4"></polyline> <line fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" x1="2.5" x2="19.2" y1="12" y2="12"></line> </g> </g> </g> </g></svg></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;