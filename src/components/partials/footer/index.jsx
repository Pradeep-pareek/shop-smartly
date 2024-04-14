import LogoImg from "../../../assets/images/shop-smartly.png";
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer_sec ">
            <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 ">
                <footer className='grid grid-cols-3 items-start py-[50px]'>
                    <div className='col-span-1 logo_section'>
                        <div>
                            <img width={220} src={LogoImg} alt="logo" />
                        </div>
                        <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis vero mollitia fugit, eligendi eos soluta! Et deserunt maiores, ipsa, sequi non necessitatibus quia eveniet odit sed nulla dicta? Nesciunt.</p>
                        {/* <div className="flex social_links gap-2 mt-2">
                            <a href="#">
                                <Icon icon="pajamas:twitter" />
                            </a>
                            <a href="#">
                                <Icon icon="iconoir:discord" />
                            </a>
                        </div> */}
                    </div>
                    <div className="flex flex-col footer_links">
                        <h4>Services</h4>
                        <Link to='/'>FAQ</Link>
                        <Link to='/'>Fees</Link>
                        <Link to='/'>About</Link>
                    </div>
                    <div className="flex flex-col footer_terms">
                        <h4>Legal</h4>
                        <Link to='/'>Terms and Conditions</Link>
                        <Link to='/'>Privacy Policy</Link>
                        <Link to='/'>Disclaimers</Link>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer
