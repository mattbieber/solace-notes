import React from 'react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs'

export default function Home() {
  
  const { userId } = auth()
  if (userId) {
    redirect('/dashboard')
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <h1 className="text-6xl mt-40 font-black tracking-tight">
        ✨ Solace Notes ✨
      </h1>
      <p className="mt-10 text-l"> View the repo</p>
      <Link
        href="/sign-in"
        className="flex flex-row items-center justify-center space-x-2 w-full px-4 py-4 mb-4 font-bold capitalize duration-100 transform rounded-sm shadow cursor-pointer hover:ring-4 hover:ring-opacity-50 hover:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            opacity="0.12"
            d="M6.68014 20.7235C6.98548 20.6402 7.13815 20.5986 7.28052 20.5347C7.40692 20.4779 7.52709 20.4082 7.63908 20.3266C7.76521 20.2347 7.87711 20.1228 8.1009 19.899L18.4343 9.56561C18.6323 9.3676 18.7313 9.2686 18.7684 9.15443C18.8011 9.05401 18.8011 8.94584 18.7684 8.84542C18.7313 8.73125 18.6323 8.63225 18.4343 8.43424L15.5657 5.56561C15.3677 5.3676 15.2687 5.2686 15.1545 5.2315C15.0541 5.19887 14.9459 5.19887 14.8455 5.2315C14.7313 5.2686 14.6323 5.3676 14.4343 5.56561L4.1009 15.899C3.87711 16.1228 3.76521 16.2347 3.67332 16.3608C3.59172 16.4728 3.52199 16.593 3.46523 16.7194C3.40131 16.8618 3.35968 17.0144 3.2764 17.3198L2 21.9999L6.68014 20.7235Z"
            fill="currentColor"
          ></path>
          <path
            d="M18 2L22 6M2 22L3.2764 17.3199C3.35968 17.0145 3.40131 16.8619 3.46523 16.7195C3.52199 16.5931 3.59172 16.4729 3.67332 16.3609C3.76521 16.2348 3.87711 16.1229 4.1009 15.8991L14.4343 5.56569C14.6323 5.36768 14.7313 5.26867 14.8455 5.23158C14.9459 5.19895 15.0541 5.19895 15.1545 5.23158C15.2687 5.26867 15.3677 5.36768 15.5657 5.56569L18.4343 8.43431C18.6323 8.63232 18.7313 8.73133 18.7684 8.84549C18.8011 8.94591 18.8011 9.05409 18.7684 9.15451C18.7313 9.26867 18.6323 9.36768 18.4343 9.56569L8.1009 19.8991C7.87711 20.1229 7.76521 20.2348 7.63908 20.3267C7.52709 20.4083 7.40692 20.478 7.28052 20.5348C7.13815 20.5987 6.98548 20.6403 6.68014 20.7236L2 22Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <span className="ml-2">Get Started</span>
      </Link>
    </main>
  )
}
