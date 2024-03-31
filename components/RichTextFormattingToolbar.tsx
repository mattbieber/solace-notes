import React, { useState } from 'react'
import type { Editor } from '@tiptap/react'
import { ColorPicker } from './ColorPicker'
import { ToolbarIcons } from './icons'
import { Toggle } from './ui/toggle'


interface RichTextFormattingToolbarProps {
  editor: Editor | null
}

export function RichTextFormattingToolbar({
  editor,
}: RichTextFormattingToolbarProps) {
  const [showColorPicker, setShowColorPicker] = useState(false)
  const [color, setColor] = useState<string>('')
  
  if (!editor) {
    return null
  }
  
  // console.log('toolbar')

  const colorPickerStyle = showColorPicker
    ? 'opacity-100 visible absolute w-48 mt-2 bg-white text-gray-800 border border-gray-300'
    : 'opacity-0 invisible absolute'

  return (
    <section className="border rounded-sm border-input bg-transparent p-2">
      <Toggle
        size="sm"
        pressed={editor.isActive('heading', { level: 1 })}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <ToolbarIcons.ItalicIcon className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('heading', { level: 1 })}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <ToolbarIcons.BoldIcon className="h-4 w-4" />
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive('heading', { level: 1 })}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <ToolbarIcons.StrikeIcon className="h-4 w-4" />
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive('heading', { level: 1 })}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 1 }).run()
        }
      >
        <ToolbarIcons.Heading1 className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        // pressed={editor.isActive('heading')}
        // onPressedChange={() =>
        //   editor.chain().focus().toggleHeading({ level: 2 }).run()
        // }
      >
        <ToolbarIcons.Heading2 className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        // pressed={editor.isActive('heading')}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <ToolbarIcons.Heading3 className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        // pressed={editor.isActive('heading')}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <ToolbarIcons.BulletListIcon className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        // pressed={editor.isActive('heading')}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <ToolbarIcons.NumberedListIcon className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        // pressed={editor.isActive('heading')}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <ToolbarIcons.BlockQuoteIcon className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        // pressed={editor.isActive('heading')}
        onPressedChange={
          () => setShowColorPicker(!showColorPicker)
          // editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <ToolbarIcons.ColorIcon className="h-4 w-4" />
      </Toggle>
      <div className="relative group inline-block z-50">
        <div className={colorPickerStyle}>
          { showColorPicker && <ColorPicker /> }
        </div>
      </div>
    </section>
  )
}
