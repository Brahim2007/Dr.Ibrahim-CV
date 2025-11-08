import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brahim Kertiou - CV | Ph.D. Library & Information Science',
  description: 'Professional CV of Brahim Kertiou, Ph.D. in Library & Information Science with 15+ years experience in digital humanities, scholarly communication, and information systems.',
}

export default function CVLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="direction-ltr text-left font-sans">
      {children}
    </div>
  )
}