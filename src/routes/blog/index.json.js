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

	hasNext = pageNum == pages ? !hasNext : hasNext

	console.log({ hasNext })
	res.end(JSON.stringify({ contents, hasNext }));
}