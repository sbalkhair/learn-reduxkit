"use client";

import { decrement, increment, incrementByAmount, reset } from "@/app/redux/feature/counter/counterSlice";
import { RootState } from "@/app/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const Counter = () => {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col items-center justify-center h-screen p-5'>
      <h1 className='text-2xl md:text-4xl font-bold text-center text-white/80  bg-white/10 p-3 rounded border border-white/10'>Welcome to Redux Toolkit with Next.js!</h1>

      <Card className='mt-10  min-w-sm'>
        <CardContent className='text-center'>
          <div className='flex items-center justify-center'>
            <div className='text-3xl font-bold bg-slate-100  size-20 flex items-center justify-center rounded-full border-4  '>{counter}</div>
          </div>
          <div className='grid grid-cols-2 gap-4 mt-10'>
            <Button onClick={() => dispatch(decrement())}>-</Button>
            <Button onClick={() => dispatch(increment())}>+</Button>
            <Button onClick={() => dispatch(reset())}>Reset</Button>
            <Button onClick={() => dispatch(incrementByAmount(5))}>+5</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Counter;
