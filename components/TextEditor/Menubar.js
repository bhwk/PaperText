import React from 'react'

const active = 'text-primary font-bold italic'

const MenuBar = ({ editor }) => {
if (!editor) {
return null
}

return (
<>
<div className='flex gap-2'>
    <button 
    className={editor.isActive('bold') ? active : ''}
    onClick = {() => editor.chain().focus().toggleBold().run()}>
        Bold
    </button>
    <button 
    className={editor.isActive('italic')?active:''}
    onClick = {() => editor.chain().focus().toggleItalic().run()}>
        Italic
    </button>
    <button 
    className={editor.isActive('heading',{level:1})?active:''}
    onClick = {() => editor.chain().focus().toggleHeading({level:1}).run()}>
        H1
    </button>
</div>
</>
)
}

export default MenuBar