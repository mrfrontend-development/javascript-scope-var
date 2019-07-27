import 'normalize-css/normalize.css'
import './style.scss'

// Global scope
var worldPre = document.querySelector('[data-code="world"]')
var worldScope = { scope: 'World' }

/** APPARTMENT COMPLEX */
// function appartmentComplex() {
// 	// Declare variables for scopes
// 	var appartmentsComplexPre = document.querySelector('[data-code="appartments-complex"]')
// 	var appartmentsComplexScope = { scope: 'Appartments complex' }

// 	/** APPARTMENT nr 15 */
// 	function appartment() {
// 		// Declare variables for scopes
// 		var appartmentPre = document.querySelector('[data-code="appartment"]')
// 		var appartmentScope = { scope: 'Appartment nr 15' }

// 		/** Living room */
// 		function livingRoom() {
// 			// Declare variables for scopes
// 			var livingRoomPre = document.querySelector('[data-code="living-room"]')
// 			var livingRoomScope = { scope: 'Living room' }

// 			// 	Set code into right scope
// 			setCodeInPreTag(livingRoomPre, livingRoomScope)
// 		}
// 		livingRoom()

// 		// 	Set code into right scope
// 		setCodeInPreTag(appartmentPre, appartmentScope)
// 	}
// 	appartment()

// 	// 	Set code into right scope
// 	setCodeInPreTag(appartmentsComplexPre, appartmentsComplexScope)
// }

// appartmentComplex()

// 	Set code into right scope
setCodeInPreTag(worldPre, worldScope)

// This function puts the content in the pre-tag
function setCodeInPreTag(element, code) {
	element.innerHTML = JSON.stringify(code)
}
