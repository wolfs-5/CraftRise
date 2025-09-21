'use client'

import { ReactNode, useEffect, useCallback } from 'react'
import Lenis from 'lenis'

interface LenisProviderProps {
  children: ReactNode
}

export function LenisProvider({ children }: LenisProviderProps) {
  // Define scroll handler function properly within component
  const handleScroll = useCallback(({ scroll, velocity, progress }: { scroll: number; limit: number; velocity: number; direction: number; progress: number }) => {
    // Parallax effect for background elements
    const parallaxElements = document.querySelectorAll('.parallax-element')
    parallaxElements.forEach((element) => {
      const speed = parseFloat(element.getAttribute('data-speed') || '0.5')
      const yPos = -(scroll * speed)
      ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
    })

    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal-on-scroll')
    revealElements.forEach((element) => {
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
        element.classList.add('revealed')
      }
    })

    // Header background opacity based on scroll
    const header = document.querySelector('.scroll-header')
    if (header) {
      const opacity = Math.min(scroll / 100, 0.95)
      ;(header as HTMLElement).style.background = 
        `rgba(var(--background-rgb), ${opacity})`
      ;(header as HTMLElement).style.backdropFilter = 
        scroll > 50 ? 'blur(10px)' : 'none'
    }

    // Scale elements based on scroll velocity for dynamic feel
    const velocityElements = document.querySelectorAll('.velocity-scale')
    velocityElements.forEach((element) => {
      const scale = Math.max(0.98, 1 - Math.abs(velocity) * 0.001)
      ;(element as HTMLElement).style.transform = `scale(${scale})`
    })

    // Progress indicator
    const progressBar = document.querySelector('.scroll-progress')
    if (progressBar) {
      ;(progressBar as HTMLElement).style.transform = 
        `scaleX(${progress})`
    }

    // Artisan craft floating animation enhancement
    const craftElements = document.querySelectorAll('.craft-float')
    craftElements.forEach((element, index) => {
      const offset = Math.sin(scroll * 0.001 + index) * 2
      ;(element as HTMLElement).style.transform = 
        `translateY(${offset}px) rotate(${offset * 0.5}deg)`
    })
  }, [])

  useEffect(() => {
    // Create Lenis instance with premium settings for artisan platform
    const lenis = new Lenis({
      duration: 1.2,        // Optimized smooth scrolling duration
      easing: (t) => {
        // Butter-smooth easing curve for premium feel
        return 1 - Math.pow(1 - t, 4)
      },
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,    // Butter-smooth wheel scrolling
      wheelMultiplier: 1.0, // Perfect wheel sensitivity
      touchMultiplier: 2.0, // Enhanced touch responsiveness for mobile
      infinite: false,      // Natural scroll bounds
      syncTouch: true,      // Sync touch scrolling
      syncTouchLerp: 0.1,   // Smooth touch interpolation
    })

    // Animation frame function for smooth rendering
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Attach scroll listener for advanced animations
    lenis.on('scroll', handleScroll)

    // Scroll to anchor links smoothly
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A') {
        const href = target.getAttribute('href')
        if (href?.startsWith('#')) {
          e.preventDefault()
          const element = document.querySelector(href) as HTMLElement
          if (element) {
            lenis.scrollTo(element, { 
              duration: 1.5,
              easing: (t: number) => 1 - Math.pow(1 - t, 3)
            })
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    // Cleanup on unmount
    return () => {
      lenis.destroy()
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [handleScroll])

  return <>{children}</>
}