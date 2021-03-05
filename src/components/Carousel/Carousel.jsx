import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import image1 from "../assets/city_img1.png";
import image2 from "../assets/city_img2.png";
import image3 from "../assets/city_img3.png";

let tileData = [
	{
		img: image1,
		title: "Image1",
		author: "author",
	},
	{
		img: image2,
		title: "Image2",
		author: "author",
	},
	{
		img: image3,
		title: "Image3",
		author: "author",
	},
	{
		img: image1,
		title: "Image4",
		author: "author",
	},
];

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden",
	},
	gridList: {
		// height: "149px",

		flexWrap: "nowrap",
		transform: "translateZ(0)",
	},
}));

export default function Carousel() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<GridList className={classes.gridList} cols={2.5}>
				{tileData.map((tile) => (
					<GridListTile key={tile.img}>
						<img src={tile.img} alt={tile.title} height={"149px"} />
					</GridListTile>
				))}
			</GridList>
		</div>
	);
}
