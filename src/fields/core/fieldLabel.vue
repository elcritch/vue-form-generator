<template lang="html">
  <span>{{ value }}</span>
</template>

<script>
	import abstractField from "../abstractField";

	export default {
		mixins: [ abstractField ]
	};
</script>

<style lang="scss">
	.vue-form-generator .field-label span {
		display: block;
		width: 100%;
		margin-left: 12px;
	}
</style>
