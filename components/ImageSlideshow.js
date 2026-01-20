import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './ImageSlideshow.module.css'

export default function ImageSlideshow({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Default images if none provided
  const slideImages = images.length > 0 ? images : [
    { src: '/images/img_1.png', alt: 'Peti Device' },
    { src: '/images/img_2.png', alt: 'Peti in Action' },
  ]

  useEffect(() => {
    if (slideImages.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideImages.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [slideImages.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className={styles.slideshow}>
      <div className={styles.imageContainer}>
        {slideImages.map((image, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              style={{ objectFit: 'contain' }}
              priority={index === 0}
              quality={75}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDAwUBAAAAAAAAAAAAAQIDAAQRBRIhBhMiMUFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEQA/ANK07V7yDULy5uLiWSCYjt27vFBgDgD5z81FqUl/8pSqV0MwYHuf/9k="
            />
          </div>
        ))}
      </div>
      
      {/* Dots indicator */}
      {slideImages.length > 1 && (
        <div className={styles.dots}>
          {slideImages.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

