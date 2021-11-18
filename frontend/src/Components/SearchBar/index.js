import React, {useState, useEffect} from 'react';
import { Table, Button, Space, Form, Input} from "antd"; 
import { useHistory } from "react-router-dom";
import NavBar from "../NavBar"; 
import './SearchBar.css';
import Paper from '@mui/material/Paper';
import api from "../../api"; 

const DataTable = () => {
    const [gridData, setGridData] = useState([]); 
    const [loading, setLoading] = useState(false); 
    const [searchText, setSearchText] = useState(""); 
    const [form] = Form.useForm(); 
    const history = useHistory();
    const [applyRow, setApply] = useState(false); 
    const navigateTo = (jobId) => {
        console.log(jobId)
        history.push(("/apply/"+jobId))}; 
    let[filteredData] = useState(); 

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async() => {
        setLoading(true); 
        const response = await api.get("/jobs/get");
        const myData2 = response['data']['jobs'];
        setGridData(myData2); 
        setLoading(false); 
    }

    const columns = [{ 
        title: "ID",
        dataIndex: "jobID",
    }, 
    {
        title: "Job Name", 
        dataIndex: "jobName", 
        align: "center",
        editable: true,
    }, 

    {
        title: "Company Name", 
        dataIndex: "companyName", 
        align: "center",
        editable: true,

    }, 
    {
        title: "Location", 
        dataIndex: "location", 
        align: "center",
    },
    {
        title: "Apply", 
        //dataIndex: "location", 
        align: "center",
        render: (_, record) => {
            console.log(record)
            return gridData.length >= 1 ? (
                <Space> 
                    <Button type="primary" onClick={() => {navigateTo(record.jobID)}
            
                }> Apply </Button>
                </Space>
        ): null;
    },
},    
]; 

const handleSearch = (e) => { 
    setSearchText(e.target.value); 
    if (e.target.value === ""){
        loadData(); 
    }
};
const globalSearch = () => {
    filteredData = gridData.filter((value) => {
        return (
            value.jobName.toLowerCase().includes(searchText.toLowerCase()) || 
            value.companyName.toLowerCase().includes(searchText.toLowerCase()) || 
            value.location.toLowerCase().includes(searchText.toLowerCase()) || 
            value.introduction.toLowerCase().includes(searchText.toLowerCase()) 
        );
    });
    setGridData(filteredData); 
}; 


const clearAll = () =>{
    setSearchText("");
}
 
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden',backgroundColor: '#2b2b2b', height: "100vh" }}>
        <NavBar/>
            <Space style={{marginBottom: 16}}>
            <Input 
                placeholder="Search for Jobs"
                onChange={handleSearch}
                type="text"
                allowClear
                value= {searchText}
            />
                <Button type="primary" onClick={globalSearch}>Search</Button>
                <Button onClick={clearAll}>Clear All</Button>            
            </Space>
            <Form form={form}>
                <Table 
                rowClassName="table-rows"
                columns={columns}
                expandable = {{
                    expandedRowRender: (record) => (
                        <p style={{margin: 0}}>{record.introduction}</p>
                    ),
                    rowExpandable: (record) => record.introduction !== "Not Expandable",

                }}
                dataSource={filteredData && filteredData.length ? filteredData : gridData}
                bordered
                loading={loading}
                pagination
                />
            </Form>
        </Paper>

    ); 
}; 
 
export default DataTable
