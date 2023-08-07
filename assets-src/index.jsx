import './style-editor.sass';
import { registerBlockType } from '@wordpress/blocks';
import edit from './edit.jsx';
import save from './save.jsx';

registerBlockType('px/faq', { edit, save });
