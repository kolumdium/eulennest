import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link} from 'react-scroll'
import VergangeneProjekte from './VergangeneProjekte';
import VergangeneProjekte2 from './VergangeneProjekte2';
import VergangeneProjekteNoPic from './VergangeneProjekteNoPic';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <Link to={"panel1bh-header"} spy={true} smooth={true}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Vor nicht allzulanger Zeit
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>Klicken um mehr anzuzeigen oder zu verstecken.</Typography>
                </AccordionSummary>
            </Link>
        <AccordionDetails>
          <VergangeneProjekte/>
        </AccordionDetails>
      </Accordion>
      
    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <Link to={"panel1bh-header"} spy={true} smooth={true}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>Mehr Projekte</Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Klicken um mehr anzuzeigen oder zu verstecken.
                </Typography>
            </AccordionSummary>
        </Link>
            <AccordionDetails>
                <VergangeneProjekte2/>
            </AccordionDetails>
        </Accordion>

    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <Link to={"panel1bh-header"} spy={true} smooth={true}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Projekte ohne Bilder
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                    Klicken um mehr anzuzeigen oder zu verstecken.
                </Typography>
            </AccordionSummary>
        </Link>
            <AccordionDetails>
                <VergangeneProjekteNoPic/>
            </AccordionDetails>
        
    </Accordion>
      {/* <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}
