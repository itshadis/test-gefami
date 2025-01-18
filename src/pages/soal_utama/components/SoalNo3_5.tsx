import { Button, Table } from "antd"
import { useEffect, useState } from "react"
import SoalNo6 from "./SoalNo6";

interface DataType {
  key: number;
  body: string;
  id: number;
  title: string;
  userId: number;
}

export default function SoalNo3_6() {
  const [datas, setDatas] = useState<DataType[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    async function getData() {
      setLoading(true)
      try {
        const response = await fetch('http://jsonplaceholder.typicode.com/posts')
        if(!response.ok) {
          throw new Error(`Response status: ${response.status}`)
        }
    
        const result = await response.json()
        const dataWithKeys = result.slice(0, 9).map((item: DataType) => ({
          ...item,
          key: item.id, // Use 'id' as the key and convert it to a string
        }));

        setDatas(dataWithKeys);
      } catch (error) {
        if(error instanceof Error) {
          throw new Error(error.message)
        }
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [])

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Body',
      dataIndex: 'body',
      key: 'body'
    },
    {
      title: 'Action',
      key: 'action',
      render: (record: DataType) => (
        <Button onClick={() => handleDelete(record)}>Delete</Button>
      )
    }
  ]

  function handleDelete(record: DataType): void {
    setDatas((prev) => prev.filter((item) => item.key !== record.key));
  }

  return (
    <div>
      <SoalNo6 data={datas} />

      <Table<DataType> columns={columns} dataSource={datas} pagination={false} loading={loading} />
    </div>
  )
}
