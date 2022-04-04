const elproducsWrapper = document.querySelector(".produck-wrap")

const paddelka = function(elName , classNamed){
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

for ( let i = 0 ; i < products.length ; i++){

const elproduck = paddelka("li","col-4");
const elproductCar = paddelka("div","card");

const elImg = paddelka("img" , "card-img-top");
elImg.src = products[i].img;

const elCardBody = paddelka("div","card-body");
const elTitle = paddelka("h3","card-title");
elTitle.textContent = products[i].title;

const elProducktPrize = paddelka("p","card-text fw-bold");
const elProductMarc = paddelka("mark", "");
elProductMarc.textContent = products[i].price;

const elOldPrize = paddelka("p" , "card-text");
const elLine = paddelka("s" , "");
elLine.textContent = products[i].price;

const elModal = paddelka("p","badge bg-success");
elModal.textContent = products[i].model;

const elData = paddelka("p","card-text");

const elList = paddelka("ul","d-flex flex-wrap list-unstyled");

elData.textContent =(showDate(products[i].addedDate));
for (let e = 0 ; e < products[i].benefits.length; e++){
    const elItem = paddelka("li" , "badge bg-primary me-1 mb-1");
    elItem.textContent = products[i].benefits[e];
    elList.append(elItem);
}

  
const elMin = paddelka("div" , "position-absolute top-0 end-0 d-flex");
const elBotton = paddelka("button" , "btn rounded-0 btn-secondary");
const elI = paddelka("i" , "fa-solid fa-pen");

const elButton = paddelka("button" , "btn rounded-0 btn-danger");
const eli = paddelka("i" , "fa-solid fa-trash");


const addForm = document.querySelector(".add-form");
const produktModal = new bootstrap.Modal(document.querySelector("#edit-student-modal"));

addForm.addEventListener("submit", function(evt) {
    evt.preventDefault()

    const nameInput = evt.target.elements.productTitle;
    const priceInput = evt.target.elements.price;
    const select =  evt.target.elements.productManufacturer;
    const addfeature = evt.target.elements.benefits

    const nameValue = nameInput.value;
    const priceValue = priceInput.value;
    const featureValue = addfeature.value

    if (nameValue .trim() && priceValue.trim() && featureValue.trim()){
        const product = {
            id:Math.floor(Math.random() * 1000),
            img: "https://picsum.photos/300/200",
            price: priceValue,
            madel:nameValue,
            addedDate: new Date().toISOString(),
            benefits:featureValue
        }
        products.unshift(product);

        addForm.reset();
        produktModal.hide();

        const elproduck = paddelka("li","col-4");
const elproductCar = paddelka("div","card");

const elImg = paddelka("img" , "card-img-top");
elImg.src = products[i].img;

const elCardBody = paddelka("div","card-body");
const elTitle = paddelka("h3","card-title");
elTitle.textContent = nameValue;

const elProducktPrize = paddelka("p","card-text fw-bold");
const elProductMarc = paddelka("mark", "");
elProductMarc.textContent = priceValue;

const elOldPrize = paddelka("p" , "card-text");
const elLine = paddelka("s" , "");
elLine.textContent = products[i].price;

const elModal = paddelka("p","badge bg-success");
elModal.textContent = select;

const elData = paddelka("p","card-text");

const elList = paddelka("ul","d-flex flex-wrap list-unstyled");

elData.textContent =(showDate(products[i].addedDate));
for (let e = 0 ; e < products[i].benefits.length; e++){
    const elItem = paddelka("li" , "badge bg-primary me-1 mb-1");
    elItem.textContent = products[i].benefits[e];
    elList.append(elItem);
}

  
const elMin = paddelka("div" , "position-absolute top-0 end-0 d-flex");
const elBotton = paddelka("button" , "btn rounded-0 btn-secondary");
const elI = paddelka("i" , "fa-solid fa-pen");

const elButton = paddelka("button" , "btn rounded-0 btn-danger");
const eli = paddelka("i" , "fa-solid fa-trash");

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
    }

})





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

}

