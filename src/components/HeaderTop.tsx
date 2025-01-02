import Link from 'next/link'
import React from 'react'
import { FaDiscord, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

function HeaderTop() {
    return (
        <div className='border-b border-gray-200 hidden sm:block'>
            <div className="container py-4">
                <div className="flex justify-between items-center">
                    <div className="hidden lg:flex gap-1">
                        <div className="header-icon-wraper">
                            <Link href={"https://www.facebook.com/shabbiryu9/"} target='_blank'>
                                <FaFacebook />
                            </Link>
                        </div>
                        <div className="header-icon-wraper">
                            <Link href={"https://github.com/Shabbir811"} target='_blank'>
                                <FaGithub />
                            </Link>
                        </div>
                        <div className="header-icon-wraper">
                        <Link href={"https://www.linkedin.com/in/shabbir-kalhoro-8528412b3/"} target='_blank'>
                                
                            <FaLinkedin />
                            </Link>
                        </div>
                        <div className="header-icon-wraper">
                        <Link href={"https://discord.com/channels/@me"} target='_blank'>
                                
                            <FaDiscord />
                            </Link>
                        </div>
                    </div>
                    <div className="text-gray-500 text-[12px]">
                        <b>FREE SHIPPING</b> THIS WEEK ORDER OVER ~ $55
                    </div>

                    <div className="flex gap-4">
                        <select
                            className='text-gray-500 text-[12px] w-[70px]'
                            name='currency'
                            id='currency'
                        >
                            <option value="USD $">USD $</option>
                            <option value="EUR ">EUR</option>
                            <option value="RS">RS</option>

                        </select>
                        <select
                            className='text-gray-500 text-[12px] w-[80px]'
                            name="language" id="language"
                        >
                            <option value="English">English</option>
                            <option value="Urdu">Urdu</option>

                        </select>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeaderTop
