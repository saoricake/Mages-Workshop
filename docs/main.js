import {filterData, sortData, computeStats} from './data.js';

const ceSearch = document.forms[0];
const ceTableHeaders = Array.from(document.getElementsByTagName("th"));
const ceTableBody = document.querySelector("tbody");
const ceDataComplete = fetch("./data/nice_equip.json")
	.then(r => r.json());

async function printData(data) {
	(await data).forEach(ce => {
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
		`<tr class="visible">
			<td>${ceNo}</td>
			<td><img src=${ceThumb} loading="lazy" height=30>${ceName}</td>
			<td>${ceRarity}</td>
			<td>${ceHpMin}</td>
			<td>${ceHpMax}</td>
			<td>${ceAtkMin}</td>
			<td>${ceAtkMax}</td>
			<td><img src=${ceSkillIcon} alt="${ceSkillDesc}" title="${ceSkillDesc}" loading="lazy" height=30></td>
		</tr>`;
		ceTableBody.insertAdjacentHTML("beforeend", tableRow);
	})
	sortData(ceTableHeaders, ceTableBody, ceTableHeaders[0]);
}
async function listenerFilter() {
	filterData(ceTableBody, ceSearch);
}
async function listenerSort(event) {
	sortData(ceTableHeaders, ceTableBody, event.target);
}

for (let i = 0; i < ceSearch.elements.length; i++) {
	ceSearch.elements[i].addEventListener("input", listenerFilter);
}
for (let i = 0; i < ceTableHeaders.length - 1; i++) {
	ceTableHeaders[i].addEventListener("click", listenerSort);
}
printData(ceDataComplete);
