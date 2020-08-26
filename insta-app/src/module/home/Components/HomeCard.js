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
                <img class="img-fluid" src="https://source.unsplash.com/random/1080x1080" alt="Image" />
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
                {/* <div className="description-body"> */}
                  <ShowMoreText
                    lines={1}
                    more='Show more'
                    less='Show less'
                    anchorClass='ok'
                    // onClick={this.executeOnClick}
                    // expanded={false}
                  // width={280}
                  >
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex elit, tristique vitae turpis ac, pellentesque iaculis libero. In accumsan velit sit amet nisi tempor, ac ornare arcu convallis. Praesent volutpat magna nec dui egestas, sit amet aliquet felis semper. Fusce lacinia turpis a pharetra commodo. Vestibulum ac purus in sapien vulputate vestibulum vitae nec tortor. Morbi ultricies, nisi at facilisis feugiat, nulla metus faucibus quam, at consectetur nunc orci quis nisi. Etiam ullamcorper elementum elit sit amet iaculis. Ut eget lacus vestibulum, vehicula eros sit amet, condimentum est. Aliquam finibus lacus non tristique fringilla. Vivamus lacinia, nulla eget vulputate volutpat, ex nisi pellentesque mi, vel mattis tortor sapien ut massa. Phasellus sit amet lacus volutpat, bibendum dui at, facilisis est. Integer rutrum orci vitae augue dictum dictum. Ut et mauris magna. Morbi elementum scelerisque mi vel luctus.

                    #Aenean magna turpis, tristique id varius vitae, ultricies non sem. Mauris quis magna a quam maximus pretium in a felis. Cras viverra, lectus ac ullamcorper maximus, eros nulla finibus mi, finibus finibus felis dolor in velit. Mauris commodo lorem ac rhoncus condimentum. Suspendisse imperdiet malesuada augue at auctor. Nullam mattis nulla et velit egestas, congue porta elit pharetra. Phasellus sed bibendum nulla.
</ShowMoreText>
                {/* </div> */}
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
