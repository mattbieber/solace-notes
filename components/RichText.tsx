import React from 'react'
import { editorConfig } from '@/lib/editor-config'
import { RichTextFormattingToolbar } from './RichTextFormattingToolbar'
import { useEditor, EditorContent } from '@tiptap/react'

interface RichTextProps {
  description: string
  onChange: (text: string) => void
}

export function RichText({ description, onChange }: RichTextProps) {
  // console.log('rich text')
  const editor = useEditor({
    extensions: editorConfig,
    content: description,
    editorProps: {
      attributes: {
        class:
          'rounded-sm px-3 py-2 min-h-[150px] border border-input bg-back ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      },
    },
    onUpdate({ editor }) {
  
      onChange(editor.getHTML())
      console.log(editor.getHTML())
    },
  })

  return (
    <div className="my-32">
      <RichTextFormattingToolbar editor={editor} />
      <EditorContent className="my-4" editor={editor} />
    </div>
  )
}
