function getElementByIdInput(id) {
  const valu = document.getElementById(id).value;
  if (isNaN(valu)) {
    alert("Input a valid amount");
    return false;
  } else {
    const intValu = parseInt(valu);
    return intValu;
  }
}
