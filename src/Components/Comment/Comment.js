import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardActions } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
    button: {
      color: "green",
    },
    img:{
        borderRadius:"50%",
        marginRight:"10px"
    },
    commentHeadline:{
        display:"flex",
        alignItems:"center",
        color:"blue"
    },
    bg:{
        backgroundColor:"red"
    },
    comment:{
        margin:"0 0 0 50px"
    },
    mainComment:{
        marginBottom:"10px"
    },
    commentContainer:{
        display:"flex",
        width:"100%",
        justifyContent:"space-between",
        
        
    }
  });

const Comment = (props) => {
    const classes = useStyles();
    const {name}=props.comment
    const {img,authorName}=props.author
    return (
        <div className={classes.mainComment}>
            <Card className={classes.commentContainer}>
                
                <CardContent>
                <div className={classes.commentHeadline}>
                    <img className={classes.img} src={img} alt=""/> <b>{authorName}</b>
                </div> 
                <p className={classes.comment}>{name}</p>
                </CardContent>
                <CardActions>
                    <Button className={classes.button} variant="outlined">Reply</Button>
                </CardActions>
            </Card>
            
           
        </div>
    );
};

export default Comment;