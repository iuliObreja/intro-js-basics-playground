
function handleCostKeydown(event) {
  if (event.key === "Enter") {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector(".js-cost-input");
  let cost = Number(inputElement.value);

  //First, reset all previous messages.
  document.querySelector('.js-total-cost').innerHTML = '';
  document.querySelector('.js-error-message').innerHTML = '';

  if (cost < 0) {
    document.querySelector('.js-error-message')
      .innerHTML = 'Error: cost cannot be less than $0';
    
    return;
  }
  
  if (cost < 40) {
    cost += 10;
  }

  document.querySelector(".js-total-cost").innerHTML = `$${cost}`;
}

function subscribe() {
  const buttonElement = document.querySelector(".js-subscribe-btn");

  if (buttonElement.innerText === "Subscribe") {
    buttonElement.innerHTML = "Subscribed";
    buttonElement.classList.add("is-subscribed");
  } else {
    buttonElement.innerHTML = "Subscribe";
    buttonElement.classList.remove("is-subscribed");
  }
}


//we chose innerText to ignore the spaces around the word "Subscribe" and not cause errors
