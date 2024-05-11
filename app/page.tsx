'use client'

import { CalendarDots, Minus, Plus } from '@phosphor-icons/react'
import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [consumed, setConsumed] = useState(0)
  const [amount, setAmount] = useState(0)

  const up = () => {
    let n = 50
    if (amount > 50) {
      n = 25
    }
    setAmount((value) => value + n)
  }

  const down = () => {
    let n = 50
    if (amount > 50) {
      n = 25
    }
    setAmount((value) => value - n)
  }

  const save = () => {
    setConsumed((consumed) => consumed + amount)
    setAmount(0)
  }

  return (
    <main className='flex flex-col justify-between h-full'>
      <Head>
        <title>Easy Water - Control your water goal</title>
      </Head>

      <header className='flex justify-end'>
        <button className='p-4 text-blue-900'>
          <CalendarDots size={32} />
        </button>
      </header>

      <div className='flex pt-[100px] gap-1 items-center justify-center'>
        <p className='text-[65px] font-bold text-blue-900'>{amount}</p>
        <p className='text-[20px]'>ml</p>
      </div>

      <footer className=''>
        <section className='flex flex-col pt-6 pb-16 w-[200px] m-auto gap-4 items-center'>
          <button
            type='button'
            onClick={() => save()}
            disabled={amount === 0}
            className='p-4 bg-neutral-950 text-white rounded-2xl w-full transition active:scale-95 disabled:opacity-60'>
            Save
          </button>
          <div className='flex gap-4 w-full'>
            <button
              onClick={() => down()}
              disabled={amount === 0}
              className='p-5 py-5 rounded-2xl bg-gradient-to-t from-slate-700 to-slate-500 w-full flex justify-center transition active:scale-95 disabled:opacity-60'>
              <Minus size={32} />
            </button>

            <button
              onClick={() => up()}
              className='p-5 py-5 rounded-2xl bg-gradient-to-t from-indigo-700 to-indigo-500 w-full flex justify-center transition active:scale-95'>
              <Plus size={32} />
            </button>
          </div>
        </section>
        <aside className='flex bg-zinc-900 p-4 justify-between'>
          <p className='text-white'>2000 ml</p>
          <button className='text-blue-400'>Define</button>
          <meter id='goal' value={consumed} max='2000' />
        </aside>
      </footer>
    </main>
  )
}
