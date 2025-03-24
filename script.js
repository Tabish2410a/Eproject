document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded successfully!");
});
document.addEventListener("DOMContentLoaded", function () {
    const messages = [
        "Contact us for any queries",
        "We are here to assist you!",
        "Reach out for the best deals on wallets",
        "Need help? Contact us now!"
    ];
    
    let index = 0;
    setInterval(() => {
        document.getElementById("animatedMessage").innerText = messages[index];
        index = (index + 1) % messages.length;
    }, 3000); // Change message every 3 seconds
});
