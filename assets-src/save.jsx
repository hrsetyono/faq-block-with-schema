import { RichText, InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save(props) {
  const {
    question,
    initiallyOpen,
    noIndex,
  } = props.attributes;

  const blockProps = {
    ...useBlockProps.save({
      className: props.className,
      open: initiallyOpen,
      'data-no-schema': noIndex ? '' : undefined,
    }),
  };

  if (!blockProps.className.match(/is-style/)) {
    blockProps.className += ' is-style-default';
  }

  if (blockProps.className.match(/is-style-always-open/)) {
    blockProps.open = true;
    blockProps.tabindex = '-1';
  }

  return (
    <details {...blockProps}>
      <RichText.Content
        tagName="summary"
        className="wp-block-px-faq__question"
        value={question}
      />
      <div className="wp-block-px-faq__answer">
        <InnerBlocks.Content />
      </div>
    </details>
  );
}
