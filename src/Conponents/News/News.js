import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});
const News = (props) => {
    const [more,setMore] = useState(false);
    const {title,description,urlToImage,content} = props.article;
    const handleMore =()=>{
        setMore(true)
    }
    const classes = useStyles();
    return (
        <Grid item  xs={4}>
            <Card >
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={urlToImage}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h4">
                            {title}
                         </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {
                                description
                            }
                         </Typography>

                         <Typography variant="body2" color="textSecondary" component="p">
                            { 
                                more && content
                            }
                         </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button onClick={handleMore} size="small" color="primary">
                        Learn More
                  </Button>
                </CardActions>
            </Card>
            </Grid>
    );
};

export default News;