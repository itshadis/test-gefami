import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import SoalNo1_2 from './components/SoalNo1_2';
import SoalNo3_6 from './components/SoalNo3_5';
import SoalNo7 from './components/SoalNo7';
import SoalNo8 from './components/SoalNo8';
import SoalNo9 from './components/SoalNo9';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Soal No 1 - 2',
    children: <SoalNo1_2 /> ,
  },
  {
    key: '2',
    label: 'Soal No 3 - 6',
    children: <SoalNo3_6 />,
  },
  {
    key: '3',
    label: 'Soal No 7',
    children: <SoalNo7 />,
  },
  {
    key: '4',
    label: 'Soal No 8',
    children: <SoalNo8 />,
  },
  {
    key: '5',
    label: 'Soal No 9',
    children: <SoalNo9 />,
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