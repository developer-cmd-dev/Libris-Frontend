import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useEffect } from 'react';

export default function BackDropLoadingScreen({handleBackDrop}) {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if(handleBackDrop){
      setOpen(true)
    }else{
      setOpen(false)
    }
  }, [handleBackDrop])
  

  return (
    <div className='border'>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
