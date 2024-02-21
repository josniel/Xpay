"use client"

import React from "react"
import Link from 'next/link'
import cn from '@/utils/cn'

interface ButtonProps {
  variant?: 'primary'
  className?: string
  onClick?: () => void
  children: React.ReactNode
  disabled?: boolean
  href?: string
}

const Button = ({ children, onClick, href, disabled, className, variant = 'primary', ...props }: ButtonProps) => {
  const variantClasses = {
    primary: 'btn bg-navy-blue-900 w-[120px] md:w-[138px] h-11 hover:bg-navy-gray-600 text-xs md:text-sm text-white gap-[5px] font-medium !rounded-[100px]'
  }[variant]

  const disabledClasses = 'opacity-40 cursor-not-allowed'

  const mergeClassName = cn('button', variantClasses, { [disabledClasses]: disabled }, className)

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={mergeClassName} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={mergeClassName} {...props}>
      {children}
    </button>
  )
}

export default Button



