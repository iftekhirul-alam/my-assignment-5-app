import Logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <div>
            <hr className="h-px my-8 bg-gray-200 border-0 " />
            <div className='flex justify-center mt-10 container mx-auto'>

                <div className='w-[40%]'>
                    <img src={Logo} alt="" />
                    <p className="mt-4 max-w-sm text-xs leading-5 text-gray-400">
                        Curated tools, technologies, and resources for developers
                        building modern software.
                    </p>

                    <div className="mt-5 flex gap-5 text-xs text-gray-500">

                        <a href="">GitHub</a>
                        <a href="">Twitter</a>
                        <a href="">LinkedIn</a>

                    </div>

                </div>

                <div className='w-[60%] flex justify-between'>
                    <div>
                        <h4 className="text-xs font-bold uppercase">
                            PRODUCT
                        </h4>
                        <div className="mt-4 space-y-3 text-xs text-gray-400">
                            <p>Home</p>
                            <p>Technologies</p>
                            <p>Projects</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase">
                            COMPANY
                        </h4>
                        <div className="mt-4 space-y-3 text-xs text-gray-400">
                            <p>About</p>
                            <p>Contact</p>
                            <p>Careers</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase">
                            LEGAL
                        </h4>
                        <div className="mt-4 space-y-3 text-xs text-gray-400">
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                        </div>
                    </div>
                </div>

            </div>
            <hr className="container mx-auto h-px my-8 bg-gray-200 border-0 " />
            <div className='flex justify-between container mx-auto mt-4 space-y-3 text-xs text-gray-400'>
                <div>
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                </div>
                <div className='flex space-x-5'>
                    <p>Privacy</p>
                    <p>Terms</p>
                </div>
            </div>


        </div>

    );
};

export default Footer;