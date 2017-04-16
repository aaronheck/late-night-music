import React, { Component } from 'react';

export default class ShowListing extends Component {
  render() {
    return (
      <div className="show-block">
            <div className="show-name">{this.props.showListing.showName}</div>
            <div>
                  <div className="artist-card">
                        <img height="200px" width="200px" src={this.props.showListing.artistPhotoUrl} />
                        <div className="artist-card-info">
                              <div className="artist-info-name">
                                    {this.props.showListing.artistName}
                              </div>

                              <div className="artist-card-bio">
                                    {this.props.showListing.artistBlurb}
                              </div>
                              <a target="_blank" href={this.props.showListing.artistWikipediaUrl}><div className="read-more" value="wikipedia">Read More</div></a>
                        </div>
                  </div>
                  <div className="artist-name-and-top-songs">
                        <div className="artist-name">{this.props.showListing.artistName}</div>
                        <span className="channel-and-time">{this.props.showListing.channelAndTime}</span>
                        <div className="top-songs">
                              <div className="top-song-header">
                                    <span className="top-songs-header">TOP SONGS</span>
                              </div>
                              {this.props.showListing.topSongs.map((topSong, index)=>{
                                    return <div className={this.props.youtubeEmbedUrl === topSong.youtubeEmbedUrl ? "song-row selected-row" : "song-row"}
                                                key={index}
                                                onDoubleClick={()=>this.props.setYoutubeEmbedUrl(topSong.youtubeEmbedUrl)}>
                                                <div className={this.props.youtubeEmbedUrl === topSong.youtubeEmbedUrl ? "play-or-speaker speaker" : "play-or-speaker play"}> </div>
                                                <div className="song-title">{topSong.songName}</div>
                                          </div>;
                              }, this)}
                        </div>
                  </div>
            </div>
            <div className="hr"></div>
      </div>
    );
  }
}
