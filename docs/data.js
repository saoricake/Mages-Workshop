export function filterData(data, condition) {
	let searchName = condition.get("name");
	let searchRarity = (condition.getAll("rarity")).join("|");
	let searchHpMin = (condition.getAll("hpBase"));
	let searchHpMax = (condition.getAll("hpMax"));
	let searchAtkMin = (condition.getAll("atkBase"));
	let searchAtkMax = (condition.getAll("atkMax"));
	
	return data.filter(ce => {
		return RegExp(searchName, "i").test(ce["name"]) &&
		RegExp(searchRarity, "i").test(ce["rarity"]) &&
		RegExp(searchHpMin, "i").test(ce["hpBase"]) &&
		RegExp(searchHpMax, "i").test(ce["hpMax"]) &&
		RegExp(searchAtkMin, "i").test(ce["atkBase"]) &&
		RegExp(searchAtkMax, "i").test(ce["atkMax"]);
	});
}

export function sortData(data, sortBy, sortOrder) {
	data.sort((a, b) => a[sortBy] - b[sortBy]);
	if (sortOrder == "desc") data.reverse();
}

export function computeStats(data) {
	console.log(data);
}
