import React from 'react'

export default function Backup() {
  return (
    <div>

<section class="hero">
                        <div class="container">
                            <div class="row">

                                <div class="col-lg-6 offset-lg-3">



                                    {
                                        posts.map((item) => (


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
                                                        item.post_image !== '' && item.post_image !== null ?
                                                            <div class="cardbox-item">
                                                                <img class="img-fluid" src={item.post_image} alt="Image" />
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
                                                                    {item.post_description}
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
                                                        item.post_image !== '' && item.post_image !== null && item.post_description !== 'none' ?
                                                            <>
                                                                <div className="post-username">
                                                                    <b>isubhamsr : </b>
                                                                </div>
                                                                {/* <div className="description-body"> */}
                                                                <ShowMoreText
                                                                    lines={1}
                                                                    more=' Show more'
                                                                    less=' Show less'
                                                                    anchorClass='ok'
                                                                // onClick={this.executeOnClick}
                                                                // expanded={false}
                                                                // width={280}
                                                                >
                                                                    {item.post_description}
                                                                </ShowMoreText>
                                                                {/* </div> */}
                                                            </>
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

                                        ))
                                    }






                                </div>

                            </div>
                        </div>
                    </section>
      
    </div>
  )
}





<section class="hero">
      <div class="container">
        <div class="row">

          <div class="col-lg-6 offset-lg-3">


            
            {
              allPosts.map((item)=>(

                
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
                <Link class="media m-0" to={`/profile/${item.posted_by.username}`}>
                  <div class="d-flex mr-3">
                    <img class="img-fluid rounded-circle" src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/4.jpg" alt="User" />
                  </div>
                  <div class="media-body">
                    <p class="m-0">{item.posted_by.username}</p>
                  </div>
                </Link>
              </div>
                <>
              {
                item.post_image !== '' && item.post_image !== null ?
              <div class="cardbox-item">
                <img class="img-fluid" src={item.post_image} alt="Image" />
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
                    {item.post_description}
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
                item.post_image !== '' && item.post_image !== null && item.post_description !== 'none'?
                <>
                <div className="post-username">
                  <b>isubhamsr : </b>
                </div>
                {/* <div className="description-body"> */}
                  <ShowMoreText
                    lines={1}
                    more=' Show more'
                    less=' Show less'
                    anchorClass='ok'
                    // onClick={this.executeOnClick}
                    // expanded={false}
                  // width={280}
                  >
                     {item.post_description}
                  </ShowMoreText>
                {/* </div> */}
                </>
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
                
              ))
            }

              
            <section style={{ display: "flex" }}>
              {
                allPosts.map((item) => (
                  <PostCard userName={item.posted_by.username} post_image={item.post_image} post_description={item.post_description} postId={item._id} userId={userId} likes={item.likes} comments={item.comments} />
                ))
              }
            
            {/* <div class="card" style={{ width: "25rem", 'margin-top': '24px', height: '0%' }}>
              <div class="card-header">
                Featured
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Vestibulum at eros</li>
              </ul>
            </div> */}
          </section>



          </div>

        </div>
      </div>
    </section>