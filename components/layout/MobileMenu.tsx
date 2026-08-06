'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MOBILE_NAV_LINKS } from '@/constants/navigation'
import { cn } from '@/lib/utils'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const close = () => setIsOpen(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
        aria-expanded={isOpen}
        className="flex flex-col justify-center gap-1.5 p-2 md:hidden"
      >
        <span
          className={cn(
            'block h-0.5 w-6 bg-foreground transition-transform duration-300',
            isOpen && 'translate-y-2 rotate-45',
          )}
        />
        <span
          className={cn(
            'block h-0.5 w-6 bg-foreground transition-opacity duration-300',
            isOpen && 'opacity-0',
          )}
        />
        <span
          className={cn(
            'block h-0.5 w-6 bg-foreground transition-transform duration-300',
            isOpen && '-translate-y-2 -rotate-45',
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute inset-x-0 top-full border-b border-border bg-background px-4 py-6 shadow-lg md:hidden">
          <nav>
            <ul className="flex flex-col gap-2">
              {MOBILE_NAV_LINKS.map((item) =>
                item.cta ? (
                  <li key={item.href} className="pt-2">
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      onClick={close}
                      className="flex w-full items-center justify-center rounded-full bg-primary py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
                    >
                      {item.label}
                    </a>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={close}
                      className="block rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}
