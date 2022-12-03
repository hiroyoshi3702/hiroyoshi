$(function () {
    // $(window).on("load", function () {
    //     $(".loading").addClass("completed");
    // });

    setTimeout(function () {
        $(".loading").fadeOut(600);
    }, 4000);

    const navigation = $(".js_navigation");
    const hamburger = $(".js_hamburger");

    hamburger.on("click", function () {
        $(this).toggleClass("is_active");
        navigation.toggleClass("is_active");
        $("body").toggleClass("is_active");
    });

    $("l_header-nav_item").on("click", function () {
        $(".js_hamburger").remove("is_active");
    });

    const slides = $("#js-slide").find("img");
    const slideLength = slides.length;
    slides.eq(0).show();
    let now = 0;
    let next = 1;
    const fade = 1500;
    const slidesshow = () => {
        slides.eq(now % slideLength).fadeOut(fade); // fadeOutの()に変数をいれる
        slides.eq(next % slideLength).fadeIn(fade); // fadeInの()に変数をいれる
        now++;
        next++;
    };
    slidesshow();
    const show = 3000;
    setInterval(slidesshow, show);

    window.pageYOffset;

    window.addEventListener("scroll", () => {
        console.log(window.pageYOffset);
    });

    $(".l_header-nav_link").on("click", function () {
        $(".js_navigation").removeClass("is_active");
        $(".js_hamburger").removeClass("is_active");
        $("body").removeClass("is_active");
    });

    const pageTop = $(".js_page-top");

    $(window).on("scroll", function () {
        const windowHeight = $(window).height();
        let scrollPos = $(window).scrollTop();
        if (scrollPos > windowHeight) {
            pageTop.addClass("is_active");
        } else {
            pageTop.removeClass("is_active");
        }
    });

    $(window).on("scroll", function () {
        $(".top-skill_item").each(function () {
            var t = $(this).offset().top,
                e = $(window).scrollTop();
            t - $(window).height() + 150 < e
                ? $(this).addClass("fadein")
                : $(this).removeClass("fadein");
        });
    });

    $(window).on("scroll", function () {
        $(".top_item2").each(function () {
            var t = $(this).offset().top,
                e = $(window).scrollTop();
            t - $(window).height() + 150 < e
                ? $(this).addClass("fadein")
                : $(this).removeClass("fadein");
        });
    });

    const containermt = $(".l_container");
    $(window).on("scroll", function () {
        const windowHeight = $(window).height();
        let scrollPos = $(window).scrollTop();
        if (scrollPos > windowHeight) {
            containermt.removeClass("top-about-section");
        } else {
            containermt.addClass("top-about-section");
        }
    });

    pageTop.on("click", function () {
        $("html,body").animate(
            {
                scrollTop: 0,
            },
            600
        );
    });

    $(".top-skill_item").click(function () {
        var flipbox = $(this).find(".top-skill-inner");
        if ($(flipbox).hasClass("top-skill-inner-open")) {
            $(flipbox)
                .removeClass("top-skill-inner-open")
                .addClass("top-skill-inner-close");
        } else {
            $(flipbox)
                .removeClass("top-skill-inner-close")
                .addClass("top-skill-inner-open");
        }
    });
    $(".top_item2").click(function () {
        var flipbox = $(this).find(".top-skill-inner");
        if ($(flipbox).hasClass("top-skill-inner-up")) {
            $(flipbox)
                .removeClass("top-skill-inner-up")
                .addClass("top-skill-inner-down");
        } else {
            $(flipbox)
                .removeClass("top-skill-inner-down")
                .addClass("top-skill-inner-up");
        }
    });
});

gsap.from(".about-slide-items", {
    scrollTrigger: {
        trigger: ".about_section",
        start: "top center",
    },
    duration: 3,
    rotationY: 1080,
    ease: "ease-in-auto",
});

gsap.from(".bg-right", {
    scrollTrigger: {
        trigger: ".top-work-section",
        start: "top center",
        end: "top top",
    },
    duration: 1.5,
    x: 1000,
    ease: "ease-in-out",
});

