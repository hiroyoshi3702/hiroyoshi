<!DOCTYPE html>
<html lang="JP">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hiroyoshi's portfolio</title>
        <meta name="description" content="あべひろよしのポートフォリオサイト" />
        <meta name="format-detection" content="telephone=no" />
        <!-- favicon -->

        <meta property="og:site_name" content="hiroyoshi's portfolio" />
        <!-- og:url -->
        <meta property="og:url" content="URL" />
        <meta property="og:type" content="websaite" />
        <meta property="og:title" content="Hiroyoshi's portfolio" />
        <meta
            property="og:description"
            content="Hiroyoshi's portfolioあべひろよしのポートフォリオサイト"
        />
        <!-- og:image -->
        <meta property="og:locale" content="ja_JP" />
        <meta property="fb:app_id" content="AppID" />
        <meta name="twitter:card" content="summary_large_image or summary" />
        <meta name="twitter:site" content="@hrys2020405" />
        <meta
            name="twitter:description"
            content="あべひろよしのポートフォリオサイト"
        />
        <meta name="twitter:image:src" content="URL" /> 

        <script src="js/jquery-3.6.1.min.js"></script>
        <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js"></script>
        <script src="https://rawgit.com/kimmobrunfeldt/progressbar.js/master/dist/progressbar.min.js"></script>

        <script src="js/main.js" defer></script>

        <?php wp_head(); ?>
    </head>
    <body>
        <header class="l_header">
            <div class="l_header-inner">
                <h1 class="l_header-logo">
                    <a href="<?php echo esc_url( home_url() ); ?>" class="l_header-logo_link"
                        >My portfolio</a
                    >
                    <!-- /.l_header-logo_link -->
                </h1>
                <!-- /.l_header-logo -->

                <nav class="l_header-nav js_navigation">
                    <ul class="l_header-nav_list">
                        <li class="l_header-nav_item">
                            <a  href="#about" class="l_header-nav_link">ABOUT</a>
                            <!-- /.l_header-nav_link -->
                        </li>
                        <!-- /.l_header-nav_item -->
                        <li class="l_header-nav_item">
                            <a  href="#skill" class="l_header-nav_link">SKILL</a>
                            <!-- /.l_header-nav_link -->
                        </li>
                        <li class="l_header-nav_item">
                            <a  href="#service" class="l_header-nav_link">SERVICE</a>
                            <!-- /.l_header-nav_link -->
                        </li>
                        <!-- /.l_header-nav_item -->
                        <li class="l_header-nav_item">
                            <a href="#work" class="l_header-nav_link">WORK</a>
                            <!-- /.l_header-nav_link -->
                        </li>
                        <!-- /.l_header-nav_item -->
                        <li class="l_header-nav_item">
                            <a href="#contact" class="l_header-nav_link"
                                >CONTACT</a
                            >
                            <!-- /.l_header-nav_link -->
                        </li>
                        <!-- /.l_header-nav_item -->
                    </ul>
                    <!-- /.l_header_list -->
                </nav>
                <!-- /.l_header-nav -->

                <button class="m_hamburger js_hamburger">
                    <span class="m_hamburger-bar"></span>
                    <span class="m_hamburger-bar"></span>
                    <span class="m_hamburger-bar"></span>
                    <!-- /.m_hamburger-bar -->
                </button>
                <!-- /.m_hamburger -->
            </div>
            <!-- /.l_header-inner -->
        </header>