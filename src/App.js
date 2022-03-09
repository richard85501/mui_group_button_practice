import { ButtonGroup } from '@mui/material';
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import { ToggleButtonGroup } from '@mui/material';

import {React ,useState,useEffect} from 'react'

function App() {
  const [counter,setCounter] = useState(0)
  const [buttonfun,setButtonfunc] = useState(false)

  const counterhandler = (action) =>{
    if(action === 'plus'){
      setCounter(counter+1)
    }else if(action === 'clear'){
      setCounter(0)
    }else if(action === 'buttonfuncChange'){
      setButtonfunc(!buttonfun)
    }
  }

  const buttons = [
    <Button key="one" onClick={() => counterhandler('plus')} disabled={buttonfun}>CLICK:{counter}</Button>,
    <Button key="two" onClick={() => counterhandler('clear')} >CLEAR</Button>,
    <Button key="three" onClick={() => counterhandler('buttonfuncChange')}>{buttonfun ? 'ABLE':'DISABLE'}</Button>,
  ];

  return (
    <>
    <Box
      sx={{
        display: 'flex',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
      >
        {buttons}
      </ButtonGroup>
    </Box>
    </>
  );
}

export default App;
