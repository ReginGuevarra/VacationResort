"use strict";

let costForm = document.getElementById("costForm");

costForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Selecting all the elements
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let days = Number(document.getElementById("days").value);
  let adults = Number(document.getElementById("adults").value);
  let children = Number(document.getElementById("children").value);
  let checkin = new Date(document.getElementById("checkin").value);
  let selectedRoom = document.querySelector("input[name='roomtype']:checked");
  let selectedDiscount = document.querySelector(
    "input[name='discount']:checked"
  );
  let price;
  let discount;
  let inSeason = false;

  let result = getRoomRate(checkin, selectedRoom.value);
  alert(result);
  function getRoomRate(checkindate, roomtype) {
    if (checkindate.getMonth() == 6 || checkindate.getMonth() == 7) {
      inSeason = true;
      if (selectedRoom.value == "Queen") {
        price = 250;
      } else if (selectedRoom.value == "King") {
        price = 250;
      }
      if (selectedRoom.value == "2bed") {
        price = 350;
      }
    } else {
      inSeason = false;
      if (selectedRoom.value == "Queen") {
        price = 150;
      } else if (selectedRoom.value == "King") {
        price = 150;
      }
      if (selectedRoom.value == "2bed") {
        price = 210;
      }
    }

    return price;
  }

  // Price - discount

  //

  if (selectedDiscount.value == "None") {
    discount = 1;
  }

  if (selectedDiscount.value == "AA") {
    discount = 0.9;
  }
  if (selectedDiscount.value == "Military") {
    discount = 0.8;
  }

  let total = price * discount;
  document.getElementById("demo").innerHTML = total;

  let totalIncludingTaxes = total * 1.12;
  document.getElementById("demo2").innerHTML = totalIncludingTaxes.toFixed(2);
  //12 procent taxes after discount reduction
  output;
});


// Jonathan's codes

/*const myForm = document.getElementById( myForm).
myForm.reset()

function CalculateTaxes(taxrate, price)
  {
    const tax = taxrate / 100;
    const totalPriceWithTax = (price + price  * tax).toFixed(2);
    return totalPriceWithTax;
  }
  */