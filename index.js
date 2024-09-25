document.getElementById('donation-btn').addEventListener('click', function() {
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('donation-section').classList.remove('hidden');
    this.classList.add('btn-primary');
    document.getElementById('history-btn').classList.remove('btn-primary');
});

document.getElementById('history-btn').addEventListener('click', function() {
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('donation-section').classList.add('hidden');
    this.classList.add('btn-primary');
    document.getElementById('donation-btn').classList.remove('btn-primary');
});


function donate(donationId, inputId, balanceId, historyId , title) {
    const donationInput = document.getElementById(inputId);
    const donationAmountElem = document.getElementById(donationId);
    const balanceElem = document.getElementById(balanceId);

    const donationAmount = parseFloat(donationAmountElem.innerText);
    const donationValue = parseFloat(donationInput.value);
    const balance = parseFloat(balanceElem.innerText);
    const donationTitle = document.getElementById(title).innerText

  
    if (isNaN(donationValue) || donationValue <= 0) {
        alert("Invalid amount");
        return;
    }
    if (donationValue > balance) {
        alert("Insufficient balance");
        return;
    }


    balanceElem.innerText = (balance - donationValue).toFixed(2);
    donationAmountElem.innerText = (donationAmount + donationValue).toFixed(2);

    const historyList = document.getElementById(historyId);
    const date = new Date().toString();
    const historyItem = `<li class="border border-[#1111111A] rounded-[16px] p-8">

    <p class="mb-4 text-[20px] font-bold">${donationValue} Taka is donated ${donationTitle.slice(7,donationTitle.length)}</p>
    <span>${
        date
        }</span>
    </li>`;
    historyList.insertAdjacentHTML('beforeend', historyItem);


    donationInput.value = '';

    modal.classList.remove("hidden");
}

document.getElementById('donate-btn-1').addEventListener('click', function() {
    donate('donation-amount-1', 'donation-input-1', 'account-balance', 'history-list', 'donation-title-1');
});


document.getElementById('donate-btn-2').addEventListener('click', function() {
    donate('donation-amount-2', 'donation-input-2', 'account-balance', 'history-list', 'donation-title-2');
});

document.getElementById('donate-btn-3').addEventListener('click', function() {
    donate('donation-amount-3', 'donation-input-3', 'account-balance', 'history-list', 'donation-title-3');
});


function openTab(event, tabId) {
 
    let tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach(function (content) {
        content.classList.remove("active-tab");
    });

 
    let tabButtons = document.querySelectorAll(".tab-btn");
    tabButtons.forEach(function (btn) {
        btn.classList.remove("bg-base-100","text-white");
    });


    document.getElementById(tabId).classList.add("active-tab");
    event.currentTarget.classList.add("bg-base-100","text-white");
}







 
     const modal = document.getElementById("modal");
     const closeModalFooterButton = document.getElementById(
       "closeModalFooterButton"
     );

  

   
     const closeModal = () => {
       modal.classList.add("hidden");
     };
     closeModalFooterButton.addEventListener("click", closeModal);

     modal.addEventListener("click", (e) => {
       if (e.target === modal) {
         closeModal();
       }
     });