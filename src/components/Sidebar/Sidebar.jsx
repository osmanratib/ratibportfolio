import React from "react";
import { TbInfoOctagonFilled } from "react-icons/tb";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
 return (
  <div>
   <section>
    <div className="fab  ">
     <div tabIndex={0} role="button" className="icon float-hover text-[40px] cursor-pointer bg-white rounded-full p-1" >
      <TbInfoOctagonFilled />
     </div>
     <div className="float-hover"><button className="btn btn-lg btn-circle text-[35px] bg-white rounded-full "><TbBrandLinkedinFilled/></button></div>
     <div className="float-hover"><button className="btn btn-lg btn-circle text-[30px] bg-white rounded-full "><FaGithub/></button></div>
     <div className="float-hover"><button className="btn btn-lg btn-circle text-[30px] bg-white rounded-full ">C</button></div>
    </div> 
   </section>
  </div>
 );
};

export default Sidebar;
