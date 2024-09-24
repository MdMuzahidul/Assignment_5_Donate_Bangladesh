// noakhaliDonation
document.getElementById("noakhali-btn").addEventListener("click", function () {
  const yourMoney = getelementbyid("your-money");
  const noakhaliTotalDonation = getelementbyid("noakhali-total-donation");
  const noakhaliDonation = getElementByIdInput("noakhali-donation");
  console.log(noakhaliDonation);

  if (!noakhaliDonation) {
    document.getElementById("noakhali-donation").value = "";
  } else if (noakhaliDonation <= 0) {
    document.getElementById("noakhali-donation").value = "";
    alert("please input a valid amount greater than 0");
  } else if (yourMoney < noakhaliDonation) {
    document.getElementById("noakhali-donation").value = "";
    alert("insufficient balance");
  } else {
    const newNoakhaliTotalDonation = noakhaliTotalDonation + noakhaliDonation;
    const newYourMoney = yourMoney - noakhaliDonation;
    document.getElementById("your-money").innerText = newYourMoney;
    document.getElementById("noakhali-total-donation").innerText =
      newNoakhaliTotalDonation;
    document.getElementById("noakhali-donation").value = "";
    document.getElementById("my_modal_1").showModal();
    // set history
    const historyBox = document.getElementById("history-box");
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.innerHTML = `${noakhaliDonation} Taka is Donated for Flood Relief in Feni,Bangladesh `;
    p.style.color = "#111111";
    p.style.fontSize = "1.25rem";
    p.style.fontWeight = "bold";
    div.appendChild(p);
    const d = document.createElement("p");
    d.innerHTML = "Date: " + new Date();
    d.style.color = "rgba(17,17,17,0.7)";
    d.style.fontWeight = "light";
    d.style.fontSize = "1rem";
    div.appendChild(d);
    div.style.padding = "32px";
    div.style.border = "1px solid black";
    div.style.borderRadius = "16px";
    div.style.marginTop = "2rem";
    historyBox.appendChild(div);
  }
});

// quota donation
document.getElementById("quota-btn").addEventListener("click", function () {
  const yourMoney = getelementbyid("your-money");
  const quotaTotalDonation = getelementbyid("quota-total-donation");
  const quotaDonation = getElementByIdInput("quota-donation");
  if (!quotaDonation) {
    document.getElementById("quota-donation").value = "";
  } else if (quotaDonation <= 0) {
    document.getElementById("quota-donation").value = "";
    alert("please input a valid amount greater than 0");
  } else if (yourMoney < quotaDonation) {
    document.getElementById("quota-donation").value = "";
    alert("insufficient balance");
  } else {
    const newQuotaTotalDonation = quotaTotalDonation + quotaDonation;
    const newYourMoney = yourMoney - quotaDonation;
    document.getElementById("your-money").innerText = newYourMoney;
    document.getElementById("quota-total-donation").innerText =
      newQuotaTotalDonation;
    document.getElementById("quota-donation").value = "";
    document.getElementById("my_modal_1").showModal();
  }
});

// feni donation
document.getElementById("feni-btn").addEventListener("click", function () {
  const yourMoney = getelementbyid("your-money");
  const feniTotalDonation = getelementbyid("feni-total-donation");
  const feniDonation = getElementByIdInput("feni-donation");
  if (!feniDonation) {
    document.getElementById("feni-donation").value = "";
  } else if (feniDonation <= 0) {
    document.getElementById("feni-donation").value = "";
    alert("please input a valid amount greater than 0");
  } else if (yourMoney < feniDonation) {
    document.getElementById("feni-donation").value = "";
    alert("insufficient balance");
  } else {
    const newFeniTotalDonation = feniTotalDonation + feniDonation;
    const newYourMoney = yourMoney - feniDonation;
    document.getElementById("your-money").innerText = newYourMoney;
    document.getElementById("feni-total-donation").innerText =
      newFeniTotalDonation;
    document.getElementById("feni-donation").value = "";
    document.getElementById("my_modal_1").showModal();
  }
});
