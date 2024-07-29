document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll(".faq h5");

    faqs.forEach(faq => {
        faq.addEventListener("click", () => {
            const content = faq.nextElementSibling;
            const plus = faq.querySelector("#plus");
            
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
                plus.style.transform = "rotate(45deg)";
            } else {
                content.style.display = "none";
                plus.style.transform = "rotate(0deg)";
            }
        });
    });
});
                                                                                                      