import { useState, useEffect, useRef, MutableRefObject } from 'react'

export interface Options {
	root?: Element | null
	rootMargin?: string
	threshold?: number | number[]
}

export const useIntersectionObserver = (
	options: Options = { root: null, rootMargin: '0px', threshold: 1.0 }
): [MutableRefObject<Element | null>, boolean] => {
	const [isIntersecting, setIsIntersecting] = useState(false)
	const targetRef = useRef<Element | null>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			setIsIntersecting(entry.isIntersecting)
		}, options)

		const target = targetRef.current
		if (target) observer.observe(target)

		return () => {
			if (target) observer.unobserve(target)
		}
	}, [options])

	return [targetRef, isIntersecting]
}
