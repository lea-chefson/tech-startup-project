import "./teamCard.css";
import React from "react";
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


const TeamCard = ({ name,
    img,
    role,
    desc,
    fb,
    insta,
    twitter,
    linkedin,
    email,
    readMore,
    i,}) => {


          const [expanded, setExpanded] = React.useState(false);

          const handleExpandClick = () => {
            setExpanded(!expanded);
          };
    
        return(
            <div class="container">
  <div class="card">
    <div class="top">
    <img src={img} alt="Person" class="card__image"/>
    <div class="card_right">
    <h1 class="card__name" style={{color:"white"}}>{name}</h1>
    <div class="grid-container">
      <div class="grid-child-posts" style={{textAlign:"center",  margin:"auto", fontSize:"0.9rem",  fontWeight:"400", fontStyle: "italic"}}>
        {role}
      </div>      
    </div>
    <ul class="social-icons">
    <li><a href="#"><i class="fa fa-envelope"></i></a></li>
      <li><a href="#"><i class="fa-solid fa-phone"></i></a></li>
      <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
    </ul>
    </div>
    </div>
    <CardActions disableSpacing className="btn draw-border second">
    <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon style={{color:"white",size:"2rem", padding:"none"}}/>
        </ExpandMore>
        <ExpandMore
         onClick={handleExpandClick}
         className="btn2 draw-border2"
         style={{color:"#58afd1",font:"700 18px  sans-serif"}}>
            <p class="btn2">
        Read More
        </p>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
       {desc}
        </CardContent>
  
      </Collapse>
     
   

  </div>
</div>

        )
    }

    export default TeamCard;