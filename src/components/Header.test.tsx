import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

describe('Header', () => {
  it('renders a heading', () => {
    render(<Header />)

    const heading = screen.getByRole('link', {
      name: /Allan Smeyatsky/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
