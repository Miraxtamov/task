import styled from "styled-components";

export const Container = styled.div`
	max-width: 1440px;
	margin: 0 auto;
`;

export const TableContainer = styled.div`
	width: 99%;
	box-shadow: 0px 0px 11px 1px rgba(34, 60, 80, 0.2);
	margin: 0 auto;
`;

export const TableContainerInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
`;

export const TableContainerInfoLeft = styled.div``;
export const TableContainerInfoRight = styled.div``;

export const TableContainerInfoRightExp = styled.button`
	color: blue;
	outline: none;
	padding: 8px 16px;
	cursor: pointer;
	margin-left: 28px;
	background-color: #ffffff;
	border: 1px solid rgba(34, 60, 80, 0.1);
`;

export const TableContainerInfoRightFilter = styled(
	TableContainerInfoRightExp
)``;

export const TableContainerInfoRightAdd = styled(TableContainerInfoRightExp)`
	background-color: blue;
	color: #ffffff;
`;

export const TableContainerTitle = styled.h2``;

export const Table = styled.table`
	border-collapse: collapse;
	width: 100%;
	margin: 0 auto;
	border: 1px solid #ddd;
	padding: 8px;
	overflow-x: scroll;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const TR = styled.tr`
	border: 1px solid #ddd;

	:nth-child(even) {
		background-color: #000;
	}

	&:hover {
		background-color: #ddd;
	}
`;

export const TH = styled.th`
	padding-top: 12px;
	padding-bottom: 12px;
	text-align: center;
	background-color: #ddd;
`;

export const TD = styled.td`
	text-align: center;

	padding: 8px;
`;

export const Select = styled.select`
	outline: none;
	border: 1px solid black;
	padding: 3px;
	color: ${(props) => props.color};
	background-color: ${(props) => props.backgroundColor};
	border-color: ${(props) => props.color};
`;

export const Option = styled.option`
	background-color: ${({ backgroundColor }) => backgroundColor};
	color: ${({ color }) => color};
`;

export const EditButton = styled.button`
	outline: none;
	background-color: blue;
	color: #ffffff;
	padding: 3px 8px;
	border: 1px solid blue;
	cursor: pointer;
`;

export const SaveButton = styled(EditButton)`
	background-color: green;
`;

export const TRinput = styled.input`
	outline: none;
	width: 90px;
`;
