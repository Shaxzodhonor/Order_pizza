var nonForm = document.querySelector(".js-form"); //Form

var elNonFieldset = document.querySelector(".js-select-fieldset");  //Non turi WRAP
var elSizeFieldset = document.querySelector(".js-size-fieldset"); //non kattaligi WRAP
var elFieldsetOverAdditions = document.querySelector('.js-fieldset-over-additions');    // Ustiga nima solaylik WRAP
var elFieldsetAdditions = document.querySelector('.js-fieldset-additions'); //Qo'shimchalar WRAP

//     DISPLAY  RESULT (TANLANGANLARNI KO'RSATISH)

var elTypeOfBreadDisplay = document.querySelector('.js-type-bread');
var sizeOfBreadDisplay = document.querySelector('.js-size-bread');
var elOverAdditionsDisplay = document.querySelector('.js-over-addition');
var elAdditionsListDisplay = document.querySelector(".js-addition");

// =====================================================================================================
// =========== TYPE OF BREAD SECTION=======================
//Create select
var elNonSelect = document.createElement("select");
elNonSelect.classList.add("w-25", "form-select");
elNonSelect.required = true;
elNonSelect.name = 'TYPE_OF_BREAD';
elNonFieldset.appendChild(elNonSelect);
var firstOption = document.createElement("option");
    firstOption.value = "";
    firstOption.textContent = "Non turi";
    firstOption.disabled = true;
    firstOption.selected = true;
    elNonSelect.appendChild(firstOption);

// Create option of the select
var pizzaNonArray = ["yupqa", "o'rtacha", "qalin"];

    for (var xamrTuri of pizzaNonArray) {
        var elNonSelectOption = document.createElement("option");
        elNonSelectOption.value = xamrTuri;
        elNonSelectOption.textContent = xamrTuri;
        elNonSelect.appendChild(elNonSelectOption);
        
        elNonSelect.addEventListener("change", function(evt) {
            evt.preventDefault();
            
            elTypeOfBreadDisplay.textContent = this.value;
        })
    }
    
// =====================================================================================================
// =========SIZE OF BREAD SECTION======

var sizeRadioArray = [25, 30, 35]; // size array of bread  
var counterSizeInputId = 0; // (input id uchun sanoq nom)

 for (size of sizeRadioArray) {
// create size label of bread
    var sizeRadioLabel = document.createElement('label');
     sizeRadioLabel.setAttribute('for', 'size' + counterSizeInputId);
     sizeRadioLabel.classList.add('btn-lg', 'me-5', 'btn-outline-dark', 'rounded-circle', 'py-4', 'border', 'border-1')
     sizeRadioLabel.textContent = size + ' sm';
// create size radio of bread
     var sizeRadioInput = document.createElement('input');
     sizeRadioInput.type = 'radio';
     sizeRadioInput.classList.add('btn-check');
     sizeRadioInput.name = "SIZE_PIZZA";
     sizeRadioInput.id = 'size' + counterSizeInputId;
     sizeRadioInput.value = size;
    
     elSizeFieldset.appendChild(sizeRadioInput);
     elSizeFieldset.appendChild(sizeRadioLabel);
     
     sizeOfBreadDisplay.innerHTML = '';
    sizeRadioInput.addEventListener('input', function(ev) {
        ev.preventDefault();
        sizeOfBreadDisplay.textContent = this.value + ' sm';
    })
    
    counterSizeInputId++;
 }

//====================================================================================================
//OVER ADDIOTIONS SECTION
var overAdditionsArray = ['Pomidor','Tuzlangan bodring', 'Kurka go\'shti', 'Qo\'ziqorin', 'Zaytun', 'Qazi'];
var counterOverAdditionsInput = 0;
var checkedOverAdditionsArray = [];
for (var overAddition of overAdditionsArray) {

    //create wrap for checkbox input and checkbox label
    var wrapCheckboxInput = document.createElement('div');
    wrapCheckboxInput.classList.add('w-50', 'd-flex', 'align-items-center', 'my-1');

   //create checkbox input
    var checkboxOverAddition = document.createElement('input');
    checkboxOverAddition.type = "checkbox";
    checkboxOverAddition.id = 'checkbox' + counterOverAdditionsInput;
    checkboxOverAddition.name = 'OVER_ADDITIONS';
    checkboxOverAddition.value = overAddition;
    checkboxOverAddition.style.height = "22px";
    checkboxOverAddition.style.width = "22px";
    checkboxOverAddition.classList.add('me-2');

    //create checkbox label
    var labelOverAddition = document.createElement('label');
    labelOverAddition.setAttribute('for', 'checkbox' + counterOverAdditionsInput);
    labelOverAddition.textContent = overAddition;

    // append checkbox and label
    wrapCheckboxInput.appendChild(checkboxOverAddition);
    wrapCheckboxInput.appendChild(labelOverAddition);
    elFieldsetOverAdditions.append(wrapCheckboxInput);

    
    checkboxOverAddition.addEventListener('change', function(e) {
        e.preventDefault();

        var elOverAdditionsList = document.querySelector(".js-over-addition");
        elOverAdditionsList.textContent = '';
        var sas = this.value;

        if(this.checked){
            checkedOverAdditionsArray.push(sas);
        }else{
            checkedOverAdditionsArray.splice(checkedOverAdditionsArray.indexOf(sas), 1);
        }

        for (var item of checkedOverAdditionsArray) {
            var elOverAdditionItem = document.createElement('li');
            elOverAdditionItem.classList.add('fs-6', 'fw-normal');
            elOverAdditionItem.textContent = " - " + item;
            elOverAdditionsList.appendChild(elOverAdditionItem);
        }
    })
    counterOverAdditionsInput++;
}


// ===========================================================================
//ADDITIONS SECTION
var AdditionsArray = ['Achchiq','Sosiskali'];
var counterAdditions = 0;
var checkedAdditionsArray = [];
for (var addition of AdditionsArray) {

    var wrapCheckboxInput = document.createElement('div');
    wrapCheckboxInput.classList.add('w-50', 'd-flex', 'align-items-center', 'my-1');
   
    var checkboxAddition = document.createElement('input');
    checkboxAddition.type = "checkbox";
    checkboxAddition.id = 'addition' + counterAdditions;
    checkboxAddition.name = 'ADDITIONS';
    checkboxAddition.value = addition;
    checkboxAddition.style.height = "22px";
    checkboxAddition.style.width = "22px";
    checkboxAddition.classList.add('me-2');

    var labelAddition = document.createElement('label');
    labelAddition.setAttribute('for', 'addition' + counterAdditions);
    labelAddition.textContent = addition;

    elFieldsetAdditions.append(wrapCheckboxInput);
    wrapCheckboxInput.appendChild(checkboxAddition);
    wrapCheckboxInput.appendChild(labelAddition);

    checkboxAddition.addEventListener('change', function(evm) {
        evm.preventDefault();

        elAdditionsListDisplay.textContent = '';
        var checkedValue = this.value;

        if(this.checked){
            checkedAdditionsArray.push(checkedValue);
        }else{
            checkedAdditionsArray.splice(checkedAdditionsArray.indexOf(checkedValue), 1);
        }

        for (var item of checkedAdditionsArray) {
            var elAdditionItem = document.createElement('li');
            elAdditionItem.classList.add('fs-6', 'fw-normal');
            elAdditionItem.textContent = " - " + item;
            elAdditionsListDisplay.appendChild(elAdditionItem);
        }

    })  
    counterAdditions++;
}
