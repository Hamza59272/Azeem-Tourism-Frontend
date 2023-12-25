import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Pakistan from "../assets/Pakistan.png";
import UAE from "../assets/UAE.png";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #ffff',
  borderRadius:5,
  boxShadow: 24,
  p: 4,
};

export default function CountrySelectionModal({ open, onSelect }) {
    return (
      <div>
        <Modal
          open={open}
          onClose={() => onSelect("Both")}
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" sx={{textAlign:'center'}} variant="h6" component="h2">
              Select Country
            </Typography>
            <Box
                sx={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent : 'space-evenly',
                    mt:2
                }}
            >
                <Button 
                    sx={{
                        backgroundColor:'#fff9',
                        color : 'white',
                        '&:hover': {
                            backgroundColor: '#fff',
                            color: '#3c52b2',
                            border:1
                        }
                    }} 
                onClick={() => onSelect("Pakistan")}>
                <img src={Pakistan} alt="Pakistan" 
                    style ={{
                        height:55,
                        width:55
                    }} 
                    />
                
                </Button>
                <Button
                    sx={{
                        backgroundColor:'#fff9',
                        color : 'white',
                        '&:hover': {
                            backgroundColor: '#fff',
                            color: '#3c52b2',
                            border:1
                        }
                    }}
                    onClick={() => onSelect("UAE")}>
                        <img src={UAE} alt="UAE" 
                    style ={{
                        height:55,
                        width:55
                    }} 
                    />
                    </Button>
                <Button 
                    sx={{
                        backgroundColor:'#fff',
                        color : '#000',
                        fontSize:'20px',
                        '&:hover': {
                            backgroundColor: '#fff',
                            color: '#3c52b2',
                        }
                    }}
                    onClick={() => onSelect("Both")}>Both</Button>
            </Box>
          </Box>
        </Modal>
      </div>
    );
  }

