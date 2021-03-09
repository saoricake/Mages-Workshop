export function filterData(tableBody, searchForm) {
	const searchFormData = new FormData(searchForm)
	const searchName = searchFormData.get("name");
	const searchRarity = (searchFormData.getAll("rarity")).join("|");
	const searchHpMin = (searchFormData.get("hpBase") === "" ? String.raw`\d{0,4}` : searchFormData.get("hpBase"));
	const searchHpMax = (searchFormData.get("hpMax") === "" ? String.raw`\d{0,4}` : searchFormData.get("hpMax"));
	const searchAtkMin = (searchFormData.get("atkBase") === "" ? String.raw`\d{0,4}` : searchFormData.get("atkBase"));
	const searchAtkMax = (searchFormData.get("atkMax") === "" ? String.raw`\d{0,4}` : searchFormData.get("atkMax"));
	const tableRows = Array.from(tableBody.rows);
	
	tableRows.forEach(v => {
		if (
			RegExp(searchName, "i").test(v.cells[1].textContent) &&
			RegExp(searchRarity).test(v.cells[2].textContent) &&
			RegExp(String.raw`\b${searchHpMin}\b`).test(v.cells[3].textContent) &&
			RegExp(String.raw`\b${searchHpMax}\b`).test(v.cells[4].textContent) &&
			RegExp(String.raw`\b${searchAtkMin}\b`).test(v.cells[5].textContent) &&
			RegExp(String.raw`\b${searchAtkMax}\b`).test(v.cells[6].textContent)
		) {
			v.classList.remove("hidden");
		} else {
			v.classList.add("hidden");
		}
	})
}

export function sortData(tableHeaders, tableBody, targetTh) {
	const targetThClasses = targetTh.classList;
	const tableRows = Array.from(tableBody.rows);
	const collatorOptions = {
		sensitivity: "base",
		ignorePunctuation: "true",
		numeric: "true",
		caseFirst: "upper"
	}
	const sortParams = new Intl.Collator("en", collatorOptions);

	if (targetThClasses.contains("sortTarget") === false) {
		tableHeaders.forEach(th => th.classList.remove("sortTarget", "sortDesc"));
		targetThClasses.add("sortTarget");
	} else {
		targetThClasses.toggle("sortDesc");
	}
	tableRows.sort((firstRow, secondRow) => {
		const firstRowSortValue = firstRow.cells[targetTh.cellIndex].textContent;
		const secondRowSortValue = secondRow.cells[targetTh.cellIndex].textContent;
		if (targetThClasses.contains("sortDesc")) {
			return sortParams.compare(secondRowSortValue, firstRowSortValue);
		} else {
			return sortParams.compare(firstRowSortValue, secondRowSortValue);
		}
	});
	tableRows.forEach(row => tableBody.appendChild(row));
}

export function computeStats(data) {
	console.log(data);
}
