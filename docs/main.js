import {filterData, sortData, computeStats} from './data.js';

const form = document.forms[0];
const table = document.querySelector("table");
const database = fetch("./data/nice_equip.json").then(r => r.json());

(async function() {
	const tableHeaders = table.tHead.rows[0].cells;
	const tableBody = table.tBodies[0];
	const selectAndOptionEles = [
		[form.elements["hpBase"], []],
		[form.elements["hpMax"], []],
		[form.elements["atkBase"], []],
		[form.elements["atkMax"], []]
	];

	(await database).forEach(v => {
		const params = [
			v["collectionNo"],
			v["extraAssets"]["equipFace"]["equip"][v["id"]],
			v["name"],
			v["rarity"],
			v["hpBase"],
			v["hpMax"],
			v["atkBase"],
			v["atkMax"],
			v["skills"][0]["icon"],
			v["skills"][0]["detail"] + (v["skills"][1] ? `\n${v["skills"][1]["detail"]}` : "")
		];
		const newTableRow =
		`<tr>
			<td>${params[0]}</td>
			<td><img src=${params[1]} loading="lazy" height=30>${params[2]}</td>
			<td>${params[3]}</td>
			<td>${params[4]}</td>
			<td>${params[5]}</td>
			<td>${params[6]}</td>
			<td>${params[7]}</td>
			<td><img src=${params[8]} alt="${params[9]}" title="${params[9]}" loading="lazy" height=30></td>
		</tr>`;

		tableBody.insertAdjacentHTML("beforeend", newTableRow);
	});
	sortData(table, tableHeaders[0]);

	const tableRows = Array.from(table.tBodies[0].rows);

	tableRows.forEach(v => {
		selectAndOptionEles[0][1].push(v.cells[3].textContent);
		selectAndOptionEles[1][1].push(v.cells[4].textContent);
		selectAndOptionEles[2][1].push(v.cells[5].textContent);
		selectAndOptionEles[3][1].push(v.cells[6].textContent);
	});

	selectAndOptionEles.forEach(eles => {
		eles[1].sort((a, b) => a - b);
		(new Set(eles[1])).forEach((v1) => {
			eles[0].insertAdjacentHTML("beforeend", `<option value="${v1}">${v1}</option>`)
		});
	});
})();

(function() {
	const formControls = Array.from(form.elements);
	const tableHeaders = Array.from(table.tHead.rows[0].cells);
	tableHeaders.pop();

	function listenerFilter() {filterData(table, form);}
	function listenerSort(event) {sortData(table, event.target);}

	form.addEventListener("submit", event => event.preventDefault());
	formControls.forEach(formControl => formControl.addEventListener("input", listenerFilter));
	tableHeaders.forEach(tableHeader => tableHeader.addEventListener("click", listenerSort));
	tableHeaders.forEach(tableHeader => tableHeader.addEventListener("keydown", event => {
		if (event.key === "Enter") listenerSort(event);
	}));
})();