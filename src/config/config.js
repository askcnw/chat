export default class Config {
	static get BASE_NOW_DATE() {
		return new Date();
	}
	static get NOW_DATE() {
		return this.BASE_NOW_DATE.getFullYear() + "年" + this.BASE_NOW_DATE.getMonth() + "月" + this.BASE_NOW_DATE.getDate() + "日";
	}
}
