import { appleImg, bagImg, searchImg } from "../utils"
import { navLists } from '../constants';
function Navbar() {
    return (
        <header className="w-full py-5">
            <nav className="screen-max-width mx-auto  flex justify-between items-center px-5 max-sm:px-10">

                {/* logo */}
                <img src={appleImg} alt="Logo" width={14} height={18} />

                {/* navitems */}
                <div className="flex gap-8 max-sm:hidden">
                    {
                        navLists.map(item => {
                            return (
                                <div className="text-sm text-gray hover:text-white cursor-pointer transition-all" key={item}>
                                    {item}
                                </div>)
                        })
                    }
                </div>

                {/* icons */}

                <div className="flex gap-8">
                    <img src={searchImg} alt="Search" width={18} height={18} />
                    <img src={bagImg} alt="Bag" width={18} height={18} />
                </div>

            </nav>
        </header>
    )
}

export default Navbar