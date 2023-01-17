// src/Tiptap.jsx
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import MenuBar from './Menubar';

const Tiptap = () => {
	const editor = useEditor({
		extensions: [StarterKit],
		content: '<p>Hello World!</p>',
	});

	return (
		<div>
			<MenuBar editor={editor} />
			<EditorContent editor={editor} />
		</div>
	);
};

export default Tiptap;
