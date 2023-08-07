<?php
/**
 * Plugin Name: FAQ Block with Schema
 * Description: Question with expandable answer and integrated with JSON Schema for better SEO.
 * Plugin URI:  https://pixelstudio.id/plugin/faq-block
 * Author:      Pixel Studio ID
 * Author URI:  https://pixelstudio.id
 * Version:     1.0.2
 * 
 * Requires PHP:      7.3
 * Tested up to:      6.2
 * Requires at least: 6.1
 */

if (!defined('WPINC')) { die; } // Abort if accessed directly

define('PXFAQ_VERSION', '1.0.1');
define('PXFAQ_DIR', __DIR__);
define('PXFAQ_ASSETS', plugins_url('', __FILE__) . '/assets-dist');


require_once __DIR__ . '/inc/hooks.php';

if (is_admin()) {
	require_once __DIR__ . '/inc/hooks-admin.php';
} else {
	require_once __DIR__ . '/inc/hooks-public.php';
}