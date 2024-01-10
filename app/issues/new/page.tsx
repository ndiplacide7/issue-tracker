'use client'
import React from 'react'
import { Button, TextArea, TextField } from '@radix-ui/themes'

const NewIssuesPage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root>
        <TextField.Input placeholder="Title" />
        </TextField.Root>

        <TextArea placeholder="Description" />
        <button>Submit New  Issue</button>
    </div>
  )
}

export default NewIssuesPage