import React from 'react'
import ShowMoreText from 'react-show-more-text';
import { Link } from 'react-router-dom'

export default function PostCard({userName, post_image, post_description, }) {
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
                                        <Link class="media m-0" to={`/profile/${userName}`}>
                                            <div class="d-flex mr-3">
                                                <img class="img-fluid rounded-circle" src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/4.jpg" alt="User" />
                                            </div>
                                            <div class="media-body">
                                                <p class="m-0">{userName}</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <>
                                        {
                                            post_image !== '' && post_image !== null ?
                                                <div class="cardbox-item">
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
                                        {
                                            post_image !== '' && post_image !== null && post_description !== 'none' ?
                                                <React.Fragment>
                                                    <div className="post-username">
                                                        <b>isubhamsr : </b>
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
