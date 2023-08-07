<?php
if (!defined('WPINC')) { die; } // Abort if accessed directly

add_action('init', 'pxfaq_register_block');

/**
 * Register a custom FAQ block
 * 
 * @action init
 */
function pxfaq_register_block() {
  wp_register_script('px-faq', PXFAQ_ASSETS . '/px-faq.js', [ 'wp-blocks', 'wp-dom' ] , PXFAQ_VERSION, true);
  wp_register_style('px-faq', PXFAQ_ASSETS . '/px-faq.css', [], PXFAQ_VERSION);
  wp_register_style('px-faq-public', PXFAQ_ASSETS . '/px-faq-public.css', [], PXFAQ_VERSION);

  register_block_type(PXFAQ_DIR . '/assets-src');
}
