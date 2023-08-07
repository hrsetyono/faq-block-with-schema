import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save(props) {
  const {
    question,
    answer,
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
  }

  return (
    <details {...blockProps}>
      <RichText.Content
        tagName="summary"
        className="wp-block-px-faq__question"
        value={question}
      />
      <RichText.Content
        tagName="div"
        className="wp-block-px-faq__answer"
        value={answer}
      />
    </details>
  );
}
