import React, { useState } from 'react';

import { Button, Space, Table, Tooltip } from "antd";
import { Popconfirm } from "antd";
import { deleteDataById } from '../../services';

const ProductTable = ({product,setProduct}) => {
   
    
    
    const handleDelete=(id)=>{
    deleteDataById(id).then((res)=>{
        if (res.status==200) {
            const filtered=[...product].filter((q)=>{q.id!==id})
            setProduct(filtered);
        }
    })
    }
   
    const columns = [
        {
            title: "Id",
            dataIndex: "id",
            sorter: (a, b) => a.id.localeCompare(b.id),
            sortDirections: ["ascend", "descend"],
        },
        {
            title: "Image",
            dataIndex: "image",
            render: (image) => <img src={image} alt={image} height={50} width={50} />,
            sorter: (a, b) => a.image.localeCompare(b.image),
            sortDirections: ["ascend", "descend"],
        },
        {
            title: "Name",
            dataIndex: "title",
            sorter: (a, b) => a.title.localeCompare(b.title),
            sortDirections: ["ascend", "descend"],
            render: (element) => (
                <Tooltip title={element}>
                    <span>{element.slice(0, 30)}...</span>
                </Tooltip>
            )
        },
        {
            title: "Description",
            dataIndex: "description",
            render: (element) => (
                <Tooltip title={element}>
                    <span>{element.slice(0, 50)}...</span>
                </Tooltip>
            )
        },
        {
            title: "Price",
            dataIndex: "price",
            sorter: (a, b) => a.price - b.price,
            sortDirections: ["ascend", "descend"],
        },
        {
            title: "Delete",
            dataIndex: "DELETE",
            render: (element, data, idx) => (
                <Popconfirm
                    title="Delete the task"
                    description="Are you sure to delete this task?"
                    okText="Yes"
                    cancelText="No"
                
                >
                    <Button danger>Delete</Button>
                </Popconfirm>
            ),
        },
        {
            title: "Edit",
            render: () => <Button type="primary">Edit</Button>,
        },
    ];

    return (
        <>
            <Space
                style={{
                    marginBottom: 16,
                }}
            >
            </Space>
            <Table rowKey="id" columns={columns} dataSource={product} />
        </>
    );
};
export default ProductTable;