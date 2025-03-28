document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // 阻止默认提交行为

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let eventChoice = document.getElementById("event").value;
    let people = parseInt(document.getElementById("people").value);

    let price = eventChoice === "dessert" ? 25 : 35;
    let totalPrice = price * people;

    if (people >= 10) {
        totalPrice *= 0.9; // 10% 折扣
    }

    // 存储到 localStorage (模拟数据库)
    let booking = { name, email, eventChoice, people, totalPrice };
    localStorage.setItem("booking", JSON.stringify(booking));

    alert(`预订成功！总价: $${totalPrice.toFixed(2)}`);
    window.location.href = "confirmation.html"; // 跳转到确认页面
});