const form = document.forms[0];
const formControls = form.elements;
const formValuesStorage = window.sessionStorage;
const table = document.querySelector("table"),
	tableHeaders = table.tHead.rows[0].cells,
	tableBody = table.tBodies[0],
	tableRows = table.tBodies[0].rows;
const database = fetch("./data/nice_equip.json").then(r => r.json());

function updateSearchParams() {
	const defaultSearchParams = new URLSearchParams([
		["name", ""],
		["rarity", "1|2|3|4|5"],
		["min-hp", "\d{0,4}"],
		["max-hp", "\d{0,4}"],
		["min-atk", "\d{0,4}"],
		["max-atk", "\d{0,4}"],
		["sort-by", "collectionNo"],
		["sort-order", "asc"],
		["page", 1]
	]);
	const newSearchParams = new URLSearchParams(window.location.search);
	newSearchParams.set("rarity", (newSearchParams.getAll("rarity")).join("|"));
	const updatedSearchParams = new URLSearchParams();

	defaultSearchParams.forEach((value, key) => {
		updatedSearchParams.set(key, value);
	});
	newSearchParams.forEach((value, key) => {
		updatedSearchParams.set(key, value);
	});
	return updatedSearchParams;
}

function loadFormValues() {
	(document.querySelectorAll(`input[type="text"]`)).forEach(textInput => {
		if (formValuesStorage.getItem(textInput.name)) textInput.value = formValuesStorage.getItem(textInput.name);
	});

	(document.querySelectorAll(`input[type="checkbox"]`)).forEach(checkboxInput => {
		if (formValuesStorage.getItem(checkboxInput.id)) checkboxInput.checked = true;
	});

	(document.querySelectorAll("select")).forEach(selectInput => {
		if (formValuesStorage.getItem(selectInput.name)) selectInput.options[formValuesStorage.getItem(selectInput.name)].selected = true;
	});

	formValuesStorage.clear();
}

function saveFormValues() {
	(document.querySelectorAll(`input[type="text"]`)).forEach(textInput => {
		if (textInput.value === textInput.defaultValue) textInput.disabled = true;
		else formValuesStorage.setItem(textInput.name, textInput.value);
	});

	(document.querySelectorAll(`input[type="checkbox"]`)).forEach(checkboxInput => {
		if (checkboxInput.checked === false) checkboxInput.disabled = true;
		else formValuesStorage.setItem(checkboxInput.id, true);
	});

	(document.querySelectorAll("select")).forEach(selectInput => {
		if (selectInput.options[0].selected === true) selectInput.disabled = true;
		else formValuesStorage.setItem(selectInput.name, selectInput.selectedIndex);
	});

	// if (formControls["page"].value === 1) formControls["page"].disabled = true;
}

async function filterDatabase(database, searchParams) {
	const filteredDatabase = (await database).filter(craftEssence => {
		return RegExp(searchParams.get("name"), "i").test(craftEssence["name"]) &&
			RegExp(searchParams.get("rarity")).test(craftEssence["rarity"]) &&
			RegExp(String.raw`\b${searchParams.get("min-hp")}\b`).test(craftEssence["hpBase"]) &&
			RegExp(String.raw`\b${searchParams.get("max-hp")}\b`).test(craftEssence["hpMax"]) &&
			RegExp(String.raw`\b${searchParams.get("min-atk")}\b`).test(craftEssence["atkBase"]) &&
			RegExp(String.raw`\b${searchParams.get("max-atk")}\b`).test(craftEssence["atkMax"]);
	});

	return filteredDatabase.filter((craftEssence, index) => {
		return (index >= (searchParams.get("page")-1)*50) && (index < (searchParams.get("page")*50));
	});
}

async function sortDatabase(database, searchParams) {
	const sortBy = searchParams.get("sort-by"),
		sortOrder = searchParams.get("sort-order"),
		sortParams = new Intl.Collator("en", {
			sensitivity: "base",
			ignorePunctuation: "true",
			numeric: "true",
			caseFirst: "upper"
		});

	return (await database).sort((firstCraftEssence, secondCraftEssence) => {
		if (sortOrder == "desc") {
			return sortParams.compare(secondCraftEssence[sortBy], firstCraftEssence[sortBy]);
		} else if (sortOrder == "asc") {
			return sortParams.compare(firstCraftEssence[sortBy], secondCraftEssence[sortBy]);
		}
	});
}

loadFormValues();

(async function printTable() {
	const searchParams = updateSearchParams();
	const searchedDatabase = await filterDatabase(sortDatabase(database, searchParams), searchParams);

	searchedDatabase.forEach(craftEssence => {
		const craftEssenceParams = [
			craftEssence["collectionNo"],
			craftEssence["extraAssets"]["equipFace"]["equip"][craftEssence["id"]],
			craftEssence["name"],
			craftEssence["rarity"],
			craftEssence["hpBase"],
			craftEssence["hpMax"],
			craftEssence["atkBase"],
			craftEssence["atkMax"],
			craftEssence["skills"][0]["icon"],
			craftEssence["skills"][0]["detail"] + (craftEssence["skills"][1] ? `\n${craftEssence["skills"][1]["detail"]}` : "")
		];

		tableBody.insertAdjacentHTML("beforeend",
			`<tr>
				<td>${craftEssenceParams[0]}</td>
				<td>
					<img
						src=${craftEssenceParams[1]}
						height=30>
					<span>${craftEssenceParams[2]}</span>
				</td>
				<td>${craftEssenceParams[3]}</td>
				<td>${craftEssenceParams[4]}</td>
				<td>${craftEssenceParams[5]}</td>
				<td>${craftEssenceParams[6]}</td>
				<td>${craftEssenceParams[7]}</td>
				<td>
					<img
						src=${craftEssenceParams[8]}
						alt="${craftEssenceParams[9]}"
						title="${craftEssenceParams[9]}"
						height=30>
				</td>
			</tr>`
		);
	});
})();

form.onsubmit = saveFormValues;

/* (async function findUniqueStats() {
	const inputStatsArray = [
		[form.elements["minHpInput"], []],
		[form.elements["maxHpInput"], []],
		[form.elements["minAtkInput"], []],
		[form.elements["maxAtkInput"], []]
	];

	(await database).forEach(craftEssence => {
		if (!inputStatsArray[0][1].includes(craftEssence["hpBase"])) inputStatsArray[0][1].push(craftEssence["hpBase"]);
		if (!inputStatsArray[1][1].includes(craftEssence["hpMax"])) inputStatsArray[1][1].push(craftEssence["hpMax"]);
		if (!inputStatsArray[2][1].includes(craftEssence["atkBase"])) inputStatsArray[2][1].push(craftEssence["atkBase"]);
		if (!inputStatsArray[3][1].includes(craftEssence["atkMax"])) inputStatsArray[3][1].push(craftEssence["atkMax"]);
	});

	inputStatsArray.forEach(elements => {
		elements[1].sort((a, b) => a - b);
		console.log(elements[0]);
		console.log(elements[1]);
	});
})(); */