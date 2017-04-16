import React, {
    Component
} from 'react';
import ShowListing from "./show-listing";
import logo_subtitle from './../assets/logo_subtitle.png'

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            youtubeEmbedUrl: this.props.nightsListingData.listings[0].topSongs[0].youtubeEmbedUrl
        };
        this.setYoutubeEmbedUrl = this.setYoutubeEmbedUrl.bind(this);
    }

    setYoutubeEmbedUrl(youtubeEmbedUrl) {
        this.setState({
            youtubeEmbedUrl: youtubeEmbedUrl
        });
    }

    render() {
        return (
            <div id="main">
        <div>
        <div id="header">
        <img src={logo_subtitle} id="logo_sub" />
        </div>

        </div>
          <iframe className="fixed" width="300" height="169" src={this.state.youtubeEmbedUrl} allowFullScreen></iframe>
        <div className="less-top-padding" id="main-content"> 
          {this.props.nightsListingData.listings.map(function(showListing, index){
            return <ShowListing
                  showListing={showListing}
                  key={index}
                  youtubeEmbedUrl={this.state.youtubeEmbedUrl} 
                  setYoutubeEmbedUrl={this.setYoutubeEmbedUrl}/>
          }, this)}
        </div>
      </div>
        );
    }
}