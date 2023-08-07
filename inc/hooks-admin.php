<?php
if (!defined('WPINC')) { die; } // Abort if accessed directly

add_filter('block_editor_settings_all', 'pxfaq_disable_inspector_tabs');

/**
 * Disable Inspector Tabs
 * 
 * @filter block_editor_settings_all
 */
function pxfaq_disable_inspector_tabs($settings) {
  $current_tab_settings = _wp_array_get($settings, ['blockInspectorTabs'], []);
  $settings['blockInspectorTabs'] = array_merge(
    $current_tab_settings,
    [ 'px/faq' => false ]
  );

  return $settings;
}