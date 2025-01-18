import React, { lazy, Suspense } from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const SoalNo1_2 = lazy(() => import('./components/SoalNo1_2'));
const SoalNo3_6 = lazy(() => import('./components/SoalNo3_5'));
const SoalNo7 = lazy(() => import('./components/SoalNo7'));
const SoalNo8 = lazy(() => import('./components/SoalNo8'));
const SoalNo9 = lazy(() => import('./components/SoalNo9'));
const SoalNo10_11 = lazy(() => import('./components/SoalNo10_11'));

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Soal No 1 - 2',
    children: (
      <Suspense fallback={<div>Loading...</div>}>
        <SoalNo1_2 />
      </Suspense>
    )
  },
  {
    key: '2',
    label: 'Soal No 3 - 6',
    children: (
      <Suspense fallback={<div>Loading...</div>}>
        <SoalNo3_6 />
      </Suspense>
    )
  },
  {
    key: '3',
    label: 'Soal No 7',
    children: (
      <Suspense fallback={<div>Loading...</div>}>
        <SoalNo7 />
      </Suspense>
    )
  },
  {
    key: '4',
    label: 'Soal No 8',
    children: (
      <Suspense fallback={<div>Loading...</div>}>
        <SoalNo8 />
      </Suspense>
    )
  },
  {
    key: '5',
    label: 'Soal No 9',
    children: (
      <Suspense fallback={<div>Loading...</div>}>
        <SoalNo9 />
      </Suspense>
    )
  },
  {
    key: '6',
    label: 'Soal No 10 - 11',
    children: (
      <Suspense fallback={<div>Loading...</div>}>
        <SoalNo10_11 />
      </Suspense>
    )
  },
];

const SoalUtama: React.FC = () => {
  return (
    <div className='w-[80%] mx-auto'>
      <h2 className="text-2xl font-bold my-2">Soal Utama</h2>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  )
}

export default SoalUtama;