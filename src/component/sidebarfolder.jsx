import { Sidebar, Menu, MenuItem, useProSidebar,SubMenu } from "react-pro-sidebar";
import Storage from './storage'
import '../css/login.css'

import 'aos/dist/aos.css';

import TambahFolder from './tFolder'
import '../css/index.css'
import { BiArchiveIn } from 'react-icons/bi';
import { BsFillCalendar2MonthFill,BsCalendar2Date } from "react-icons/bs";
import { GrStorage } from 'react-icons/gr';

// import Konten from './konten'
function SideNav() {
   
  const { collapseSidebar } = useProSidebar();arguments
  return (
   
    <div className="app" style={({ height: "100vh" }, { display: "flex" })}>
    
      <Sidebar 
      
       backgroundColor= "rgba(102, 217, 255, 0.500)"
        style={{  height: "100vh" }}>
        <br />
        
        <Menu >
          <MenuItem
          
            // icon={<ImMenu />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{textAlign: "start" }}
            
          >
            <br />
          <div className="logoNav">
          <img src="../public/drive.png" />&nbsp; Drive Bosok
       
          </div>
     
         
          </MenuItem>
         
          <br />
          <TambahFolder/>
        <br />
        
          <MenuItem className="menuItem" icon={<BiArchiveIn/>} href="/konten">Drive Saya</MenuItem>
          <SubMenu className="menuItem" icon={<BsFillCalendar2MonthFill />} label="Tahun File">
            <MenuItem icon={<BsCalendar2Date />}>2020</MenuItem>
            <MenuItem icon={<BsCalendar2Date />}>2021</MenuItem>
            <MenuItem icon={<BsCalendar2Date />}>2022</MenuItem>
      </SubMenu>
      <MenuItem className="menuItem" icon={<GrStorage/>} href="/konten">Storage</MenuItem>
         <Storage/>
        </Menu>

  
      </Sidebar>
 

      
     
     
     
    </div>
  
  );
}


export default SideNav
