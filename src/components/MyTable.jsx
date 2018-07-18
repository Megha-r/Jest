import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import React from 'react';
import { Wrapper } from './StyleComponent/HeaderOfTable';
import { Button } from './StyleComponent/Button';
import { Background } from './StyleComponent/Background';
import Employee from '../Data/TableData';

let order = 'desc';
export default class Mytable extends React.Component {
  constructor() {
    super();
    this.handleBtnClickID = this.handleBtnClickID.bind(this);
    this.handleBtnClickName = this.handleBtnClickName.bind(this);
    this.defineRef = this.defineRef.bind(this);
  }
  handleBtnClickID () {
      console.log("Button sorting id tapped ********");
    if (order === 'desc') {
      this.table.handleSort('asc', 'id');
      order = 'asc';
    } else {
      this.table.handleSort('desc', 'id');
      order = 'desc';
    }
  }
  handleBtnClickName (){
    console.log("Button sorting name tapped ********");
  if (order === 'desc') {
    this.table.handleSort('asc', 'first_name');
    order = 'asc';
  } else {
    this.table.handleSort('desc', 'first_name');
    order = 'desc';
  }
}

defineRef(table) {
  this.table = table
}
  render() {
    return (
      <Background style={{ marginTop: "10px"}}  id='background'>
      <Wrapper id='heading'> Employee Data Table</Wrapper>
     <div style={{ marginTop: "10px", marginLeft:"10px"}}>    
     <Button onClick={ this.handleBtnClickID } id="btnID">Sort By ID</Button>
     <Button onClick={ this.handleBtnClickName } id="btnName" >Sort By Name</Button>
     </div>
     <div style={{ width:"95%", marginLeft:"30px", textAlign:"center"}}>
     <BootstrapTable ref={this.defineRef} data={ Employee }  pagination id="table">
         <TableHeaderColumn dataField='id'isKey={ true } dataSort={ true } id="column">ID</TableHeaderColumn>
         <TableHeaderColumn dataField='first_name' id="column" filter={ { type: 'TextFilter', delay: 1000 } } dataSort={ true } >Name</TableHeaderColumn>
         <TableHeaderColumn dataField='email' id="column">Email</TableHeaderColumn>
         <TableHeaderColumn dataField='country' id="column">Country</TableHeaderColumn>
         <TableHeaderColumn dataField='ip_address' id="column">IP Address</TableHeaderColumn>
       </BootstrapTable>
       </div>
    
       </Background>
     );
  }
}