import React, { Component } from "react";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyANawJyLQKpg6YM4BCoeUMbZMKSUx4Hk_U";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
        };

        YTSearch({key: API_KEY, searchTerm: "surfboards"}, (videos) => {
            this.setState({ videos })
        });
    }


    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]}/>
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
};

export default App;
