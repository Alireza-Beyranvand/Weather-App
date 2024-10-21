

import { Facebook, GitHub, Instagram, Twitter } from '@mui/icons-material';
import Image from 'next/image';
import bg from "@/public/logo.png";
import Link from 'next/link';

export default function FooterContainer() {
    return (

        <footer className="bg-gray-900 pb-5 drop-shadow-2xl shadow-2xl rounded-t-xl mt-10 text-center">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-16 md:mb-0 md:block flex justify-center">
                        <Link href="https://flowbite.com/" className="flex items-center">
                            <Image src={bg} width={82} className="h-20 me-3" alt="Weather Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Weather App</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="https://flowbite.com/" >Next.js & React.js</Link>
                                </li>
                                <li>
                                    <Link href="https://tailwindcss.com/" >Tailwind CSS</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="https://github.com" >Github</Link>
                                </li>
                                <li>
                                    <Link href="https://tailwindcss.com/">Insta </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="#">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="#" >Terms &amp; Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Weather App™</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0 justify-center">
                        <Link href="insta" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <Facebook sx={{ fontSize: "1.7rem" }} />
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link href="insta" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <Instagram />
                            <span className="sr-only">Discord community</span>
                        </Link>
                        <Link href="insta" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <Twitter />
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link href="insta" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <GitHub />
                            <span className="sr-only">GitHub account</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer >
    )
}
