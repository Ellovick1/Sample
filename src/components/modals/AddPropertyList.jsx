import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  outline:'none',
  borderRadius:'10px 10px 10px 10px',
  border:'none'
};

export default function AddPropertyList() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div
       onClick={handleOpen}
       className="bg-[#7F3DFF] px-5 text-white py-4 rounded-lg font-[500] text-base leading-4 cursor-pointer">
       list property
       </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="px-4 font-Inter">
                   <h3  className="font-semibold text-lg leading-5 tracking-tight text-[#91919F]">Request Details</h3>
                   <div className="mt-7 font-Inter">
                       <div className="flex items-center mt-4">
                          <p className="flex-1 font-medium text-base leading-5 tracking-tight text-[#91919F]">Flat ID</p>
                          <p className="flex-1">D13</p>
                       </div>
                       <div className="flex items-center mt-4">
                          <p className="flex-1 font-medium text-base leading-5 tracking-tight text-[#91919F]">Apartment Type</p>
                          <p className="flex-1">3 Bedroom Apartment</p>
                       </div>
                       <div className="flex items-center mt-4">
                          <p className="flex-1 font-medium text-base leading-5 tracking-tight text-[#91919F]">Move in Date</p>
                          <p className="flex-1">13-07-2022</p>
                       </div>
                       <div className="flex items-center mt-4">
                          <p className="flex-1 font-medium text-base leading-5 tracking-tight text-[#91919F]">Expiry Date</p>
                          <p className="flex-1 font-medium text-base leading-5">31-07-2022</p>
                       </div>
                       <div className="flex items-center mt-4">
                          <p className="flex-1 font-medium text-base leading-5 tracking-tight text-[#91919F]">Tenancy Status</p>
                          <p className="flex-1 text-[#DD2929] font-sans font-semibold text-base leading-7">Expired</p>
                       </div>
 
                   </div>
                   <div className="max-w-[200px] mx-auto mt-6">
                         <div className="cursor-pointer bg-[#7F3DFF] rounded-xl py-3 px-6 font-Inter font-semibold text-sm leading-6 text-center text-white w-full">
                               Renew Tenancy
                         </div>
                   </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
