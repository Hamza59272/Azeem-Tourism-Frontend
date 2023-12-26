import React ,{useRef} from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/invoice.css'; 
import logo from '../assets/logo.png'
import ReactToPrint from 'react-to-print';
import DescriptionIcon from '@mui/icons-material/Description';
import { Button } from '@mui/material';

const Invoice = () => {
    const data = useLocation().state?.data
    const componentRef = useRef(null);

    const tourDate = new Date(data?.tourDate);

   
    const year = tourDate.getFullYear();
    const month = (tourDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day = tourDate.getDate().toString().padStart(2, '0');

    
    const formattedTourDate = `${day}-${month}-${year}`;

    const landscapePrintStyle = `@media print { @page { size: landscape; } }`;


    return (

       <>
        <div
            style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'flex-end'
            }}
        >
            <ReactToPrint 
                    trigger={() => (
                    <Button variant="contained" 
                    sx={{ 
                        mt:2,
                        mb: 1 , padding:'1%' ,
                        paddingX:'2.5%',
                        backgroundColor:'#7ec7b3',
                        color:'#000',
                        '&:hover' : {
                            color:'#fff',
                        }
                       }}>
                       Save as PDF <DescriptionIcon
                       sx={{
                        ml:2
                       }}  />
                    </Button>
                    )}
                    content={() => componentRef.current}
                    documentTitle='Invoice'
                    pageStyle={landscapePrintStyle}
                />
        </div>
        <div className="invoice-container" ref={componentRef}> 
            <h1 className="invoice-title">Invoice # {data.orderNo}</h1>
            <div 
                style={{
                    display:'flex' , 
                    flexDirection: 'row' , 
                    justifyContent:'space-between'
                }}
            >
               <div>
                    <h2 className="customer-information">Customer Information:</h2>
                        <p style={{marginBottom : 8 }}>Name: {data.fullName}</p>
                        <p style={{marginBottom : 8}}>Phone: {data.phone}</p>
                        <p style={{marginBottom : 8 }}>Email: {data.email}</p>
                        <p style={{marginBottom : 1.5 }}>Pickup Location: {data.pickupLocation}</p>
               </div>
               <div>
                    <img src={logo} style={{marginBottom:8, height:100,width:150}} alt="logo" />
                    <p style={{marginBottom : 8 }}>azeemtourism@gmail.com</p>
                    <p>+97152760013</p>
               </div>
               
            </div>
            <div >
                <h1 className="order-summary">Order Summary</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Total Persons</th>
                            <th>Total (USD)</th>
                            <th>Pickup Time</th>
                            <th>Pickup Location</th>
                            <th>Tour Date</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.tourName}</td>
                            <td>{data.totalPersons}</td>
                            <td>{data.payment}</td>
                            <td>{data.pickupTime}</td>
                            <td>{data.pickupLocation}</td>
                            <td>{formattedTourDate}</td>
                            
                            
                        </tr>
                    </tbody>
                </table>
            </div>
         
        </div>
        </>
    );
};

export default Invoice;
