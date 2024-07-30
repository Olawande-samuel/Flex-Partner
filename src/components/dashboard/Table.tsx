import DataTable from "react-data-table-component";

const customStyles = {
	headRow: {
		style: {
			backgroundColor: "rgba(248, 249, 253, 1)",
			color: "rgba(100, 116, 139, 1)",
			fontWeight: "semibold",
			fontSize: "16px",
			borderRadius: "8px",
			borderBottom: "none",
		},
	},
	rows: {
		style: {
			borderBottomColor: "rgba(241, 245, 249, 0.9) !important",
			paddingBlock: "12px",
		},
	},
};
interface Props {
	columns: any[];
	data: any[];
	paginationPerPage?: number;
	isLoading?: boolean;
}

const Table = ({ columns, data, paginationPerPage, isLoading }: Props) => {
	return (
		<DataTable
			columns={columns}
			data={data}
			customStyles={customStyles}
			pagination
			paginationPerPage={paginationPerPage}
			progressPending={isLoading}
		/>
	);
};
export default Table;
