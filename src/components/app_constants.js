import { forwardRef } from "react";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Button from "@material-ui/core/Button";
export const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

export const toTimestamp = (strDate) => {
  var datum = Date.parse(strDate);
  return datum / 1000;
};

export const stringToDateTime = (datestring) => {
  let datetime = new Date(Date.parse(datestring)).toLocaleString();
  return datetime;
};

export const columns = [
  {
    title: "Image",
    field: "",
    sorting: false,
    render: (rowData) => (
      <img
        alt="Not Available"
        src={rowData.urlToImage}
        className={"imgThumbnail"}
      />
    ),
  },
  {
    title: "Source",
    field: "description",
    sorting: false,
    render: (rowData) => (
      <p>{rowData.source.name ? rowData.source.name : "-"}</p>
    ),
  },
  {
    title: "Author",
    field: "",
    sorting: false,
    render: (rowData) => <p>{rowData.author}</p>,
  },
  {
    title: "Title",
    field: "title",
    sorting: false,
  },
  {
    title: "Date",
    field: "",
    customSort: (a, b) => {
      console.log(toTimestamp(a.publishedAt));
      return toTimestamp(a.publishedAt) < toTimestamp(b.publishedAt) ? 1 : -1;
    },
    render: (rowData) => <p>{stringToDateTime(rowData.publishedAt)}</p>,
  },
  {
    title: "URL",
    field: "",
    sorting: false,
    render: (rowData) => (
      <Button
        variant="contained"
        onClick={() => {
          window.open(rowData.url, "_blank");
        }}
      >
        See News
      </Button>
    ),
  },
];
