import React, {useState, useEffect} from 'react'
import ShowMoreText from 'react-show-more-text';
import { Link } from 'react-router-dom'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import HttpClient from '../utility/HttpClient'

export default function PostCard({userName, post_image, post_description, postId, userId, likes, comments, profilePhoto}) {

    const [isLike, setIsLike] = useState(false)
    const [comment, setComment] = useState(null)
    const avtar = `https://ui-avatars.com/api/?name=${userName}&size=210` 
    useEffect(()=>{
        // console.log(userId);
        // console.log(likes);
        if(likes.includes(userId)){
            // console.log('yes');
            setIsLike(true)
        }
    }, [])

    const doLike = async ()=>{
        // console.log('like click');
        const data = {
            postId : postId
        }
        const response = await HttpClient.put('like', data);
        console.log(response);
        setIsLike(true)
    }

    const doUnLike = async ()=>{
        const data = {
            postId : postId
        }
        const response = await HttpClient.put('unlike', data);
        console.log(response);
        setIsLike(false)
    }

    const addcomment = async (e) =>{
        if(e.keyCode == 13){
            const data = {
                postId : postId,
                comment : comment
            }
            const response = await HttpClient.put('comment', data);
            console.log(response);
            setComment('')
         }
    }

    return (
        <section class="hero">
            <div class="container">
                <div class="row">
                    {/* <div style={{ 'flex': '3 0 50%', 'margin-left': '20%', 'max-width': '75%'}}> */}
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
                                        <Link class="media m-0" to={`/profile/${userName}`}>
                                            <div class="d-flex mr-3">
                                                <img class="img-fluid rounded-circle" src={profilePhoto !== "" ? profilePhoto : avtar} alt="User" />
                                            </div>
                                            <div class="media-body">
                                                <p class="m-0">{userName}</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <>
                                        {
                                            post_image !== '' && post_image !== null ?
                                                <div class="cardbox-item" onDoubleClick={doLike}>
                                                    <img class="img-fluid" src={post_image} alt="Image" />
                                                </div>
                                                :
                                                <div className="post-description">
                                                    <ShowMoreText
                                                        lines={10}
                                                        more='Show more'
                                                        less='Show less'
                                                        anchorClass='ok'
                                                    // onClick={this.executeOnClick}
                                                    // expanded={false}
                                                    // width={280}
                                                    >
                                                        {post_description}
                                                    </ShowMoreText>
                                                    {/* <p>{item.post_description}</p> */}
                                                </div>
                                        }
                                    </>
                                    <div class="cardbox-base">
                                        <ul class="float-right">
                                            <li><a><i class="fa fa-comments"></i></a></li>
                                            <li><a><em class="mr-5">{comments.length}</em></a></li>
                                            <li><a><i class="fa fa-share-alt"></i></a></li>
                                            <li><a><em class="mr-3">03</em></a></li>
                                        </ul>
                                        <ul>
                                            {
                                                isLike !== true ?
                                            <li onClick={doLike}><FavoriteBorderIcon /></li>
                                            :
                                            <li onClick={doUnLike}><FavoriteIcon style={{  "color" :"red" }} /></li>
                                            }
                                            {/* <li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/3.jpeg" class="img-fluid rounded-circle" alt="User" /></a></li>
                                            <li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/1.jpg" class="img-fluid rounded-circle" alt="User" /></a></li>
                                            <li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/5.jpg" class="img-fluid rounded-circle" alt="User" /></a></li>
                                            <li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/2.jpg" class="img-fluid rounded-circle" alt="User" /></a></li> */}
                                            <li><a><span>{likes.length} Likes</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="post-description">
                                        {
                                            post_image !== '' && post_image !== null && post_description !== 'none' ?
                                                <React.Fragment>
                                                    <div className="post-username">
                                                        <b>{userName} : </b>
                                                    </div>
                                                    {/* <div className="description-body"> */}
                                                    <ShowMoreText
                                                        lines={2}
                                                        more=' Show more'
                                                        less=' Show less'
                                                        anchorClass='ok'
                                                    // onClick={this.executeOnClick}
                                                    // expanded={false}
                                                    // width={280}
                                                    >
                                                        {post_description}
                                                    </ShowMoreText>
                                                    {/* </div> */}
                                                </React.Fragment>
                                                : null
                                        }
                                    </div>
                                    <div className="user-comments">
                                        {/* <span><b>Subham</b>: Hello</span>
                                        <span><b>Subham</b>: Hello</span>
                                        <span><b>Subham</b>: Hello</span>
                                        <span><b>Subham</b>: Hello</span> */}
                                        {
                                            comments.length === 0 ?
                                            <span>No Comments</span>
                                            :
                                            comments.map((item)=>(
                                                <span><b>{item.posted_by.username}</b>: {item.text}</span>
                                            ))
                                        }
                                    </div>
                                    <div class="cardbox-comments">
                                        <div>
                                            <span class="comment-avatar">
                                                <a href=""><img class="rounded-circle" src={profilePhoto !== "" ? profilePhoto : avtar} alt="..." /></a>
                                            </span>
                                        </div>
                                        <div class="search">
                                            <input placeholder="Write a comment" type="text" onKeyDown={addcomment} value={comment} onChange={(e) => setComment(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>

                    </div>
                 </div>
             </div>
        </section>
    )
}
