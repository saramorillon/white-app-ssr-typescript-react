import React, { ReactNode } from 'react'
import { Container } from 'reactstrap'
import { User } from '../models/User'
import Header from './Header'

interface ILayoutProps {
  user?: User
  children: ReactNode
}

export default function Layout({ user, children }: ILayoutProps): JSX.Element {
  return (
    <html>
      <head>
        <title>Git UI</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        <link rel="icon" type="image/png" href="/favicon.svg" />
      </head>
      <body>
        <Header user={user} />
        <Container>{children}</Container>
      </body>
    </html>
  )
}
