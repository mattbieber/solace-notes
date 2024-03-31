'use client'

import React from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
  Input,
  Button,
} from '@/components/ui'
import { RichText } from '@/components/RichText'
import type { Note } from '@/models/note-model'
import { NoteSchema } from '@/models/note-model'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export default function Edit() {
  const noteForm = useForm<Note>({
    resolver: zodResolver(NoteSchema),
    mode: 'onChange',
  })

  // console.log(noteForm.watch('noteField'))a
  // console.log('page')

  return (
    <main className="p-24">
      <Form {...noteForm}>
        <form className="flex flex-col gap-8">
          <FormField
            control={noteForm.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Note Title</FormLabel>
                <FormControl>
                  <Input placeholder="My Note" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={noteForm.control}
            name="noteField"
            render={({ field }) => {
              const { name, onChange } = field
              return (
                <FormItem>
                  <FormLabel>Tutlt</FormLabel>
                  <FormControl>
                    <RichText description={name} onChange={onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <Button className="my-4">Submit</Button>
        </form>
      </Form>
    </main>
  )
}
