import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState  } from "react";
import { getItems } from "../features/itemSlice";
import {FormattedMessage} from 'react-intl';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import sy from 'styled-components';


const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#E30613',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#E30613',
    zIndex: 1,
    fontSize: 60,
    fontfamily: 'Cairo'
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147))',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147))',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 6,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147))',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147))',
  }),
})
);

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <TaskAltRoundedIcon />,
    2: <TaskAltRoundedIcon />,
    3: <LocalShippingRoundedIcon />,
    4:<FactCheckRoundedIcon/>
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = [  <FormattedMessage id = "shipmentCreated"/>,   <FormattedMessage id = "receivedFromVendor"/>,   <FormattedMessage id = "shipmentOutforDelivery"/>,  <FormattedMessage id = "delivered" />];

export default function ProgessBar() {
  const dispatch = useDispatch();
  const {  items}  = useSelector((state) => state.items);
    
    useEffect(() => {
      dispatch(getItems());
    }, [dispatch]);
   let num =1
   if(items.CurrentStatus?.state=="CANCELLED") {
    console.log(items.CurrentStatus.state=="CANCELLED");
      num=2
  } 
  if(items.CurrentStatus?.state=="DELIVERED") {
    console.log(items.CurrentStatus.state=="DELIVERED");
      num=3
  } 
  if(items.CurrentStatus?.state=="DELIVERED_TO_SENDER") {
    console.log(items.CurrentStatus.state=="DELIVERED_TO_SENDER");
      num=3
  } 
  return (
    
  
    <Stack sx={{ width: '100%' }} spacing={4}>

    
      <Stepper alternativeLabel activeStep={num} connector={<ColorlibConnector />}>
       
        {steps.map((label) => (
          <Step key={label} >
          
            <StepLabel StepIconComponent={ColorlibStepIcon} >
              <Hg>
              {label}
              </Hg>
             
            </StepLabel>
            
         
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
const Hg =sy.div`
color:black;
       font-size: 15px;
        font-family: 'Cairo', sans-serif;
`;