import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <nav className="w-[1320px] h-[80px] mt-[21px] ml-[96px] flex justify-between items-center p-4 border-b border-gray-200">
        <Image src="/logo.png" alt="BOTOL Logo" width={174.16} height={40} className="mt-[20px]" />
        <div className="w-[706px] h-[49px] mt-[15px] ml-[614px] flex justify-between items-center space-x-6 md:flex">
          <a href="#" className="hover:text-gray-500">Shop</a>
          <a href="#" className="hover:text-gray-500">Contact us</a>
          <a href="#" className="hover:text-gray-500">About</a>
          <a href="#" className="hover:text-gray-500">Journal</a>
          <a href="#" className="hover:text-gray-500">Custom</a>
          <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 py-2 rounded-lg shadow-md">Inquiry Now</button>
        </div>
      </nav>
      
      <div className="flex flex-col items-center justify-center flex-grow mt-20">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-50"></div>
          <Image src="/bottle.png" alt="Bottle" width={200} height={400} className="relative z-10" />
        </div>
      </div>
    </div>
  );
}
