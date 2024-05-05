import React, { useState } from 'react'
import { Button, Table,Modal, Input } from 'antd';
import { useEffect } from 'react';
import { getAll, deleteOne, getOne, patch } from '../../services';
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Task from '../../classes/Task';

  


const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [newTasks, setNewTasks] = useState({
        title: "",
        description: "",
        topic: "",

    });
    const [taskId, setTaskId] = useState(null);
    const [open, setOpen] = useState(false);
    const notify = () =>
        toast.success("New Tasks Added!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setOpen(false);
    };
    const handleCancel = () => {
        setOpen(false);
    };

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            showSorterTooltip: {
                target: 'full-header',
            },

            sorter: (a, b) => a.title.localeCompare(b.title),
            sortDirections: ['descend'],
        },
        {
            title: 'Description',
            dataIndex: 'description',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.description.localeCompare(b.description),
        },
        {
            title: 'Topic',
            dataIndex: 'topic',
            sorter: (a, b) => a.topic.localeCompare(b.topic),
        },
        {
            title: "Delete",
            render: (record) => {
                return (
                    <Button
                        onClick={() => {
                            Swal.fire({
                                title: "Are you sure?",
                                text: "You won't be able to revert this!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Yes, delete it!",
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    setTasks((tasks) => {
                                        return tasks.filter((x) => x.id != record.id);
                                    });
                                    deleteOne("/tasks", record.id)

                                    Swal.fire({
                                        title: "Deleted!",
                                        text: "Your file has been deleted.",
                                        icon: "success",
                                    });
                                }
                            });
                        }}
                        type="primary"
                        danger
                    >
                        <DeleteOutlined />
                    </Button>
                );
            },
        },
        {
            title: "Add NewTask",
            render: (record) => {
                return (
                    <Button
                        onClick={() => {
                            setTaskId(record.id);
                            showModal();
                        }}
                    >
                        <PlusOutlined />
                    </Button>
                );
            },
        },
      
    ];
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    useEffect(() => {
        getAll("/tasks").then((res) => {
            setTasks(res.data)
        })
    }, [])
    return (
        <>
            <Table
                columns={columns}
                dataSource={tasks}
                onChange={onChange}
                showSorterTooltip={{
                    target: 'sorter-icon',
                }}
            />
            <Modal
                title="Add Tasks Modal"
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                okButtonProps={{
                    disabled: true,
                }}
                cancelButtonProps={{
                    disabled: true,
                }}
            >
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const newTask = new Task(newTasks.title, newTasks.description, newTasks.topic)
                     
                        getOne("/tasks", taskId).then((res) => {

                            patch("/tasks", taskId, {
                                tasks:[...res.data.tasks, newTask],
                            })
                                .then(() => {
                                    notify();
                                    handleOk();
                                    setNewTasks({ title: '', description: '', topic: '' })
                                });
                        });
                    }}
                >
                    <Input
                        value={newTasks.title}
                        onChange={(e) => setNewTasks({ ...newTasks, title: e.target.value })}
                        style={{ marginBottom: "10px" }}
                        type="text"
                        placeholder="New Task title"
                    />
                    <Input
                        value={newTasks.description}
                        onChange={(e) => setNewTasks({ ...newTasks, description: e.target.value })}
                        style={{ marginBottom: "10px" }}
                        type="text"
                        min={0}
                        placeholder="New Task description"
                    />
                    <Input
                        value={newTasks.topic}
                        onChange={(e) => setNewTasks({ ...newTasks, topic: e.target.value })}
                        style={{ marginBottom: "10px" }}
                        type="text"
                        min={0}
                        placeholder="New Task topic"
                    />

                    <Button type="primary" htmlType="submit">
                        add
                    </Button>
                </form>
            </Modal>
            <ToastContainer />

        </>

    )
}

export default Tasks