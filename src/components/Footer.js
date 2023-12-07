import { Link } from "react-router-dom"
export const Footer = () => {
    return (


        <footer className="bg-white  dark:bg-gray-800">
            <div className="w-full mx-auto  p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <Link to="/" className="hover:underline">Cinemate™</Link>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="https://www.instagram.com/sarawang9012/" className="hover:underline me-4 md:me-6" rel="noreferrer" target="_blank">Instagram</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/sara-wang-079b5b288/" className="hover:underline me-4 md:me-6" rel="noreferrer" target="_blank">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/SaraWang2023" className="hover:underline me-4 md:me-6" rel="noreferrer" target="_blank">Twitter</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCdcSSCnG6O71p4KvGyPp6Ow" className="hover:underline"i rel="noreferrer" target="_blank">YouTube</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}
