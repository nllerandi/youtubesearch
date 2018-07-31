import React from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import App from './App';

const API_KEY = "AIzaSyANawJyLQKpg6YM4BCoeUMbZMKSUx4Hk_U";

YTSearch({key: API_KEY, searchTerm: "surfboards"}, function(data) {
    console.log(data);
});

ReactDOM.render(
    <App />,
    document.querySelector(".container")
);

