
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';


import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

import PrintIcon from '@mui/icons-material/Print';






function BasicSpeedDial() {
  const print = () => window.print();

  return (
    <Box sx={{ height: 700, marginRight:'15px' , transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position:'fixed', bottom: 10, right: 5 }}
        icon={<SpeedDialIcon />}
      >
      
      <SpeedDialAction onClick={print} icon={<PrintIcon/>} tooltipTitle ="print" />
      <SpeedDialAction icon={<FileUploadOutlinedIcon/>} tooltipTitle ="Upload" />
      </SpeedDial>
    </Box>
  );
}
export default BasicSpeedDial