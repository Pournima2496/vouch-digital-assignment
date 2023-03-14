import { Card, CardContent } from '@mui/material'
import React from 'react'

const BasicCard = ({header, content}) => {
  return (
    <Card>
    {header}
        <CardContent>
                {content}
        </CardContent>
    </Card>
  )
}

export default BasicCard