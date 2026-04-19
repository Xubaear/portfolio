import React, { useEffect, useRef, useState } from 'react'

export default function CursorTrail() {
  const dot1Ref = useRef(null)
  const dot2Ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const mouse = useRef({ x: -100, y: -100 })
  const trail = useRef({ x: -100, y: -100 })

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      setVisible(true)
      
      // Update first dot instantly
      if (dot1Ref.current) {
        dot1Ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    const onMouseLeave = () => setVisible(false)
    const onMouseEnter = () => setVisible(true)

    // Detect hover on interactive elements to slightly enlarge the trailing dot
    const handleMouseOver = (e) => {
      const target = e.target
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        window.getComputedStyle(target).cursor === 'pointer' ||
        window.getComputedStyle(target).cursor === 'none'
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    document.documentElement.addEventListener('mouseleave', onMouseLeave)
    document.documentElement.addEventListener('mouseenter', onMouseEnter)
    window.addEventListener('mouseover', handleMouseOver)

    // Animation loop for the trailing dot
    let raf
    const animate = () => {
      trail.current.x += (mouse.current.x - trail.current.x) * 0.25
      trail.current.y += (mouse.current.y - trail.current.y) * 0.25

      if (dot2Ref.current) {
        dot2Ref.current.style.transform = `translate(${trail.current.x}px, ${trail.current.y}px)`
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.documentElement.removeEventListener('mouseleave', onMouseLeave)
      document.documentElement.removeEventListener('mouseenter', onMouseEnter)
      window.removeEventListener('mouseover', handleMouseOver)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

  return (
    <>
      {/* Trailing Lag Dot (Cyan) */}
      <div
        ref={dot2Ref}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovering ? '12px' : '6px',
          height: isHovering ? '12px' : '6px',
          borderRadius: '50%',
          backgroundColor: '#22d3ee', // Cyan accent
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: visible ? 0.7 : 0,
          transform: 'translate(-100px, -100px)',
          marginLeft: isHovering ? '-6px' : '-3px',
          marginTop: isHovering ? '-6px' : '-3px',
          transition: 'width 0.2s, height 0.2s, margin 0.2s, opacity 0.3s',
          willChange: 'transform',
        }}
      />
      {/* Lead Precise Dot (Indigo) */}
      <div
        ref={dot1Ref}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#818cf8', // Indigo primary
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: visible ? 1 : 0,
          transform: 'translate(-100px, -100px)',
          marginLeft: '-4px',
          marginTop: '-4px',
          transition: 'opacity 0.3s',
          willChange: 'transform',
        }}
      />
    </>
  )
}
