import posts from './_posts.js';
let pages = 3
let hasNext = true

const contents = JSON.stringify(posts.map(post => {
	return {
		title: post.title,
		slug: post.slug
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	let pageNum = req.query.page
	console.log(pageNum)

	if (pageNum == pages || pageNum > pages) {
		hasNext = false
	}
	else hasNext = true
	console.log({ hasNext })
	res.end(JSON.stringify({ contents, hasNext }));
}