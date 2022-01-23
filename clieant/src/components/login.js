import React from "react";
import fb from '../components/images/facebook.svg';
import insta from '../components/images/instagram.svg';
import lkdn from '../components/images/linkedin.svg';
import lock from '../components/images/padlock';

const Login = () => {
    return (<>
        <div className='main-container'>
            <div className='top-container'>
                <div className='left'>
                    <h1>LAUNDRY</h1>
                </div>
                <div className='right'>
                    <div className='one'>
                        Home
                    </div>
                    <div className='two'>
                        Pricing
                    </div>
                    <div className='three'>
                        Career
                    </div>
                    <div className='four'>
                        <button className='btn'><p>Sign In</p></button>
                    </div>
                </div>
            </div>
            <div className='mid-container'>
                <div className='left-part'>
                    <h1 className='l1'>Laundry Service</h1>
                    <br /><br />
                    <p className='l2'>Doorstep Wash & Dryclean Service</p>
                    <br />
                    <br />
                    <p1 className='l3'>Don't Have An Account?</p1>
                    <br />
                    <br />
                    <button className='l4' >Register</button>
                </div>
                <div className='right-part'>
                    <div className='r1'>
                        <h4>SIGN IN</h4>
                    </div>
                    <form >
                        <label className="label1">Mobile/Email</label>
                        <br />
                        <input name="email" className="email" type="text" />
                        <br />
                        <label className="label2">password</label>
                        <br />
                        <input name="password" className="password" type="password" />
                        <img src={lock} alt='lock' />
                        <h6>forgot password?</h6>
                        <button className="signinbtn">sign in</button>
                    </form>
                </div>
            </div>
            <div className="footercontainer">
                <div className='footerpara'>
                    <hr style={{ color: '#5861AE' }} />
                    <p className="para1">
                        Now Refer & Earn &#8377;500 for every referral*
                    </p>
                    <p className="para2">*Terms and conditions will be applied</p>
                </div>
                <div className="footer">
                    <p className="aboutus">ABOUT US</p>
                    <p className="doorstep">Doorstep Wash & Dryclean Service</p>
                    <p className="home">Home</p>
                    <p className="signin">Sign In</p>
                    <p className="register">Register</p>
                    <p className="pricing">Pricing</p>
                    <p className="career">Carrer</p>
                    <p className="blogs">Blogs</p>
                    <p className="create">Create</p>
                    <p className="contact">Contact</p>
                    <p className="socialmedia">SOCIAL MEDIA</p>
                    <img src={fb} alt="fb" className='fb' />
                    <img src={insta} alt="insta" className='insta' />
                    <img src={lkdn} alt="lkdn" className='lkdn' />
                </div>
                <div className="footer1">
                    <p class="lastpara">2021&#169;Laundry</p>
                </div>
            </div>
        </div>




    </>)
}

export default Login;