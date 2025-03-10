import React from "react";
 
const Navbar = () => {
    return(

<div>
 {/* Sidebar */}
 <aside className="w-64 bg-blue-900 text-white p-4 ml-[60px] ">
 <h2 className="text-[40px] font-bold text-[#8357DA]">TaskMe</h2>
 <nav className="mt-6 space-y-8 text-[20px] ">
   <a href="/dashboard" className="block text-[white] hover:text-[#8357DA] py-2 px-4 bg-blue-700 rounded ">Dashboard</a>
   <a href="/task" className="block text-[white] hover:text-[#8357DA] py-2 px-4 mt-[20px]">Tasks</a>
   <a href="/completedtasks" className="block text-[white] hover:text-[#8357DA] py-2 px-4 mt-[20px]">Completed</a>
   <a href="#" className="block text-[white] hover:text-[#8357DA] py-2 px-4 mt-[20px]">In Progress</a>
   <a href="#" className="block text-[white] hover:text-[#8357DA] py-2 px-4 mt-[20px]">Team</a>
   <a href="#" className="block text-[white] hover:text-[#8357DA] py-2 px-4 mt-[20px]">Settings</a>
 </nav>
</aside>
</div>
   );
};

export default Navbar;