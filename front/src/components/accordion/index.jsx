import './index.scss'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: 'none', // Remove border
  '&:not(:last-child)': {
    borderBottom: 'none', // Remove bottom border
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'transparent', // Remove background color
  flexDirection: 'row', // Icon to the right
  alignItems: 'center', // Center vertically
  paddingRight: theme.spacing(1), // Add some padding to the right for the icon
  [`& .${accordionSummaryClasses.expandIconWrapper}`]: {
    marginLeft: 'auto', // Push icon to the right
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: 'none', // Remove border top
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState(false); // Initially closed

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography component="span">Woman’s Fashion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography component="span">Men’s Fashion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Suspendisse
            malesuada lacus 
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}