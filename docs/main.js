const form = document.forms[0];
const table = document.querySelector("table"),
	tableHeaders = table.tHead.rows[0].cells,
	tableBody = table.tBodies[0],
	tableRows = table.tBodies[0].rows;
const database = fetch("./data/nice_equip.json").then(r => r.json());

function filterData() {
	const formData = new FormData(form);
	const inputName = formData.get("name");
	const inputRarity = (formData.getAll("rarity")).join("|");
	const inputHpBase = formData.get("hpBase");
	const inputHpMax = formData.get("hpMax");
	const inputAtkBase = formData.get("atkBase");
	const inputAtkMax = formData.get("atkMax");

	const rowsArray = Array.from(tableRows);
	
	rowsArray.forEach(row => {
		if (
			RegExp(inputName, "i").test(row.cells[1].textContent) &&
			RegExp(inputRarity).test(row.cells[2].textContent) &&
			RegExp(String.raw`\b${inputHpBase}\b`).test(row.cells[3].textContent) &&
			RegExp(String.raw`\b${inputHpMax}\b`).test(row.cells[4].textContent) &&
			RegExp(String.raw`\b${inputAtkBase}\b`).test(row.cells[5].textContent) &&
			RegExp(String.raw`\b${inputAtkMax}\b`).test(row.cells[6].textContent)
		) {
			row.classList.remove("hidden");
		} else {
			row.classList.add("hidden");
		}
	});

	const visibleRows = rowsArray.filter(row => row.classList.contains("hidden"));

	visibleRows.forEach((row, rowIndex) => {
		if ((rowIndex & 1) === 1) {
			row.classList.add("zebra");
		} else {
			row.classList.remove("zebra");
		}
	});
}

function sortData(sortBasisHeader) {
	const headersArray = Array.from(tableHeaders),
		rowsArray = Array.from(tableRows);
	const sortBasisClassList = sortBasisHeader.classList;
	const sortParams = new Intl.Collator("en", {
		sensitivity: "base",
		ignorePunctuation: "true",
		numeric: "true",
		caseFirst: "upper"
	});

	if (sortBasisClassList.contains("sortBasis") === false) {
		headersArray.forEach(allHeaders => allHeaders.classList.remove("sortBasis", "sortDesc"));
		sortBasisClassList.add("sortBasis");
	} else {
		sortBasisClassList.toggle("sortDesc");
	}
	rowsArray.sort((firstRow, secondRow) => {
		const firstRowSortValue = firstRow.cells[sortBasisHeader.cellIndex].textContent;
		const secondRowSortValue = secondRow.cells[sortBasisHeader.cellIndex].textContent;
		
		if (sortBasisClassList.contains("sortDesc")) {
			return sortParams.compare(secondRowSortValue, firstRowSortValue);
		} else {
			return sortParams.compare(firstRowSortValue, secondRowSortValue);
		}
	});
	rowsArray.forEach((row, rowIndex) => {
		tableBody.appendChild(row);
		if ((rowIndex & 1) === 1) {
			row.classList.add("zebra");
		} else {
			row.classList.remove("zebra");
		}
	});
}

(async function initializeData() {
	const inputStatsArray = [
		[form.elements["hpBase"], []],
		[form.elements["hpMax"], []],
		[form.elements["atkBase"], []],
		[form.elements["atkMax"], []]
	];

	(await database).forEach(ce => {
		const params = [
			ce["collectionNo"],
			ce["extraAssets"]["equipFace"]["equip"][ce["id"]],
			ce["name"],
			ce["rarity"],
			ce["hpBase"],
			ce["hpMax"],
			ce["atkBase"],
			ce["atkMax"],
			ce["skills"][0]["icon"],
			ce["skills"][0]["detail"] + (ce["skills"][1] ? `\n${ce["skills"][1]["detail"]}` : "")
		];

		if (inputStatsArray[0][1].includes(params[4]) === false) inputStatsArray[0][1].push(params[4]);
		if (inputStatsArray[1][1].includes(params[5]) === false) inputStatsArray[1][1].push(params[5]);
		if (inputStatsArray[2][1].includes(params[6]) === false) inputStatsArray[2][1].push(params[6]);
		if (inputStatsArray[3][1].includes(params[7]) === false) inputStatsArray[3][1].push(params[7]);

		const newTableRow =
		`<tr>
			<td>${params[0]}</td>
			<td><img src=${params[1]} loading="lazy" height=30><span>${params[2]}</span></td>
			<td>${params[3]}</td>
			<td>${params[4]}</td>
			<td>${params[5]}</td>
			<td>${params[6]}</td>
			<td>${params[7]}</td>
			<td><img src=${params[8]} alt="${params[9]}" title="${params[9]}" loading="lazy" height=30></td>
		</tr>`;

		tableBody.insertAdjacentHTML("beforeend", newTableRow);
	});
	sortData(tableHeaders[0]);

	inputStatsArray.forEach(eles => {
		eles[1].sort((a, b) => a - b);
		eles[1].forEach(options => {
			eles[0].insertAdjacentHTML("beforeend", `<option value="${options}">${options}</option>`)
		});
	});
})();

(function initializeEventListeners() {
	const formControls = Array.from(form.elements);
	const headersArray = Array.from(tableHeaders);
	headersArray.pop();

	function listenerFilter() {filterData();}
	function listenerSort(event) {sortData(event.target);}

	form.addEventListener("submit", event => event.preventDefault());
	formControls.forEach(formControl => formControl.addEventListener("input", listenerFilter));
	headersArray.forEach(header => header.addEventListener("click", listenerSort));
	headersArray.forEach(header => header.addEventListener("keydown", event => {
		if (event.key === "Enter") listenerSort(event);
	}));
})();