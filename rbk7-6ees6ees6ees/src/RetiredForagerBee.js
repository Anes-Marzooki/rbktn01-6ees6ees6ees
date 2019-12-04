

class RetiredForagerBee extends ForagerBee {
	constructor() {
		super(40, "gamble", false);
		this.color = "grey";
	}
	forage() {
		return "I am too old, let me play cards instead";
	}
	gamble(treasure) {
		this.treasureChest.push(treasure);
	}
};
