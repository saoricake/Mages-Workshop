export function filterData(table, form) {
	const tableRows = Array.from(table.tBodies[0].rows);
	const searchFormData = new FormData(form);

	const searchName = searchFormData.get("name");
	const searchRarity = (searchFormData.getAll("rarity")).join("|");
	const searchHpMin = searchFormData.get("hpBase");
	const searchHpMax = searchFormData.get("hpMax");
	const searchAtkMin = searchFormData.get("atkBase");
	const searchAtkMax = searchFormData.get("atkMax");
	
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
	});

	const tableRowsVisible = Array.from(document.querySelectorAll("tbody tr:not(.hidden)"));

	tableRowsVisible.forEach((v, i) => {
		if ((i & 1) === 1) {
			v.classList.add("zebra");
		} else {
			v.classList.remove("zebra");
		}
	});
}

export function sortData(table, targetTh) {
	const tableBody = table.tBodies[0];
	const tableHeaders = Array.from(table.tHead.rows[0].cells);
	const tableRows = Array.from(tableBody.rows);

	const targetThClasses = targetTh.classList;
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
	tableRows.forEach((v, i) => {
		tableBody.appendChild(v);
		if ((i & 1) === 1) {
			v.classList.add("zebra");
		} else {
			v.classList.remove("zebra");
		}
	});
}

export function computeStats(data) {
	console.log(data);
}
