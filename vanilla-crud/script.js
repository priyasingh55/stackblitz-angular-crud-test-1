var selectedRow=null;
function onFormSubmit(){
    event.preventDefault;
    var formData=readFormData();
    if(selectedRow ===null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);

    }
    resetForm();

}
// retreive the data
function readFormData(){
var formData={};
formData["productData"]=document.getElementById("productData");
formData["product"]=document.getElementById("product");
formData["quantity"]=document.getElementById("product");
formData["price"]=document.getElementById("price");
return formData;
}
// insert the data
function insertNewRecord(data){
    var table=document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow= table.insertRow(table.length);
    var cell1=newRow.insertCell(0);
        cell1.innerHTML=data.productCode;
    var cell2=newRow.insertCell(1);
        cell2.innerHTML=data.product;
    var cell3=newRow.insertCell(2);
        cell3.innerHTML=data.quantity;
    var cell4=newRow.insertCell(3);
        cell4.innerHTML=data.price;
    var cell5=newRow.insertCell(4);
        cell5.innerHTML=`<button onClick="onEdit(this)">Edit</button><button onClick="onDelete(this)">Delete</button>`;
        
        


}
// edit the data

function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("productCode").value=selectedRow.cells[0].innerHTML;
    document.getElementById("product").value=selectedRow.cells[1].innerHTML;
    document.getElementById("quantity").value=selectedRow.cells[2].innerHTML;
    document.getElementById("price").value=selectedRow.cells[3].innerHTML;
}

function updateRecord(){
    selectedRow.cells[0].innerHTML=formData.productCode;
    selectedRow.cells[1].innerHTML=formData.product;
    selectedRow.cells[2].innerHTML=formData.quantity;
    selectedRow.cells[3].innerHTML=formData.price ;
}
// delete the data
function onDelete(td){
    if(confirm('Do you want to delete tha Record?')){
        row=td.parentElement.parentElement;
        document.getElementById("storeList").deleteRow(row.rowIndex);
    }
    resetForm();

}
// reset the data
function resetForm(){
    document.getElementById("productCode").value="";
    document.getElementById("product").value=""; 
    document.getElementById("quantity").value="";
    document.getElementById("price").value="";


}