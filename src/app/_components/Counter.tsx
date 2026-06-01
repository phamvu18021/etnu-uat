'use client';

import { Button } from '@/components/ui/Button';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
} from '@/store/features/counter/counterSlice';

export default function Counter() {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-zinc-100">
        Redux Toolkit Counter
      </h2>
      <div className="mb-4 text-6xl font-black text-zinc-900 tabular-nums dark:text-zinc-50">
        {value}
      </div>
      <div className="flex gap-3">
        <Button
          onClick={() => dispatch(decrement())}
          className="h-12 w-12 rounded-full border border-zinc-200 bg-zinc-100 text-2xl text-zinc-900 shadow-none hover:bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
        >
          -
        </Button>
        <Button
          onClick={() => dispatch(incrementByAmount(5))}
          className="bg-blue-600 font-medium text-white hover:bg-blue-700"
        >
          Add +5
        </Button>
        <Button
          onClick={() => dispatch(increment())}
          className="h-12 w-12 rounded-full border border-zinc-200 bg-zinc-100 text-2xl text-zinc-900 shadow-none hover:bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
        >
          +
        </Button>
      </div>
    </div>
  );
}
