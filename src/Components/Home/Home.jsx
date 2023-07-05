import React from 'react';
import "./Home.css"
// import {video} from './src/assets/video/video.mp4';
const Home = () => {
  return (
    <>
  
    <div className='video-main'>
    <video autoPlay muted loop>
  <source src="https://player.vimeo.com/external/538634777.sd.mp4?s=048ce8f6f0f822f2714df7955bef56538569ad81&profile_id=164&oauth2_token_id=57447761"/>
  </video>
</div>
        <div className='details'>
            <h1>GeekCart Mart</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur similique aliquam voluptas tenetur maiores officiis sed ea nihil perspiciatis, suscipit aliquid cupiditate iure quas facilis, est, placeat autem aspernatur. Excepturi commodi ipsam, impedit nihil pariatur exercitationem aliquid iusto magni repudiandae animi voluptatibus, aspernatur harum hic provident velit possimus iure, inventore distinctio blanditiis est! Et quam nam amet, beatae unde error architecto earum, laborum exercitationem explicabo aspernatur impedit at minima molestias!</p>
            <button>Explore Me</button>
       
    </div>
      
    </>
  )
}

export default Home
