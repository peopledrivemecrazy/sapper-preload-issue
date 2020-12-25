<script context="module">
	export function preload({ query }) {
		return this.fetch(`blog.json?page=${query.page}`)
			.then((r) => r.json())
			.then((pageData) => {
				return { pageData, currentpage: query.page };
			});
	}
</script>

<script>
	export let pageData;
	export let currentpage;
	let hasNext = pageData.hasNext;
	// console.log(pageData.contents)
</script>

<style>

</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Current Page {currentpage}  hasNext {hasNext}</h1>

<a href="./blog?page={parseInt(currentpage) ? 1 : currentpage - 1}">previous</a>
{#if hasNext}<a href="./blog?page={parseInt(currentpage) + 1}">next</a>{/if}
