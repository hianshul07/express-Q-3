const express = require("express");
const app = express();
// app.use(express.json())
const port = 3000;


// example blogs Json data
let blogs = [
	{
		id: 1,
		title: "Blog 1",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, fugiat! Dolorum dolores incidunt quo quod ipsa debitis ad dolore. Corrupti quas harum qui eveniet. Perspiciatis ex laudantium eveniet voluptate soluta!",
	},
	{
		id: 2,
		title: "Blog 2",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, fugiat! Dolorum dolores incidunt quo quod ipsa debitis ad dolore. Corrupti quas harum qui eveniet. Perspiciatis ex laudantium eveniet voluptate soluta!",
	},
	{
		id: 3,
		title: "Blog 3",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, fugiat! Dolorum dolores incidunt quo quod ipsa debitis ad dolore. Corrupti quas harum qui eveniet. Perspiciatis ex laudantium eveniet voluptate soluta!",
	},
	{
		id: 4,
		title: "Blog 4",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, fugiat! Dolorum dolores incidunt quo quod ipsa debitis ad dolore. Corrupti quas harum qui eveniet. Perspiciatis ex laudantium eveniet voluptate soluta!",
	},
];

// getting blogs
app.get("/blogs", (req, res) => {
	res.status(200).send(blogs);
});

// create blog
app.get("/blogs", (req, res) => {
	const {title, content} = req.body
	const newBlog = {id: blogs.length, title, content}
	blogs.push(newBlog)
	if (!blog) {
		return res.send("Blog not available");
	}
})

// getting blogs by id
app.get("blogs/:id", (req, res) => {
	const blogId = parseInt(req.params.id);
	const blog = blogs.find((blog) => blog.id === blogId);
	if (!blog) {
		return res.status(404).send("Blog not available");
	}

	res.send(blog)
});


app.listen(port, (req, res) => {
	console.log(`Server running on ${port}`);
});
