// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 500,
//   },
//   media: {
//     height: 'auto',
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

// export default function HomeCard() {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card className={classes.root}>
//       <CardHeader
//         avatar={
//           <Avatar aria-label="recipe" className={classes.avatar}>
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2016"
//       />
//       <CardMedia
//         className={classes.media}
//         image="https://source.unsplash.com/WLUHO9A_xik/1600x900"
//         title="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">
//           This impressive paella is a perfect party dish and a fun meal to cook together with your
//           guests. Add 1 cup of frozen peas along with the mussels, if you like.
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <IconButton
//           className={clsx(classes.expand, {
//             [classes.expandOpen]: expanded,
//           })}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </IconButton>
//       </CardActions>
//     </Card>
//   );
// }


import React from 'react'
import ShowMoreText from 'react-show-more-text';

export default function HomeCard() {
  return (
    <section class="hero">
      <div class="container">
        <div class="row">

          <div class="col-lg-6 offset-lg-3">

            <div class="cardbox shadow-lg bg-white">

              <div class="cardbox-heading">
                <div class="dropdown float-right">
                  <button class="btn btn-flat btn-flat-icon" type="button" data-toggle="dropdown" aria-expanded="false">
                    <em class="fa fa-ellipsis-h"></em>
                  </button>
                  <div class="dropdown-menu dropdown-scale dropdown-menu-right" role="menu" style={{ position: 'absolute', transform: 'translate3d(-136px, 28px, 0px)', top: '0px', left: '0px' }}>
                    <a class="dropdown-item" href="#">Hide post</a>
                    <a class="dropdown-item" href="#">Stop following</a>
                    <a class="dropdown-item" href="#">Report</a>
                  </div>
                </div>
                <div class="media m-0">
                  <div class="d-flex mr-3">
                    <a href=""><img class="img-fluid rounded-circle" src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/4.jpg" alt="User" /></a>
                  </div>
                  <div class="media-body">
                    <p class="m-0">Benjamin Robinson</p>
                  </div>
                </div>
              </div>

              <div class="cardbox-item">
                <img class="img-fluid" src="https://source.unsplash.com/random/1600x900" alt="Image" />
              </div>
              <div class="cardbox-base">
                <ul class="float-right">
                  <li><a><i class="fa fa-comments"></i></a></li>
                  <li><a><em class="mr-5">12</em></a></li>
                  <li><a><i class="fa fa-share-alt"></i></a></li>
                  <li><a><em class="mr-3">03</em></a></li>
                </ul>
                <ul>
                  <li><a><i class="fa fa-thumbs-up"></i></a></li>
                  <li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/3.jpeg" class="img-fluid rounded-circle" alt="User" /></a></li>
                  <li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/1.jpg" class="img-fluid rounded-circle" alt="User" /></a></li>
                  <li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/5.jpg" class="img-fluid rounded-circle" alt="User" /></a></li>
                  <li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/2.jpg" class="img-fluid rounded-circle" alt="User" /></a></li>
                  <li><a><span>242 Likes</span></a></li>
                </ul>
              </div>
              <div className="post-description">
                <div className="post-username">
                  <b>isubhamsr : </b>
                </div>
                <div className="description-body">
                <ShowMoreText
                lines={2}
                more='Show more'
                less='Show less'
                anchorClass='ok'
                // onClick={this.executeOnClick}
                expanded={false}
                // width={280}
            >
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex elit, tristique vitae turpis ac, pellentesque iaculis libero. In accumsan velit sit amet nisi tempor, ac ornare arcu convallis. Praesent volutpat magna nec dui egestas, sit amet aliquet felis semper. Fusce lacinia turpis a pharetra commodo. Vestibulum ac purus in sapien vulputate vestibulum vitae nec tortor. Morbi ultricies, nisi at facilisis feugiat, nulla metus faucibus quam, at consectetur nunc orci quis nisi. Etiam ullamcorper elementum elit sit amet iaculis. Ut eget lacus vestibulum, vehicula eros sit amet, condimentum est. Aliquam finibus lacus non tristique fringilla. Vivamus lacinia, nulla eget vulputate volutpat, ex nisi pellentesque mi, vel mattis tortor sapien ut massa. Phasellus sit amet lacus volutpat, bibendum dui at, facilisis est. Integer rutrum orci vitae augue dictum dictum. Ut et mauris magna. Morbi elementum scelerisque mi vel luctus.

Aenean magna turpis, tristique id varius vitae, ultricies non sem. Mauris quis magna a quam maximus pretium in a felis. Cras viverra, lectus ac ullamcorper maximus, eros nulla finibus mi, finibus finibus felis dolor in velit. Mauris commodo lorem ac rhoncus condimentum. Suspendisse imperdiet malesuada augue at auctor. Nullam mattis nulla et velit egestas, congue porta elit pharetra. Phasellus sed bibendum nulla.
</ShowMoreText>
                </div>
              </div>
              <div className="user-comments">
                <span><b>Subham</b>: Hello</span>
                <span><b>Subham</b>: Hello</span>
                <span><b>Subham</b>: Hello</span>
                <span><b>Subham</b>: Hello</span>
              </div>
              <div class="cardbox-comments">
                <div>
                  <span class="comment-avatar">
                    <a href=""><img class="rounded-circle" src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/6.jpg" alt="..." /></a>
                  </span>
                </div>
                <div class="search">
                  <input placeholder="Write a comment" type="text" />
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
