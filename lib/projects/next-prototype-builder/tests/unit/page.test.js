import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from './page.jsx'

describe('Home', () => {
  it('renders the main heading', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { level: 1 }))
  })
})
