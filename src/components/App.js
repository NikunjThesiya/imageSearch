import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
	state = { images: [] };

	onSearchSubmit = async (term) => {
		const response = await axios.get("https://api.unsplash.com/search/photos", {
			params: { query: term },
			headers: {
				Authorization: "Client-ID -lzJ3MSbGkyz8gXaNZfsW0BB0acUiGOpBDgyGrEkdXc",
			},
		});
		console.log(this);
		// .then((response) => {
		// 	console.log(response.data.results);
		// });
		// console.log(response.data.results);
		this.setState({ images: response.data.results });
	};
	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				{/* total {this.state.images.length} images found 😄. */}
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
