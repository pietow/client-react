/** @format */

import React from 'react'
import { Link } from 'react-router-dom'
import linksFooter from '../../data/linksFooter.json'

export default function Footer() {
    return (
        <footer className="bg-pistachio-dark pb-14 pt-4 h-14 border-t-2 border-teal-dark">
            <div className="flex md:flex-row justify-center md:mx-auto space-x-0 md:space-x-8 space-y-8 md:space-y-0 order-3 md:order-2">
                {linksFooter.map((item) => (
                    <div className="flex flex-row" key={item.title}>
                        <div>
                            {item.links.map((link) => (
                                <Link
                                    to={link.path}
                                    key={link.name}
                                    className="text-sm uppercase text-gray-dark font-noto px-2">
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <p className="text-sm text-center font-noto text-black">
                Copyright bla bla and photo credits here
            </p>
        </footer>
    )
}

// export default function Footer() {
//     return (
//         <footer className="bg-pistachio-dark pb-14 pt-4 h-14 border-t-2 border-teal-dark flex md:flex-row justify-center md:mx-auto space-x-0 md:space-x-8 space-y-8 md:space-y-0 order-3 md:order-2">
//                 {linksFooter.map((item) => (
//                     <div className="flex flex-row" key={item.title}>
//                         <div>
//                             {item.links.map((link) => (
//                                 <Link
//                                     to={link.path}
//                                     key={link.name}
//                                     className="text-sm uppercase text-gray-dark font-noto px-2">
//                                     {link.name}
//                                 </Link>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             <p className="text-sm text-center">
//                 Copyright bla bla and photo credits here
//             </p>
//         </footer>
//     )
// }
