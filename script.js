document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let eventChoice = document.getElementById("event").value;
    let people = parseInt(document.getElementById("people").value);

    let price = eventChoice === "dessert" ? 25 : 35;
    let totalPrice = price * people;

    if (people >= 6) {
        totalPrice *= 0.9; // 10% 
    }

    let booking = { name, email, eventChoice, people, totalPrice };
    localStorage.setItem("booking", JSON.stringify(booking));

    alert(`Booking Successful！Total: $${totalPrice.toFixed(2)}`);
    window.location.href = "confirmation.html"; 
});
