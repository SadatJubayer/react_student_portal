import React, { useState } from "react";

import ListView from "./list-view";
import TableView from "./table-view";

function StudentViews({ students, handleEdit, handleDelete }) {
  const [isListView, setIsListView] = useState(false);

  const generateViews = () => {
    if (isListView) {
      return (
        <ListView
          students={students}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      );
    } else {
      return (
        <TableView
          students={students}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      );
    }
  };

  const handleChange = e => {
    setIsListView(!isListView);
  };

  return (
    <div>
      <h4>Student List</h4>
      <div className="alert alert-primary">
        Choose View:
        <input
          className="m-2"
          type="radio"
          name="view"
          checked={isListView}
          value="list"
          onChange={handleChange}
        />
        List View
        <input
          className="m-2"
          type="radio"
          name="table"
          checked={!isListView}
          value="table"
          onChange={handleChange}
        />
        Table View
      </div>

      {generateViews()}
    </div>
  );
}

export default StudentViews;

// export default class StudentViews extends React.Component {
//   state = {
//     isListView: false,
//     view: "list"
//   };

//   generateViews = () => {
//     const { students, handleEdit, handleDelete } = this.props;
//     if (this.state.isListView) {
//       return (
//         <ListView
//           students={students}
//           handleEdit={handleEdit}
//           handleDelete={handleDelete}
//         />
//       );
//     } else {
//       return (
//         <TableView
//           students={students}
//           handleEdit={handleEdit}
//           handleDelete={handleDelete}
//         />
//       );
//     }
//   };

//   handleChange = e => {
//     this.setState({
//       view: e.target.value,
//       isListView: e.target.value === "list"
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h4>Student List</h4>
//         <div className="alert alert-primary">
//           Choose View:
//           <input
//             className="m-2"
//             type="radio"
//             name="view"
//             checked={this.state.isListView}
//             value="list"
//             onChange={this.handleChange}
//           />
//           List View
//           <input
//             className="m-2"
//             type="radio"
//             name="table"
//             checked={!this.state.isListView}
//             value="table"
//             onChange={this.handleChange}
//           />
//           Table View
//         </div>

//         {this.generateViews()}
//       </div>
//     );
//   }
// }
