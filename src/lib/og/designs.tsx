const BG = '#1c2024'
const TEXT_PRIMARY = '#edeef0'
const TEXT_MUTED = '#80828d'
const SITE_NAME = 'emkis.dev'

interface DesignProps {
  title: string
  color: string
}

function Design1({ title, color }: DesignProps) {
  return (
    <div
      style={{
        display: 'flex',
        width: 1200,
        height: 630,
        backgroundColor: BG,
      }}
    >
      <div style={{ width: 12, height: '100%', backgroundColor: color }} />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          flex: 1,
        }}
      >
        <span
          style={{
            fontFamily: 'Inter',
            fontSize: 22,
            color: TEXT_MUTED,
            letterSpacing: 1,
          }}
        >
          {SITE_NAME}
        </span>

        <span
          style={{
            fontFamily: 'Merriweather',
            fontSize: 68,
            fontWeight: 700,
            color: TEXT_PRIMARY,
            lineHeight: 1.2,
          }}
        >
          {title}
        </span>
      </div>
    </div>
  )
}

export { Design1 }
