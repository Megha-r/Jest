

import React, { Component } from 'react';

import { DataTable, Card, Page } from '@shopify/polaris';
import { RFC_2822 } from 'moment';
// export default class ShopifyTable extends Component{
//     // constructor(props){
//     //     super(props);
//     // }
//     render(){
//         const rows = [
//             ['Emerald Silk Gown', '$875.00', 124689, 140, '$122,500.00'],
//             ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
//             [
//               'Navy Merino Wool Blazer with khaki chinos and yellow belt',
//               '$445.00',
//               124518,
//               32,
//               '$14,240.00',
//             ],
//             ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
//             [
//               'Navy Merino Wool Blazer with khaki chinos and yellow belt',
//               '$445.00',
//               124518,
//               32,
//               '$14,240.00',
//             ],
//             ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
//             [
//               'Navy Merino Wool Blazer with khaki chinos and yellow belt',
//               '$445.00',
//               124518,
//               32,
//               '$14,240.00',
//             ],
//             ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
//             [
//               'Navy Merino Wool Blazer with khaki chinos and yellow belt',
//               '$445.00',
//               124518,
//               32,
//               '$14,240.00',
//             ],
//             ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
//             [
//               'Navy Merino Wool Blazer with khaki chinos and yellow belt',
//               '$445.00',
//               124518,
//               32,
//               '$14,240.00',
//             ]
//           ];
//         return(
//         <Card>
//             <DataTable
//               columnContentTypes={[
//                 'text',
//                 'numeric',
//                 'numeric',
//                 'numeric',
//                 'numeric',
//               ]}
//               headings={[
//                 'Product',
//                 'Price',
//                 'SKU Number',
//                 'Net quantity',
//                 'Net sales',
//               ]}
//               rows={rows}
//             //   totals={['', '', '', 255, '$155,830.00']}
//             />
//             </Card>
//         )
//     }
// }

export default class ShopifyTable extends Component {
    // state = {
    //   sortedRows: null
    // }
    constructor() {
        super();
    
        this.state = {
            sortedRows: null
        };
        this.handleSort = this.handleSort.bind(this);
 };
 handleSort = rows => (index, direction) => {
      this.setState({ sortedRows: this.sortCurrency(rows, index, direction) });
    };
sortCurrency = (rows, index, direction) => {
        return [...rows].sort((rowA, rowB) => {
          const amountA = parseFloat(rowA[index].substring(1));
          const amountB = parseFloat(rowB[index].substring(1));
return direction === 'descending' ? amountB - amountA : amountA - amountB;
        });
      };
render() {
      const { sortedRows } = this.state;
      const initiallySortedRows = [['Emerald Silk Gown', '$875.00', 124689, 140, '$122,500.00'], 
      ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'], 
      ['Lauve Scarf', '$290.00', 12433, 87, '$29,090.00'],
      ['Cashmer', '$730.00', 124833, 50, '$13,080.00'],
      ['Megha', '$230.00', 924833, 173, '$27,080.00'],
      ['Shraddha', '$70.00', 324833, 120, '$23,080.00'],
      ['Jack', '$130.00', 64833, 12, '$17,023.00'],
      ['Navy Merino Wool Blazer with khaki chinos and yellow belt', '$445.00', 124518, 32, '$14,240.00']];
      const rows = sortedRows ? sortedRows : initiallySortedRows;
return ( 
         <Page title="Sort by Net Sales">
          <Card>
            <DataTable 
            columnContentTypes={['text', 'numeric', 'numeric', 'numeric', 'numeric']} 
            headings={['Product', 'Price', 'SKU Number', 'Net quantity', 'Net sales']} 
            rows={rows} 
            // totals={['', '', '', 255, '$155,830.00']} 
            sortable={[false, true, false, false, true]}
            initialSortColumnIndex={4} 
            onSort={this.handleSort(rows)}
            defaultSortDirection="ascending"
             />
          </Card>
        </Page>
     );
    }
  }