document.addEventListener("input", (e) => {
    if (e.target.classList.contains("cake-num")) {
        e.target.value = Math.max(1, Math.min(10, e.target.value));
    }
});

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("drop-product-btn")) {
        e.target.closest("section").remove();
    }
});

document.querySelector("legend").addEventListener("click", newProduct);

function newProduct() {
    const fieldset = document.querySelector("fieldset");
    fieldset.insertAdjacentHTML("beforeend", `
        <section class="new-product">
            <div>
                <p>Produkt: </p>
                <select class="cake-select">
                    <option value="Ciasto pistacjowe" price="80">Ciasto pistacjowe 80zł</option>
                    <option value="Ciasto czekoladowe" price="60">Ciasto czekoladowe 60zł</option>
                    <option value="Sernik" price="60">Sernik 60zł</option>
                    <option value="Tiramisu" price="75">Tiramisu 75zł</option>
                    <option value="Ciasto owocowe" price="55">Ciasto owocowe 55zł</option>
                    <option value="Makowiec tradycyjny" price="60">Makowiec tradycyjny 60zł</option>
                    <option value="Szarlotka sypana" price="50">Szarlotka sypana 50zł</option>
                    <option value="Marchewkowe z lukrem" price="60">Marchewkowe z lukrem 60zł</option>
                    <option value="Drożdżowe z kruszonką" price="45">Drożdżowe z kruszonką 45zł</option>
                    <option value="Ciasto bananowe" price="50">Ciasto bananowe 50zł</option>
                    <option value="Piernik klasyczny" price="65">Piernik klasyczny 65zł</option>
                    <option value="Miodownik" price="75">Miodownik 75zł</option>
                    <option value="Ciasto ucierane" price="50">Ciasto ucierane 50zł</option>
                    <option value="Kruche z konfiturą" price="60">Kruche z konfiturą 60zł</option>
                </select>
            </div>
            <div>
                <p>Ilość:</p>
                <input type="number" max="10" class="cake-num" value="1">
            </div>
            <button class="drop-product-btn">&#10006;</button>
        </section>
    `);

    return fieldset.querySelector("section.new-product:last-of-type .cake-select");
}


let mail = null;
document.getElementById("summary-btn").addEventListener("click", () => {
    if (validateData() == -1) {
        alert('Niepoprawne Dane klienta!');
        return;
    }
    mail = document.getElementById('mail-label').value;
    document.getElementById('order-form').style.display = 'none';
    document.getElementById('summary-sect').style.display = 'block';

    let summary = {};
    let finalCost = 0;

    document.querySelectorAll(".new-product").forEach(section => {
        let select = section.querySelector("select");
        let cake = select.value;
        let price = +select.options[select.selectedIndex].getAttribute("price");
        let amount = +section.querySelector(".cake-num").value;
        let totalPrice = price * amount;
        finalCost += totalPrice;

        summary[cake] = (summary[cake] || 0) + amount;
    });

    let summaryContent = `
        <div class="summary-table">
            <div class="table-header">
                <div>Ciasto</div>
                <div>Ilość</div>
                <div>Suma</div>
            </div>`;

    Object.entries(summary).forEach(([cake, amount]) => {
        let selectOption = [...document.querySelectorAll(".cake-select option")].find(opt => opt.value === cake);
        let price = selectOption ? +selectOption.getAttribute("price") : 0;
        let totalPrice = price * amount;

        summaryContent += `
            <div class="table-row">
                <div>${cake}</div>
                <div>${amount} szt.</div>
                <div>${totalPrice}zł</div>
            </div>`;
    });

    summaryContent += `
        <div class="table-footer">
            <div></div>
            <div>Łączny koszt:</div>
            <div>${finalCost}zł</div>
        </div>
    </div>`;

    document.getElementById('summary-guard').innerHTML = summaryContent;
});
document.getElementById('pay-btn').addEventListener('click', () => {
    let paragraph = document.getElementById('succes-pay');
    paragraph.innerHTML = `Zamówienie zostało opłacone, szczegóły wysłano na E-maila: ${mail}`;
});


document.querySelectorAll("#siatka > section").forEach(section => {
    section.addEventListener("click", () => {
        const titleDiv = section.querySelector(".option-title");
        const titleText = titleDiv.innerHTML.trim();

        const select = newProduct();

        const matching = Array.from(select.options).find(option => option.value.includes(titleText));
        matching.selected = true;

        document.getElementById("order").scrollIntoView();
    });
});


function validateData() {
    const nameInput = document.getElementById('name-label').value;
    const surnameInput = document.getElementById('surname-label').value;
    const telInput = document.getElementById('phone-label').value;
    const dateInput = document.getElementById('date-label').value;

    let weranintoanissue = 0;
    let array = [nameInput, surnameInput, telInput, dateInput, mail];

    array.forEach((el) => {
        if (String(el).trim() === '') {
            weranintoanissue = -1;
        }
    });

    const date = new Date();
    const userDate = new Date(dateInput);

    if (userDate <= date) {
        weranintoanissue = -1
    }
    return weranintoanissue;
}



