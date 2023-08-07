<?php
  $atts = $attributes;
  $style = null;

  if (isset($atts['className'])) {
    preg_match('/is-style-(\w+)/', $atts['className'], $style);
    $style = $style[1];
  }

  $base_classes = $atts['noIndex'] ? ' noindex' : '';
  $base_classes .= $style ? '' : ' is-style-default';
  $wrapper_args = [
    'class' => $base_classes,
  ];

  if ($atts['initiallyOpen']) {
    $wrapper_args['open'] = 'open';
  }

  if (isset($atts['className']) && strpos($atts['className'], 'is-style-always-open') !== false) {
    $wrapper_args['open'] = 'open';
    $wrapper_args['tabindex'] = '-1';
  }

  $html_atts = get_block_wrapper_attributes($wrapper_args);
?>

<details <?= $html_atts ?>>
  <summary class='wp-block-px-faq__question'>
    <?= $atts['question'] ?>
  </summary>
  <div class='wp-block-px-faq__answer'>
    <?= $atts['answer'] ?>
  </div>
</details>