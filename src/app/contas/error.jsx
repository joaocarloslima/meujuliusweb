'use client'
 
import Button from '@/components/Button'
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className='flex justify-center items-center p-10 flex-col'>
      <h2>Opa! Um erro aconteceu</h2>
      <p>{error.message}</p>
      <div className='flex gap-3'>
        <Button variant='secondary' href="/">
            voltar para home
        </Button>
        <Button element='button' onClick={ () => reset() }>
            tentar novamente
        </Button>
      </div>
    </div>
  )
}