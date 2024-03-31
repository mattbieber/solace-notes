import * as z from 'zod'

const TITLE = {
  min: 4,
  max: 40,
}

export const NoteSchema = z.object({
  id: z.number().int(),
  lastModified: z.coerce.string().datetime(),
  title: z
    .string({
      description: 'note title',
    })
    .trim()
    .min(TITLE.min, {
      message: `Title should have at least ${TITLE.min} characters.`,
    })
    .max(TITLE.max, {
      message: `Title should have at most ${TITLE.max} characters.`,
    }),

  noteField: z.string(),
})

export type Note = z.infer<typeof NoteSchema>
