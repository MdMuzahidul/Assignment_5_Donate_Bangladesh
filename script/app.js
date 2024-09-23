document.getElementById("noakhali-btn").addEventListener("click", function () {
  const yourMoney = getelementbyid("your-money");
  const noakhaliTotalDonation = getelementbyid("noakhali-total-donation");
  const noakhaliDonation = getElementByIdInput("noakhali-donation");
  if (isNaN(noakhaliDonation)) {
    alert("Input a valid number");
  } else if (noakhaliDonation <= 0) {
    alert("please input a number greater than 0");
  } else if (yourMoney < noakhaliDonation) {
    alert("insafecient balance");
  } else {
    console.log(noakhaliDonation);
  }
});
