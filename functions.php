<?php 
    add_action('wp_enqueue_scripts', 'add_styles');
    function add_styles(){
        wp_register_style(
            'google-fonts_style',
            'https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@500&family=Noto+Serif:wght@700&display=swap',
            array(),
            '1.0'
        );

        wp_register_style(
            'reset_style',
            get_template_directory_uri() . '/css/reset.css',
            array(),
            '1.0' 
        ); 

        wp_enqueue_style(
            'main_style',
            get_template_directory_uri() . '/css/main.css',
            array('reset_style', 'google-fonts_style'),
            '1.0'
        );
        wp_register_style(
            'slick.css',
            get_template_directory_uri() . '///cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css',
            array('reset_style', 'google-fonts_style'),
            '1.0'
        );
        wp_enqueue_style(
            'slick-theme.css',
            get_template_directory_uri() . '/js/slick-1.8.1/slick/slick-theme.css',
            array('slick.css'),
            '1.0'
        );
    } 
?>