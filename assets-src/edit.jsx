import {
  useBlockProps,
  RichText,
  InspectorControls,
} from '@wordpress/block-editor';
import {
  ToggleControl,
  PanelBody,
} from '@wordpress/components';

export default function edit(props) {
  const atts = props.attributes;
  const blockProps = useBlockProps();
  const isAlwaysOpen = atts.className && atts.className.includes('is-style-always-open');

  return (
    <>
      <InspectorControls>
        <PanelBody
          title="Settings"
          initialOpen
        >
          { !isAlwaysOpen && (
            <ToggleControl
              label="Initially Open?"
              checked={atts.initiallyOpen}
              onChange={(value) => {
                props.setAttributes({ initiallyOpen: value });
              }}
              help="Show the answer at first. Still toggle-able."
            />
          )}
          <ToggleControl
            label="No Schema?"
            checked={atts.noIndex}
            onChange={(value) => {
              props.setAttributes({ noIndex: value });
            }}
            help="Exclude this question from Schema data"
          />
        </PanelBody>
      </InspectorControls>

      <div
        {...blockProps}
        open={atts.initiallyOpen}
      >
        <RichText
          tagName="div"
          className="wp-block-px-faq__question"
          value={atts.question}
          placeholder="Enter the Question…"
          onChange={(value) => {
            props.setAttributes({ question: value });
          }}
        />
        {atts.noIndex && (
          <span
            title="Excluded from Schema. Click here to enable it."
            className="dashicons-before dashicons-hidden"
            onClick={() => {
              props.setAttributes({ noIndex: false });
            }}
          />
        )}

        <RichText
          tagName="div"
          className="wp-block-px-faq__answer"
          value={atts.answer}
          multiline="p"
          placeholder="Enter the Answer…"
          onChange={(value) => {
            props.setAttributes({ answer: value });
          }}
        />
      </div>
    </>
  );
}