gsap.from(".bg-left", {
    scrollTrigger: {
        trigger: ".top-work-section",
        start: "top center",
        end: "top top",
    },
    duration: 1.5,
    x: -1000,
    ease: "ease-in-out",
});

gsap.from(".work-box", {
    scrollTrigger: {
        trigger: ".top-work-section",
        start: "top center",
        end: "top top",
    },
    duration: 1.0,
    y: 50,
    opacity: 0,
    ease: "ease-in-out",
});

$(".top-work_list").slick({
    arrow: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
});

gsap.set(".js_contact_sticky__bg", {
    width: "70%",
    height: "35%",
    borderRadius: 300,
}),
    gsap
        .timeline({
            scrollTrigger: {
                trigger: ".contact",
                start: "top top",
                end: "top -=200",
                scrub: true,
            },
        })
        .to(".js_contact_sticky__bg", {
            width: "100%",
            height: "100%",
            borderRadius: 0,
        });

gsap.to(".js_contact_ttls", {
    y: "-100vh",
    ease: "power0",
    scrollTrigger: {
        trigger: ".contact_content",
        start: "top 80%",
        end: "top top",
        scrub: true,
    },
}),
    gsap.to(".contact_content", {
        scrollTrigger: {
            trigger: ".contact_form",
            start: "top 70%",
            end: "top top",
            scrub: true,
        },
        y: -200,
        duration: 1,
    });
gsap.from(".form_unit", {
    scrollTrigger: {
        trigger: ".contact_content",
        start: "top 80%",
        end: "top 50%",
        scrub: true,
    },
    y: 1000,
    opacity: 0,
    duration: 1,
});
gsap.to(".top-about_slide-items", {
    scrollTrigger: {
        trigger: ".top-about_content",
        start: "top 30%",
        end: "top top",
    },
    rotationY: 720,
    duration: 1,
});
gsap.from(".top-about_txt", {
    scrollTrigger: {
        trigger: ".top-about_content",
        start: "top 40%",
        end: "top top",
    },
    scale: 0,
    opacity: 0,
    duration: 2,
});

gsap.from(".ab-str_item", {
    scrollTrigger: {
        trigger: ".ab-str_content",
        start: "top center",
        end: "top top",
    },
    duration: 1.5,
    x: 40,
    opacity: 0,
    ease: "ease-in-out",
    stagger: {
        from: "top",
        amount: 2,
    },
});

gsap.to(".skill_innner", {
    scrollTrigger: {
        trigger: ".skill_main__title",
        start: "top center",
        end: "top top",
    },
    duration: 1.5,
    rotation: 30,
});

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.create({
    trigger: ".skill_main__title",
    start: "top 60%",
    toggleClass: { targets: ".skill_circle__before", className: "first" },
});

gsap.from(".ab-main_rbt-wrapper", {
    scrollTrigger: {
        trigger: ".ab-main_title",
        start: "top center",
        end: "top top",
    },
    duration: 1,
    x: 100,
});
gsap.from(".ab-main_rbt-wrapper2", {
    scrollTrigger: {
        trigger: ".ab-str_title",
        start: "top center",
        end: "top top",
    },
    duration: 1,
    x: -100,
});
gsap.to(".top_service__line", {
    scrollTrigger: {
        trigger: ".top_service__list",
        start: "top center",
        end: "top top",
    },
    duration: 10,
    height: "100%",
});
gsap.to(".top-con_front__right", {
    scrollTrigger: {
        trigger: ".top-con_bg-content",
        start: "top 15%",
        end:"top 2%"

    },
    ease: "ease-in-out",
    duration: 5,
    x: "-200%",
});
gsap.to(".top-con_front__left", {
    scrollTrigger: {
        trigger: ".top-con_bg-content",
        start: "top 15%",
        end:"top 2%"
    },
    x: "200%",
    duration: 5,
    ease: "ease-in-out",
});
