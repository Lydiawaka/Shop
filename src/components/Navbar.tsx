'use client';
import { useRouter } from "next/router";
import Contact from "./NavIcons"
// import Menu from "./Menu"
import SearchBar from "./SearchBar"
import { FaCaretDown, FaSearch, FaShoppingCart } from "react-icons/fa";
// import { useEffect, useState } from "react";

// const [ setSearchQuery] = useState<string>("");

// const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//   };


const Menu =[
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Products",
      link: "/Products"
    },
    {
      id: 3,
      name: "Arts",
      link: "/#",
    },
    {
      id: 4,
      name: "Accesories",
      link: "/#",
    },
  ];

const DropdownLinks = [
    {
      id: 1,
      name: "Custom Wear",
      link: "/#",
    },
    {
      id: 2,
      name: "Dresses",
      link: "/#",
    },
    {
      id: 3,
      name: "Swim wear",
      link: "/#",
    },
    {
      id: 4,
      name: "Kids wear",
      link: "/#",
    },
    {
      id: 5,
      name: "Mens wear",
      link: "/#",
    }
  ];

  const BeautyLinks = [
    {
      id: 1,
      name: "Natural Oils",
      link: "/Products",
    },
    {
      id: 2,
      name: "Hair Care",
      link: "/#",
    },
    {
      id: 3,
      name: "Skin Care",
      link: "/#",
    },
    {
      id: 4,
      name: "Bath & Body",
      link: "/#",
    },
    {
      id: 5,
      name: "Beauty Gift",
      link: "/#",
    }
  ];

 

  

const Navbar = () => {

    // const router = useRouter();

    // const [isClientSide, setIsClientSide] = useState(false);

    // useEffect(() => {
    //     setIsClientSide(true);
    // }, []);
    
    // const handleSearch = (e: React.FormEvent<HTMLFormElement>)=>{
    //     e.preventDefault();

    //     if (!isClientSide) return;
    //     const formData = new FormData(e.currentTarget);
    //     const name = formData.get("name") as string;

    //     if (name){
    //         router.push(`/List?name$={name}`);

    //     }
    
    // }
    

     return (

        
    <div>
      <nav className="py-4 px-6 border-b bg-primary">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            {/* <img className="h-[50px] w-[50px] flex-auto" src={Logo} alt='' /> */}
            <h1 className="text-2xl font-bold">
              Wakawears</h1>
          </div>
          
          <form className="flex items-center space-x-4" >
            <input type="text" name="name" placeholder="search"
             className="rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="w-5 h-5"  />
            <FaShoppingCart className="w-5 h-5" />
          </form>
        </div>
      </nav>
      <script>
      
      </script>
      



    
      {/* lower navigation */}
      <div className="flex justify-center bg-secondary">
        <ul className="sm:flex hidden items-end gap-4">
          {Menu.map((data)=>(
              <li key={data.id}>
                <a href="data.link" className="inline-block px-4 hover:text-primary duration-200">{data.name}</a>
              </li>

            ))
          }

          {/* Beauty Simple Dropdown and links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Beauty
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black">
              <ul>
                {BeautyLinks.map((data) => (
                  <li key={data.id}>
                    <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {/* Simple Dropdown and links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Clothing
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          
        </ul>
      </div>

    </div>

        
      


// const Navbar = () => {
//   return (
//     <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
//         {/* MOBILE */}
//         <div className="h-full flex items-center justify-between md:hidden">
//             <h1>WakaWears</h1>
//             <Menu />
//         </div>
//         {/* Bigger screen*/}
//         <div className="hidden md:flex items-center justify-between gap-8 h-full">
//             {/* LEFT */}
//             <div className="w-1/3">
//                 <div className="font-bold">WAKAWEARS</div>

//             </div>
//             {/* RIGHT */}
//             <div className="w-2/3">
//                 <SearchBar />
//                 <Contact />
//             </div>
//         </div>
//     </div>
)
 }

export default Navbar
