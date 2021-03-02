import {filterData, sortData, computeStats} from './data.js';

const ceSearch = document.forms[0];
const ceTable = document.querySelector("tbody");
const ceDataComplete = fetch("./data/nice_equip.json").then(response => response.json());
async function updateTable(data) {
	let ceSearchParams = new FormData(ceSearch);
	let ceDataFiltered = filterData(await data, ceSearchParams);
	sortData(ceDataFiltered, "collectionNo", "asc");
	ceTable.innerHTML = "";
	ceDataFiltered.forEach(ce => {
		let ceNo = ce["collectionNo"];
		let ceThumb = ce["extraAssets"]["equipFace"]["equip"][ce["id"]];
		let ceName = ce["name"];
		let ceRarity = ce["rarity"];
		let ceHpMin = ce["hpBase"];
		let ceHpMax = ce["hpMax"];
		let ceAtkMin = ce["atkBase"];
		let ceAtkMax = ce["atkMax"];
		let ceSkillIcon = ce["skills"][0]["icon"];
		let ceSkillDesc = ce["skills"][0]["detail"] + (ce["skills"][1] ? `\n${ce["skills"][1]["detail"]}` : "");
		let tableRow =
		`<tr>
			<td>${ceNo}</td>
			<td><img src=${ceThumb} loading="lazy" height=30></td>
			<td>${ceName}</td>
			<td>${ceRarity}</td>
			<td>${ceHpMin}</td>
			<td>${ceHpMax}</td>
			<td>${ceAtkMin}</td>
			<td>${ceAtkMax}</td>
			<td><img src=${ceSkillIcon} alt="${ceSkillDesc}" title="${ceSkillDesc}" loading="lazy" height=30></td>
		</tr>`;
		ceTable.insertAdjacentHTML("beforeend", tableRow);
	})
}
for (let i = 0; i < ceSearch.elements.length; i++) {
	ceSearch.elements[i].addEventListener("input", () => updateTable(ceDataComplete));
}

updateTable(ceDataComplete);
