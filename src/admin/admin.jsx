import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ImMenu } from "react-icons/im";
import { BiArchiveIn } from 'react-icons/bi';
import { BiSolidUserAccount } from 'react-icons/bi';
import Database from '../component/ambilDatabase'
import '../css/index.css'

// import Konten from './konten'
 function Admin() {
    AOS.init();
  const { collapseSidebar } = useProSidebar();arguments
  return (
    
    <div className="adminStyle" style={({ height: "100vh" }, { display: "flex" })}>
   
      <Sidebar 
      
       backgroundColor= "rgba(121, 148, 255, 0.715)"
        style={{  height: "100vh"}}>
        
        <Menu data-aos="zoom-in">
          <MenuItem
          
            icon={<ImMenu />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{textAlign: "end" }}
            
          >
       
            
      <div className="logoside">
        Admin 
      
      </div>
          
          </MenuItem>
          <MenuItem className="menuItem" icon={<BiSolidUserAccount/>}href="/admin">User </MenuItem>
         
          <MenuItem className="menuItem" icon={<BiArchiveIn/>} href="/menu">File Manager</MenuItem>
         
        </Menu>
        
      </Sidebar>

  
     <Database/>
    </div>
  );
}


export default Admin
