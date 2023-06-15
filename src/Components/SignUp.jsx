
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-56">
                <img src="/assets/images/login/login.svg" alt="" />
                <form onSubmit={handleSignUp} className="card flex-shrink-0 w-full max-w-md border rounded-lg py-10">
                    <h1 className="text-center text-4xl font-bold">Sign Up</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black font-semibold text-lg">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your name" className="input input-bordered bg-white" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black font-semibold text-lg">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="Your email" className="input input-bordered bg-white" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black font-semibold text-lg">Confirm Password</span>
                            </label>
                            <input name="password" type="text" placeholder="Your password" className="input input-bordered bg-white" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-[#FF3811] border-0 text-white" type="submit" value="Sign Up" />
                        </div>
                    </div>
                    <h1 className="text-center font-semibold text-lg">Or Sign Up with</h1>
                    <div className="text-center flex justify-center my-3 gap-3">
                        <svg fill=" #00aaff" width="40px" viewBox="0 0 32.00 32.00" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0}><rect x={0} y={0} width={32.00} height={32.00} rx={16} fill="#eef1f2" strokeWidth={0} /></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z" /></g></svg>
                        <svg fill="#00aaff" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="40px" viewBox="-153.6 -153.6 819.20 819.20" xmlSpace="preserve" stroke="#00aaff" strokeWidth="0.00512"><g id="SVGRepo_bgCarrier" strokeWidth={0} transform="translate(0,0), scale(1)"><rect x="-153.6" y="-153.6" width="819.20" height="819.20" rx="409.6" fill="#eef1f2" strokeWidth={0} /></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="8.192"> <g id="7935ec95c421cee6d86eb22ecd125aef"> <path style={{ display: 'inline', fillRule: 'evenodd', clipRule: 'evenodd' }} d="M116.504,500.219V170.654H6.975v329.564H116.504 L116.504,500.219z M61.751,125.674c38.183,0,61.968-25.328,61.968-56.953c-0.722-32.328-23.785-56.941-61.252-56.941 C24.994,11.781,0.5,36.394,0.5,68.722c0,31.625,23.772,56.953,60.53,56.953H61.751L61.751,125.674z M177.124,500.219 c0,0,1.437-298.643,0-329.564H286.67v47.794h-0.727c14.404-22.49,40.354-55.533,99.44-55.533 c72.085,0,126.116,47.103,126.116,148.333v188.971H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531 c-30.254,0-48.284,20.38-56.202,40.08c-2.897,7.012-3.602,16.861-3.602,26.711v184.047H177.124L177.124,500.219z"> </path> </g> </g><g id="SVGRepo_iconCarrier"> <g id="7935ec95c421cee6d86eb22ecd125aef"> <path style={{ display: 'inline', fillRule: 'evenodd', clipRule: 'evenodd' }} d="M116.504,500.219V170.654H6.975v329.564H116.504 L116.504,500.219z M61.751,125.674c38.183,0,61.968-25.328,61.968-56.953c-0.722-32.328-23.785-56.941-61.252-56.941 C24.994,11.781,0.5,36.394,0.5,68.722c0,31.625,23.772,56.953,60.53,56.953H61.751L61.751,125.674z M177.124,500.219 c0,0,1.437-298.643,0-329.564H286.67v47.794h-0.727c14.404-22.49,40.354-55.533,99.44-55.533 c72.085,0,126.116,47.103,126.116,148.333v188.971H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531 c-30.254,0-48.284,20.38-56.202,40.08c-2.897,7.012-3.602,16.861-3.602,26.711v184.047H177.124L177.124,500.219z"> </path> </g> </g></svg>
                        <svg fill=" #00aaff" width="40px" viewBox="-2.38 -2.38 18.76 18.76" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" stroke=" #00aaff" strokeWidth="0.00014"><g id="SVGRepo_bgCarrier" strokeWidth={0}><rect x="-2.38" y="-2.38" width="18.76" height="18.76" rx="9.38" fill="#eef1f2" strokeWidth={0} /></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path d="m 7.12,6.1425 0,2.0575 3.403,0 C 10.3855,9.0825 9.495,10.787 7.12,10.787 5.0725,10.787 3.4005,9.0925 3.4005,7 3.4005,4.9075 5.073,3.213 7.12,3.213 c 1.165,0 1.9455,0.4945 2.3925,0.9245 l 1.627,-1.569 C 10.0945,1.593 8.7395,1 7.12,1 c -3.3175,0 -6,2.6825 -6,6 0,3.3175 2.6825,6 6,6 3.463,0 5.76,-2.4345 5.76,-5.863 0,-0.394 -0.0425,-0.695 -0.0945,-0.9945 l -5.6655,0 z" /></g></svg>
                    </div>
                    <p className="text-center font-medium">Already have an account? <Link to='/login'><span className="text-[#FF3811]">Login</span></Link> </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;