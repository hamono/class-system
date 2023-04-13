import FlexContainer from '@/components/FlexContainer';
import { StudentModel } from '@/features/userSlice';
import { UserType } from '@/type';
import { Input, Button, Table, Popconfirm } from 'antd'
import type { ColumnsType } from 'antd/es/table';
import { useState } from 'react';


export default function UserTable( {data, onDelete} : { data:StudentModel[]; onDelete?: ( number: string ) => void  } ) {

  const columns: ColumnsType<StudentModel>  = [
    {
      key: 'username',
      title: '姓名',
      dataIndex: 'name'
    },
    {
      key: 'number',
      title: '学号',
      dataIndex: 'number',
      sorter: (a, b) => parseInt(a.number) - parseInt(b.number)
    },
    {
      key: 'gender',
      title: '性别',
      dataIndex: 'gender',
    },
    {
      key: 'college',
      title: '学院',
      dataIndex: 'college'
    },
    {
      key: 'classes',
      title: '班级',
      dataIndex: 'classes'
    },
    {
      key: 'action',
      title: '操作',
      width: 200,
      render: (__, record) => {
        return <FlexContainer style={{padding: '0 20px'}} gap={20}>
          <Popconfirm style={{width: 200}} placement="top" title={"确认删除吗?"} onConfirm={() => onDelete && onDelete(record.number)} okText="Yes" cancelText="No">
            <Button size='small' type="dashed" >删除</Button>
          </Popconfirm>
        </FlexContainer>
      }
    }
  ]



  return <Table columns={columns} pagination={{defaultPageSize: 8}} dataSource={data} style={{width: "100%", maxHeight: "100%"}} />
}