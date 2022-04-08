const elproducsWrapper = document.querySelector(".produck-wrap")

const paddelka = function (elName, classNamed) {
    const createdElemant = document.createElement(elName);
    createdElemant.className = classNamed;

    return createdElemant;
}
const addZero = function (number) {
    return number < 10 ? "0" + number : number
}

const showDate = function (string) {
    const date = new Date(string);

    return `${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}.${date.getFullYear()}`;
}

const renderProduct = function (producty) {
    const {
        id,
        title,
        img,
        price,
        model,
        addedDate,
        benefits
    } = producty;

    const elproduck = paddelka("li", "col-4");
    const elproductCar = paddelka("div", "card");

    const elImg = paddelka("img", "card-img-top");
    elImg.src = img;

    const elCardBody = paddelka("div", "card-body");
    const elTitle = paddelka("h3", "card-title");
    elTitle.textContent = title;

    const elProducktPrize = paddelka("p", "card-text fw-bold");
    const elProductMarc = paddelka("mark", "");
    elProductMarc.textContent = price;

    const elOldPrize = paddelka("p", "card-text");
    const elLine = paddelka("s", "");
    elLine.textContent =price;

    const elModal = paddelka("p", "badge bg-success");
    elModal.textContent = model;

    const elData = paddelka("p", "card-text");

    const elList = paddelka("ul", "d-flex flex-wrap list-unstyled");

    elData.textContent = (showDate(addedDate), addedDate);
    for (let e = 0; e < benefits.length; e++) {
        const elItem = paddelka("li", "badge bg-primary me-1 mb-1");
        elItem.textContent = benefits[e];
        elList.append(elItem);
    }

    const elMin = paddelka("div", "position-absolute top-0 end-0 d-flex");
    const elBotton = paddelka("button", "btn rounded-0 btn-secondary");
    const elI = paddelka("i", "fa-solid fa-pen");
    elBotton.setAttribute("data-bs-toggle" , "modal");
    elBotton.setAttribute("data-bs-target" , "#edit-product-modal");   
    elBotton.setAttribute("data-id",id) 
    elI.style.pointerEvents = "none"

    const elButton = paddelka("button", "btn rounded-0 btn-danger");
    const eli = paddelka("i", "fa-solid fa-trash");
    eli.style.pointerEvents = "none";

    elButton.setAttribute("data-id",id)

    elproductCar.append(elMin);
    elMin.append(elBotton);
    elBotton.append(elI);
    elMin.append(elButton);
    elButton.append(eli);
    elProducktPrize.append(elProductMarc);
    elproduck.append(elproductCar);
    elproductCar.append(elImg);
    elproductCar.append(elCardBody);
    elCardBody.append(elTitle);
    elCardBody.append(elProducktPrize);
    elCardBody.append(elOldPrize);
    elCardBody.append(elModal);
    elCardBody.append(elData);
    elproducsWrapper.append(elproduck);
    elOldPrize.append(elLine);
    elCardBody.append(elList);

    return elproduck;

}

const addForm = document.querySelector(".add-form");
const produktModal = new bootstrap.Modal(document.querySelector("#add-product-modal"));

addForm.addEventListener("submit", function (evt) {
    evt.preventDefault()




    const nameInput = evt.target.elements.productTitle;
    const priceInput = evt.target.elements.price;
    const select = evt.target.elements.productManufacturer;
    const addfeature = evt.target.elements.benefits

    const nameValue = nameInput.value;
    const priceValue = priceInput.value;
    const selectValue = select.value
    const featureValue = addfeature.value.split(",");

    if (nameValue.trim() && priceValue.trim()) {
        console.log(featureValue);
        console.log(addfeature.value);
        const product = {
            id: Math.floor(Math.random() * 1000),
            title:nameValue,
            img: "https://picsum.photos/300/200",
            price: priceValue,
            model:selectValue,
            addedDate: new Date().toISOString(),
            benefits: featureValue
        }
        products.push(product);

        addForm.reset();
        produktModal.hide();    
        const elproduct = renderProduct(product);
        elproducsWrapper.append(elproduct);
    }

});
const elUl = document.querySelector("#list");
const editPrise= document.querySelector("#edit-price")
const editTitle = document.querySelector("#edit-productTitle")
const editBenefits = document.querySelector("#edit-benefits")

elUl.addEventListener("click", function(evt){
     if (evt.target.matches(".btn-danger")){
        const clikkedItemId = +evt.target.dataset.id;
        const clikkedItemIndex = products.findIndex(function(product){
            return product.id === clikkedItemId;
        })
        products.splice(clikkedItemIndex,1);

        elUl.innerHTML="";
        products.forEach(function(product){
            const elproduct = renderProduct(product);
            elproducsWrapper.append(elproduct);
        });
     }else if (evt.target.matches(".btn-secondary")){
          const clikkedId = +evt.target.dataset.id;
          
          const clikkedItem = products.find(function(product){
          return product.id === clikkedId;
          })
          editTitle.value = clikkedItem.title;
          editPrise.value = clikkedItem.price;
          editBenefits.value = clikkedItem.benefits;
          editForm.setAttribute("data-editing-id", clikkedItem.id);
     }
});
products.forEach(function(product){
    const elproduct = renderProduct(product);
    elproducsWrapper.append(elproduct);
});

const editForm = document.querySelector("#edit-form")

const produktModalEl = new bootstrap.Modal(document.querySelector("#edit-product-modal"));


editForm.addEventListener("submit", function (evt) {
    evt.preventDefault()

    const editingId = +evt.target.dataset.editingId

    const nameValue =  editTitle.value;
    const priceValue = editPrise.value;
    const featureValue = editBenefits.value.split(",");

    if (nameValue.trim() && priceValue.trim()) {
        console.log(featureValue);  

        const productr = {
            id: editingId,
            title:nameValue,
            img: "https://picsum.photos/300/200",
            price: priceValue,
            addedDate: new Date().toISOString(),
            benefits: featureValue
        }

        
        const edittedItem = products.findIndex(function(product){
            return product.id === editingId;
            })

            products.splice(edittedItem, 1, productr);

        editForm.reset();    
        produktModalEl.hide();

        elUl.innerHTML="";
        products.forEach(function(product){
            const elproduct = renderProduct(product);
            elproducsWrapper.append(elproduct);
        });

    }

});

