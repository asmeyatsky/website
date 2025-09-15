import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'
import { CalendlyProvider } from '@/context/calendly-context'

describe('Header', () => {
  it('renders a heading', () => {
    render(
      <CalendlyProvider>
        <Header />
      </CalendlyProvider>
    )

    const heading = screen.getByRole('link', {
      name: /Allan Smeyatsky/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
