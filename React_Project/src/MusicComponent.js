import React from 'react'
import './MusicComponent.css'
function MusicComponent() {
  return (
    <div>
        <div className='container'>
            <div className="item first">
                <img className='logo'
                src="https://i.pinimg.com/originals/ab/04/74/ab047407148e53e2c3ad0761af494925.jpg"
                alt='no image'/>

            </div>
            <div className="item second">
            <table class="music-table table">
        <thead>
            <tr>
                <th colspan="2">For You</th>
                <th colspan="2">Top Tracks</th>
            </tr>
            <tr>
                <td colspan="4">
                    <div class="search-container">
                    <input type="text" placeholder="Search Song or Artist" className="search-input" />
                        <button class="search-button">🔍</button>
                    </div>
                </td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td> 
                    <img src='https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?cs=srgb&dl=pexels-didsss-3844788.jpg&fm=jpg' className='round-image'></img>
                </td>
                <td>Song Title 1</td>
                <td>3:45</td>
            </tr>
            <tr>
                <td>Song Title 2</td>
                <td>4:20</td>
            </tr>
            <tr>
                <td>Song Title 3</td>
                <td>2:58</td>
            </tr>
        </tbody>
    </table>
            </div>
            <div className="item third">
                <h1>Title</h1>
                <h2>Description</h2>
                <img src='https://cms.samespace.com/assets/0083048f-5fd8-47fd-9013-6d340151b345' className='image'></img>
                <audio src='https://pub-172b4845a7e24a16956308706aaf24c2.r2.dev/august-145937.mp3' controls></audio>
            </div>
        </div>

    </div>
  )
}

export default MusicComponent