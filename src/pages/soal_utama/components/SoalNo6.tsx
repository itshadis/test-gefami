import Button from '../../../components/Button'

type DataType = {
  key: number;
  body: string;
  id: number;
  title: string;
  userId: number;
}

interface DataProps {
  data: DataType[]
}

export default function SoalNo6({ data }: DataProps) {
  function handleClick(): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const newData = data.map(({ key, ...rest }: DataType ) => rest)
    console.log(newData);
    
  }

  return (
    <Button onClick={handleClick} disabled={data.length === 0} text='Soal No 6'></Button>
  )
}
