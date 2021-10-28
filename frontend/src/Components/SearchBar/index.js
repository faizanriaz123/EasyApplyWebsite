import React, {useState, useEffect} from 'react';
import NavBar from '../NavBar';
import './SearchBar.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';

import Box from "@mui/material/Box";

import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import api from "../../api"; 

function SearchBar({placeholder, data}){
    const [filteredData, setFilteredData] = useState([]); 

    const [unfilteredData, setUnfilteredData] = useState([]); // CREATING A CONSTANT UNFILTERED DATA
    const [wordEntered, setWordEntered] = useState(""); 
    
    const beforeAll = async () => {
        const dict2 = await api.get("/jobs/get"); //GET CALL TO GET ALL JOBS
        const myData2 = dict2['data']['jobs']; //SETTING VARIABLE TO MYDATA2
        setUnfilteredData(myData2); 

        //console.log(dict2);
       // console.log(myData2);
    };

    useEffect(() => {  
        {beforeAll()}

       },[]);

    const handleFilter = async(event) => {
        const searchWord = event.target.value 
        setWordEntered(searchWord);
        
        const dict = await api.get("/jobs/search/"+searchWord);
        const myData = dict['data']['jobs']; 
        setFilteredData(myData); 

        const newFilter = myData.filter((value) => {
            return value.jobName.toLowerCase().includes(searchWord.toLowerCase()) || value.companyName.toLowerCase().includes(searchWord.toLowerCase()); 
        });

        if (searchWord === "") {
            setFilteredData([]); 
            //setUnfilteredData(myData2); //IF SEARCH WORD IS EMPTY SET UNFILTERED DATA TO MYDATA2
        }
        else {
            setFilteredData(newFilter); 
            //setUnfilteredData(myData2);
        }

        //console.log(filteredData); 
    }; 

    const clearInput = () => {
        //setUnfilteredData(myData2);
        setFilteredData([]); 
        setWordEntered(""); 
    }

    const columns = [
        { id: 'companyName', label: 'COMPANY', minWidth: 170 },
        { id: 'jobName', label: 'POSTION', minWidth: 100 },
        { id: 'introduction', label: 'DESCRIPTION', minWidth: 170},
        { id: 'location', label: 'LOCATION', minWidth: 170},
      ];
    

    const rows = filteredData.length !== 0 ? filteredData : unfilteredData
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden',backgroundColor: '#2b2b2b', height: "100vh" }}>
        <NavBar/>
        <div className="search" onBeforeInput={beforeAll}>
            <div className="searchInputs">
                <div className="searchIcon">
                    {filteredData.length === 0 ? (
                    <SearchIcon /> 
                    ) : (
                    <ClearIcon id="clearBtn" onClick={clearInput}/>) }
                </div>
                <input type="text" placeholder="Search for Jobs"  value={wordEntered} onChange={handleFilter} />
            </div>
            {filteredData.length !== 0 && (
            <div className="dataResult">
                {filteredData.slice(0, 15).map((value, key) => {
                    return <a className="dataItem"> 
                    <p> {value.jobName} at {value.companyName} </p>
                    </a>
                })}
                </div> 
            )}
            </div>
                
        <TableContainer sx={{ maxHeight: 440, backgroundColor: '#2b2b2b' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, color: "#00FECF", borderColor: "#1e1e1e", backgroundColor: '#1e1e1e' }}
                  >
                  {column.label}
                </TableCell>
              ))}
            </TableRow >
          </TableHead>
          <TableBody >
            {rows.map((row) => {
                console.log(row);
                return (
                  <TableRow role="checkbox" tabIndex={-1} key={row.code}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#1e1e1e"
                    }
                  }}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} style={{ color: "#00FECF", borderColor: "#1e1e1e"}}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    <Box sx={{ disply:'flex', height: '100%', backgroundColor: '#2b2b2b'  }}></Box>
    </Paper>
    )

}

export default SearchBar