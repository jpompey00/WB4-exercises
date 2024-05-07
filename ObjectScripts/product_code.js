"use strict";


//main section
let partCode0 = "XYZ:1234-L"

let part0 = parsePartCode(partCode0);

console.log("Supplier: " + part0.supplierCode +
    " Product Number: " + part0.productNumber +
    " Size: " + part0.size);





function parsePartCode(productCode) {
    return {
        supplierCode: getSupplier(productCode),
        productNumber: getProductNumber(productCode),
        size: getSize(productCode)
    };


}

//returns all characters before the :
function getSupplier(code) {
    return code.substring(0, code.indexOf(":"));
}


//returns all characters between : and -
function getProductNumber(code) {
    return code.substring(code.indexOf(":") + 1, code.indexOf("-"));
}



//returns all characters after the -
function getSize(code) {
    return code.substring(code.indexOf("-") + 1)
}


//outputs the parts info in a concise way based on the earlier functions
function outputPartInfo(code) {
    let supplier = getSupplier(code);
    let productNumber = getProductNumber(code);
    let size = getSize(code);
    let sizeExpanded;

    //If-Else block that checks if the size is in SML format or is a number.
    if (isNaN(Number(size))) {
        if (size.toUpperCase() == "L") {
            sizeExpanded = "large (L)";
        }
        if (size.toUpperCase() == "M") {
            sizeExpanded = "medium (M)";
        }
        if (size.toUpperCase() == "S") {
            sizeExpanded = "small (S)";
        }
    } else {
        sizeExpanded = `size ${size}`;
    }

    return `The ${sizeExpanded} part ${productNumber} is supplied by ${supplier}`;
}
