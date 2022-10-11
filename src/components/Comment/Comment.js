import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useParams } from 'react-router-dom';
import comments from '../../FakeData/comments.json';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';


const Comment = () => {
    const {postId}=useParams();
    const filterComments=comments.data.filter(cmnt => cmnt.post=== postId);
    return (
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography>Comments : {filterComments.length}</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                {
                    filterComments.map(comment => 
                        
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe">
                                    <img src={comment.owner.picture} alt="" />
                                </Avatar>
                                }
                                title={`${comment.owner.title.toUpperCase()} ${comment.owner.firstName} ${comment.owner.lastName}`}
                                subheader={comment.message}
                            />
                        
                        )
                }
            </Typography>
            </AccordionDetails>
        </Accordion>

    );
};

export default Comment;