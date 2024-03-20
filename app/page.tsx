import React from 'react'
import Layout from './Components/Layout'
import { MantineProvider } from '@mantine/core'

function page() {
  return (
    <div>
      <MantineProvider>
        <Layout />
      </MantineProvider>
    </div>
  )
}

export default page