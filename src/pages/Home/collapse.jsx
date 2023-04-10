import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { Slide } from 'react-reveal';




export default function ControlledAccordions(props) {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <div className="section_full"
      style={{ "--bg-img": `url(${props.bgImg})`,
      padding:"none" }}>
      <Accordion elevation={0}
        sx={{
          "--bg-img": `url(${props.bgImg})`,
          background: "var(--bg-img) rgba(0, 0, 0, 0.30)",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          borderTop:"3px solid #376F70",
          borderBottom:"2px solid #376F70   ",
        }} className="accordion" expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
        <AccordionSummary
        style={{"--ml":`${props.ml}`}}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Slide left cascade duration={500}>
          <Typography id="typo">
            <h1 className="acc1 title" 
            style={{ "--bg-img": `url(${props.bgImg})` }}>{props.title}</h1>
          </Typography>
          </Slide>
        </AccordionSummary>
        <AccordionDetails sx={{padding:"0"}}> 
        <div className={"section_sub" +` ${props.format}`} >
          <div className={`main_text content`} sx={{fontWeight:"500"}}>{props.para}</div>
          <img src={props.bgImg} alt="illustration photo" className="section_img"></img>
          </div>
        </AccordionDetails>
      </Accordion>
    
    </div>
  );

}