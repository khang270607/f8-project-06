$("#showMenu").click(() => {
    $("#menu").animate({ width: "100vw" }, 500);
    $(".menu--list").animate({ width: "70%" }, 400);
    $(".menu--item").animate({ opacity: 1 }, 300);
    $(".menu--icon").animate(
        {
            width: "37px",
            opacity: 1,
        },
        300
    );
    $(".menu--link").animate(
        {
            width: "100%",
            opacity: 1,
        },
        300
    );
    $(".menu--right").animate(
        {
            width: "100vw",
        },
        0
    );
    $(".menu--right").animate(
        {
            opacity: 1,
        },
        300
    );
});

$(".closeMenu").click(() => {
    $("#menu").animate({ width: "0vw" }, 400);
    $(".menu--list").animate({ width: "0%" }, 300);
    $(".menu--item").animate({ opacity: 0 }, 200);
    $(".menu--icon").animate(
        {
            width: "0px",
            opacity: 0,
        },
        200
    );
    $(".menu--link").animate(
        {
            width: "0%",
            opacity: 0,
        },
        200
    );
    $(".menu--right").animate(
        {
            opacity: 0,
        },
        400
    );
    $(".menu--right").animate(
        {
            width: 0,
        },
        300
    );
});

for (let i = 1; i <= 3; i++) {
    $(`#radio--port-${i}`).click(() => {
        for (let j = 1; j <= 3; j++) {
            $(`#port--${j}`).css("z-index", i === j ? "1" : "0");
        }
    });
}
for (let i = 1; i <= 5; i++) {
    const plusButton = $(`.faq--plus-${i}`);
    const minusButton = $(`.faq--minus-${i}`);
    const subHeading = $(`.faq--sub-heading-${i}`);
    const description = $(`.faq--desc-${i}`);
    const item = $(`.faq--item-${i}`);

    plusButton.click(() => {
        subHeading.css("color", "#5D3BEE");
        description.css("display", "block");
        minusButton.css("display", "block");
        plusButton.css("display", "none");
        item.css("border-color", "#5D3BEE");

        minusButton.click(() => {
            subHeading.css("color", "#080415");
            description.css("display", "none");
            minusButton.css("display", "none");
            plusButton.css("display", "block");
            item.css("border-color", "#080415");
        });
    });
}

for (let i = 1; i <= 5; i++) {
    $(`#radio--gallery-${i}`).click(() => {
        for (let j = 1; j <= 5; j++) {
            $(`.gallery-item-${j}`).css("z-index", i === j ? "1" : "0");
        }
    });
}

$("#play--video").click(() => {
    $(".say--img-video-mobile").css("display", "none");
    $(".say--intro").css("display", "none");
    $("#addVideo").css("display", "block");
    $("#play--video").css("display", "none");
});
