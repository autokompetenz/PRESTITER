import { motion } from 'framer-motion'

const circles = [
  { size: 280, top: '10%', left: '-5%', delay: 0 },
  { size: 160, bottom: '15%', right: '8%', delay: 1 },
  { size: 100, top: '40%', right: '25%', delay: 0.5 },
  { size: 200, bottom: '30%', left: '10%', delay: 1.5 },
]

export default function FloatingDecorations() {
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
      {circles.map((c, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: c.size,
            height: c.size,
            borderRadius: '50%',
            border: '1px solid rgba(0,86,179,0.06)',
            ...(c.top ? { top: c.top } : {}),
            ...(c.left ? { left: c.left } : {}),
            ...(c.right ? { right: c.right } : {}),
            ...(c.bottom ? { bottom: c.bottom } : {}),
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: c.delay, ease: [0.16, 1, 0.3, 1] }}
          whileInView={{ scale: [1, 1.05, 1] }}
          viewport={{ once: true }}
        />
      ))}
    </div>
  )
}
