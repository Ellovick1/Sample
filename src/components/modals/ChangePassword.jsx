import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditIcon from "../../assets/edit-icon.png";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    outline: 'none',
    borderRadius: '10px 10px 10px 10px',
    border: 'none'
};

export default function ChangePassword() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div
                onClick={handleOpen}
                >
               <img src={EditIcon} alt="" className='w-[20px] absolute right-[2rem] top-[2.7rem]' style={{top:'2.7rem'}}/>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="px-4 font-Inter">
                   <h3  className="font-semibold text-lg leading-5 tracking-tight text-[#91919F] text-center">Change Password</h3>
                        <form className="mt-12 flex flex-col gap-8">
                            <div>
                                <p className="text-[#7D7D7D] pb-1 text-md text-lg">
                                    Existing Password 
                                </p>
                                <input
                                    type="text"
                                    className="border border-black rounded-xl py-3 w-full px-4"
                                />
                            </div>
                            <div>
                                <p className="text-[#7D7D7D] pb-1 text-md text-lg">Current Password</p>
                                <input
                                    type="text"
                                    className="border border-black rounded-xl py-3 w-full px-4"
                                />
                            </div>
                           
                            <input
                                type="submit"
                                value="Update"
                                className="bg-[#7F3DFF] text-white font-semibold rounded-xl py-3 w-full mt-4 mx-auto md:w-1/2"
                            />
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
