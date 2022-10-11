import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Comment from '../Comment/Comment'

const Post = ({postInfo,routerStatus}) => {
    return (
      <Box sx={{ width: '100%',marginTop:'15px' }}>
        <Stack spacing={2} justifyContent="center" alignItems="center">
        <Card sx={{width:{xs:'90%',sm: '80%',lg:670 },marginBottom:5}}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe">
                <img src={postInfo.owner?.picture} alt="" />
              </Avatar>
            }
            title={`${postInfo.owner?.title} ${postInfo.owner?.firstName} ${postInfo.owner?.lastName}`}
            subheader={`Tags: ${postInfo.tags[0]},${postInfo.tags[1]},${postInfo.tags[2]}`}
          />
          <CardMedia
            sx={{height:500}}
            component="img"
            height="140"
            image={postInfo.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {postInfo.text}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`${!routerStatus ? postInfo.postdescription.slice(0,85) : postInfo.postdescription}...`}
            </Typography>
          </CardContent>
          {
            !routerStatus &&
                  <CardActions>
                    <Link to={`/post/${postInfo.id}`} style={{textDecoration: "none"}} >
                        <Button size="small">Learn More</Button>
                    </Link>
                  </CardActions>
          }
          {
            routerStatus &&
                  <Comment/>
          }
        </Card>
        </Stack>
      </Box>
    );
};

export default Post;
//63456381bdb86bf5d9528b01