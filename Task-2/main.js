var input = document.getElementById('input'),
    result = document.getElementById('result'),
    inputType = document.getElementById('inputType'),
    resultType = document.getElementById('resultType'),
    inputTypeValue , resultTypeValue;
input.addEventListener('keyup' , myResult)
inputType.addEventListener('change' , myResult)
resultType.addEventListener('change' , myResult)
inputTypeValue = inputType.value
resultTypeValue = resultType.value
function myResult(){
    inputTypeValue = inputType.value
    resultTypeValue = resultType.value
if(inputTypeValue === 'meter' && resultTypeValue === 'kilometer'){
        result.value = Number(input.value) * 0.001
    } else if(inputTypeValue === 'meter' && resultTypeValue === 'centimeter'){
        result.value = Number(input.value) * 100
    } else if(inputTypeValue === 'meter' && resultTypeValue === 'meter'){
        result.value = input.value
    }
}