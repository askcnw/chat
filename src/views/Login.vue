<template>
	<div>
		<p>login</p>
		<p>{{ date }}</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				date: window.Config.NOW_DATE,
			};
		},
		watch: {
			date: function () {
				console.log(this.date);
			},
		},
	};
</script>
