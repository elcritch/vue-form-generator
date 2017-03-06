
module.exports = {
	vueBluCss: require('vue-blu/dist/css/vue-blu.min.css'),
	creatorComponent: require("./formCreator.vue"),
	component: require("./formGenerator.vue"),
	schema: require("./utils/schema.js"),
	validators: require("./utils/validators.js"),
	abstractField: require("./fields/abstractField").default,

	install(Vue) {

		var VueBlue = require('vue-blu');
		Vue.use(VueBlue);

		Vue.component("VueFormGenerator", module.exports.component);
		Vue.component("VueFormCreator", module.exports.creatorComponent);
	}
};
