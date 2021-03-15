# Mage's Workshop

_mage's workshop_ is a database for craft essences from aniplex and type-moon's mobile game, [_fate/grand order_](https://fate-go.us/)!

***

## table of contents

* [1. what it is](#1-what-it-is)
* [2. why it is](#2-why-it-is)
* [3. how it works](#3-how-it-works)
* [4. how it was made](#4-how-it-was-made)
* [5. fun facts](#5-fun-facts)

***

## 1. what it is

this was a learning project based on the [laboratoria coding bootcamp](https://www.laboratoria.la/)'s [second assignment for the sap005 class](https://github.com/Laboratoria/SAP005-data-lovers); as with the [previous project](https://github.com/saoricake/caesarspoilers), i am not in that class, but my sister is, and she assigned this one to me as a learning exercise.

***

## 2. why it is

as a regular fgo player, i often find myself needing to look up craft essences (which are items your characters can equip in the game) by which effects or stats they have. and there are wikis and such out there that include comprehensive lists of all the CEs in the game, but none of them really allow for the fine-grained sorting and filtering that i had in mind... so i figured, hey, i'll make a db with all the features i want myself!

***

## 3. how it works

well, it's a table; there's not much to explain. you can filter CEs by name, rarity, or stats by using the little section on the left side, and sort the order they're shown in by clicking the appropriate column header (except for skill... allowing for that would've taken more time than i had to work on this). note that each subsequent sort is made starting from the current order the table's in, so you can sort based on multiple parameters by clicking more than one header! (e.g. click the max hp header, followed by the rarity one, to have the CEs sorted by rarity, with ones of the same rarity being sorted by max hp)

***

## 4. how it was made

this project was created with the following:

resources:
* [css tricks](https://css-tricks.com/)
* [mdn web docs](https://developer.mozilla.org/en-US/)

tools:
* [git](https://git-scm.com/)
* [github](https://github.com/)
* [visual studio code](https://code.visualstudio.com/)

languages:
* [html](https://developer.mozilla.org/en-US/docs/Web/HTML)
	- elements:
	[`a`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a),
	[`body`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body),
	[`button`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button),
	[`div`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div),
	[`fieldset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset),
	[`form`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form),
	[`head`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head),
	[`html`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html),
	[`input`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input),
	[`label`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label),
	[`legend`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend),
	[`link`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link),
	[`meta`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta),
	[`option`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option),
	[`p`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p),
	[`script`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script),
	[`select`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select),
	[`style`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style),
	[`table`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table),
	[`tbody`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody),
	[`td`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td),
	[`th`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th),
	[`thead`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead),
	[`title`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title),
	[`tr`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr)
* [css](https://developer.mozilla.org/en-US/docs/Web/CSS)
	- once again i will not list every css property i used here
* [javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
	- built-in objects:
	[`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object),
	[`Function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function),
	[`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String),
	[`String.raw()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw),
	[`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp),
	[`RegExp()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp),
	[`RegExp.prototype.test()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test),
	[`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array),
	[`Array.from()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from),
	[`Array.prototype.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach),
	[`Array.prototype.join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join),
	[`Array.prototype.pop()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop),
	[`Array.prototype.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort),
	[`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set),
	[`Set()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set),
	[`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise),
	[`Promise.prototype.then()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then),
	[`Intl`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl),
	[`Intl.Collator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator),
	[`Intl.Collator()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator),
	[`Intl.Collator.prototype.compare()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare)
	- statements and declarations:
	[`Block`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block),
	[`if...else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else),
	[`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let),
	[`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const),
	[`function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function),
	[`async function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function),
	[`return`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return),
	[`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export),
	[`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
	- expressions and operators:
	[function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function),
	[async function exression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function),
	[object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer),
	[grouping operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping),
	[property accessors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors),
	[new operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new),
	[addition operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition),
	[subtraction operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction),
	[equality operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality),
	[strict equality operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality),
	[bitwise AND](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND),
	[logical AND](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND),
	[conditional operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator),
	[assignment operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment),
	[comma operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator),
	[await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
	- web apis:
	[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API),
	[`WindowOrWorkerGlobalScope.fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch),
	[`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document),
	[`Document.forms`](https://developer.mozilla.org/en-US/docs/Web/API/Document/forms),
	[`Document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector),
	[`Document.querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll),
	[`DOMTokenList`](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList),
	[`DOMTokenList.contains()`](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/contains),
	[`DOMTokenList.add()`](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add),
	[`DOMTokenList.remove()`](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove),
	[`DOMTokenList.toggle()`](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle),
	[`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element),
	[`Element.classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList),
	[`Element.insertAdjacentHTML()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML),
	[`Element`: `keydown` event](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event),
	[`Element`: `click` event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event),
	[`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event),
	[`Event.target`](https://developer.mozilla.org/en-US/docs/Web/API/Event/target),
	[`Event.preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault),
	[`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget),
	[`EventTarget.addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener),
	[`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData),
	[`FormData()`](https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData),
	[`FormData.get()`](https://developer.mozilla.org/en-US/docs/Web/API/FormData/get),
	[`FormData.getAll()`](https://developer.mozilla.org/en-US/docs/Web/API/FormData/getAll),
	[`HTMLCollection`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection),
	[`HTMLCollection.item()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection/item),
	[`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement),
	[`HTMLElement`: `input` event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event),
	[`HTMLFormControlsCollection`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormControlsCollection),
	[`HTMLFormControlsCollection.namedItem()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormControlsCollection/namedItem),
	[`HTMLFormElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement),
	[`HTMLFormElement.elements`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements),
	[`HTMLFormElement`: `submit` event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event),
	[`HTMLTableCellElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCellElement),
	`HTMLTableCellElement.cellIndex`,
	[`HTMLTableElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement),
	[`HTMLTableElement.tHead`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/tHead),
	[`HTMLTableElement.tBodies`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/tBodies),
	[`HTMLTableRowElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement),
	`HTMLTableRowElement.cells`,
	[`HTMLTableSectionElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableSectionElement),
	`HTMLTableSectionElement.rows`,
	[`KeyboardEvent`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent),
	[`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key),
	[`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node),
	[`Node.textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent),
	[`Node.appendChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)

additionally, the completion checklist from the original repository is copied here for future reference:
(and yeah i didn't fulfill a lot of the completion objectives... oops)

> ### Parte Obrigatória

> * [x] Usar VanillaJS.
> * [x] Não utilizar `this`.
> * [ ] Passa pelo linter (`npm run pretest`)
> * [ ] Passa pelos testes (`npm test`)
> * [ ] Testes unitários cobrem um mínimo de 70% de statements, functions, lines e branches.
> * [x] Inclui uma _definição de produto_ clara e informativa no `README.md`.
> * [ ] Inclui histórias de usuário no `README.md`.
> * [ ] Inclui rascunho da solução (protótipo de baixa fidelidade) no `README.md`.
> * [ ] Inclui uma lista de problemas detectados nos testes de usabilidade no `README.md`.
> * [x] UI: Mostra lista/tabela/etc com dados e/ou indicadores.
> * [x] UI: Permite ordenar dados por um ou mais campos (asc e desc).
> * [x] UI: Permite filtrar dados com base em uma condição.
> * [ ] UI: É _responsivo_.

***

## 5. fun facts

1. as it turns out, both pure html tables and css grids have their limitations when it comes to building a table to show tabular data... html tables are awful to style, while the (as of the time of this writing) lack of subgrid support in the vast majority of browsers forces you to use `display: contents` on the table's `thead`, `tbody`, and `tr` elements, and that introduces its own styling and accessibility problems. please implement subgrid already, browsers!!
2. for filtering and sorting the table, it's best to only get the data from the database once, and then hide, show, and reorder the table elements themselves as needed. getting all the data every time you need to change the table is really slow and probably network intensive for the database, too
3. as with the previous project, i feel like having several functions as modules in a separate js file just adds needless complexity and annoyances to the project... ah well
4. you might have noticed that only CEs from fgo's first year are included here. the reason for that is because... well, as it turns out, json files can get pretty damn huge if they have a lot of stuff in them, to the point that even my gamer pc struggled to load the entire thing in a timely manner