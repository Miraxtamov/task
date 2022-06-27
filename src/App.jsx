import React, { useState } from "react";
import SelectDiv from "./Select";
import statusList from "./status";
import {
	Container,
	Table,
	TableContainer,
	TableContainerInfo,
	TableContainerInfoLeft,
	TableContainerInfoRight,
	TableContainerInfoRightAdd,
	TableContainerInfoRightExp,
	TableContainerInfoRightFilter,
	TableContainerTitle,
	Tbody,
	TH,
	Thead,
	TR,
	TD,
	EditButton,
	TRinput,
	SaveButton,
	DeleteBtn,
} from "./style";

const App = ({ moving, cancelled, dropped, late }) => {
	const [select, setSelect] = useState(null);
	const [title, setTitle] = useState("");

	const [data, setData] = useState([
		{
			id: 1,
			trailer: "1435574PLA",
			type: "TOWAWAY",
			broker: "TQL",
			reference: "#002RN7323696",
			origin: "MDT2",
			pickUp: "01/11/2021",
			destination: "LAX9",
			plannedDate: "01/11/2021",
			rate: "$250",
			droppedDate: "02/11/2021",
			actions: "Edit",
		},
		{
			id: 2,
			trailer: "1435574PLA",
			type: "TOWAWAY",
			broker: "TQL",
			reference: "#002RN7323696",
			origin: "MDT2",
			pickUp: "02/11/2021",
			destination: "LAX9",
			plannedDate: "01/11/2021",
			rate: "$250",
			droppedDate: "02/11/2021",
			actions: "Edit",
		},
		{
			id: 3,
			trailer: "1435574PLA",
			type: "TOWAWAY",
			broker: "TQL",
			reference: "#002RN7323696",
			origin: "Mira Lama, CA",
			pickUp: "01/11/2021",
			destination: "LAX9",
			plannedDate: "02/11/2021",
			rate: "$250",
			droppedDate: "02/11/2021",
			actions: "Edit",
		},
		{
			id: 4,
			trailer: "1435574PLA",
			type: "TOWAWAY",
			broker: "TQL",
			reference: "#002RN7323696",
			origin: "SCK9",
			pickUp: "01/11/2021",
			destination: "Mira Lama, CA ",
			plannedDate: "01/11/2021",
			rate: "$250",
			droppedDate: "02/11/2021",
			actions: "Edit",
		},
		{
			id: 5,
			trailer: "1435574PLA",
			type: "TOWAWAY",
			broker: "TQL",
			reference: "#002RN7323696",
			origin: "Mira Lama, CA",
			pickUp: "01/11/2021",
			destination: "LAX9",
			plannedDate: "01/11/2021",
			rate: "$250",
			droppedDate: "02/11/2021",
			actions: "Edit",
		},
		{
			id: 6,
			trailer: "1435574PLA",
			type: "TOWAWAY",
			broker: "TQL",
			reference: "#002RN7323696",
			origin: "SCK9",
			pickUp: "02/11/2021",
			destination: "LAX9",
			plannedDate: "01/11/2021",
			rate: "$250",
			droppedDate: "02/11/2021",
			actions: "Edit",
		},
		{
			id: 7,
			trailer: "1435574PLA",
			type: "TOWAWAY",
			broker: "TQL",
			reference: "#002RN7323696",
			origin: "MDT2",
			pickUp: "01/11/2021",
			destination: "LAX9",
			plannedDate: "02/11/2021",
			rate: "$250",
			droppedDate: "02/11/2021",
			actions: "Edit",
		},
		{
			id: 8,
			trailer: "1435574PLA",
			type: "TOWAWAY",
			broker: "TQL",
			reference: "#002RN7323696",
			origin: "Mira Lama, CA",
			pickUp: "01/11/2021",
			destination: "Business Park",
			plannedDate: "01/11/2021",
			rate: "$250",
			droppedDate: "02/11/2021",
			actions: "Edit",
		},
		{
			id: 9,
			trailer: "1435574PLA",
			type: "TOWAWAY",
			broker: "TQL",
			reference: "#002RN7323696",
			origin: "MDT2",
			pickUp: "01/11/2021",
			destination: "Mira Lama, CA ",
			plannedDate: "01/11/2021",
			rate: "$250",
			droppedDate: "02/11/2021",
			actions: "Edit",
		},
		{
			id: 10,
			trailer: "1435574PLA",
			type: "TOWAWAY",
			broker: "TQL",
			reference: "#002RN7323696",
			origin: "SCK9",
			pickUp: "01/11/2021",
			destination: "LAX9",
			plannedDate: "01/11/2021",
			rate: "$250",
			droppedDate: "02/11/2021",
			actions: "Edit",
		},
		{
			id: 11,
			trailer: "1435574PLA",
			type: "TOWAWAY",
			broker: "TQL",
			reference: "#002RN7323696",
			origin: "MDT2",
			pickUp: "01/11/2021",
			destination: "LAX9",
			plannedDate: "03/11/2021",
			rate: "$250",
			droppedDate: "02/11/2021",
			actions: "Edit",
		},
		{
			id: 12,
			trailer: "1435574PLA",
			type: "TOWAWAY",
			broker: "TQL",
			reference: "#002RN7323696",
			origin: "Mira Lama, CA",
			pickUp: "01/11/2021",
			destination: "LAX9",
			plannedDate: "01/11/2021",
			rate: "$250",
			droppedDate: "02/11/2021",
			actions: "Edit",
		},
		{
			id: 13,
			trailer: "1435574PLA",
			type: "TOWAWAY",
			broker: "TQL",
			reference: "#002RN7323696",
			origin: "MDT2",
			pickUp: "00/11/2021",
			destination: "Mira Lama, CA ",
			plannedDate: "01/11/2021",
			rate: "$250",
			droppedDate: "02/11/2021",
			actions: "Edit",
		},
		{
			id: 14,
			trailer: "1435574PLA",
			type: "TOWAWAY",
			broker: "TQL",
			reference: "#002RN7323696",
			origin: "SCK9",
			pickUp: "01/11/2021",
			destination: "LAX9",
			plannedDate: "02/11/2021",
			rate: "$250",
			droppedDate: "02/11/2021",
			actions: "Edit",
		},
		{
			id: 15,
			trailer: "1435574PLA",
			type: "TOWAWAY",
			broker: "TQL",
			reference: "#002RN7323696",
			origin: "Mira Lama, CA",
			pickUp: "01/11/2021",
			destination: "LAX9",
			plannedDate: "01/11/2021",
			rate: "$250",
			droppedDate: "02/11/2021",
			actions: "Edit",
		},
		{
			id: 16,
			trailer: "1435574PLA",
			type: "TOWAWAY",
			broker: "TQL",
			reference: "#002RN7323696",
			origin: "MDT2",
			pickUp: "01/11/2021",
			destination: "LAX9",
			plannedDate: "01/11/2021",
			rate: "$250",
			droppedDate: "02/11/2021",
			actions: "Edit",
		},
		{
			id: 17,
			trailer: "1435574PLA",
			type: "TOWAWAY",
			broker: "TQL",
			reference: "#002RN7323696",
			origin: "Mira Lama, CA",
			pickUp: "01/11/2021",
			destination: "Mira Lama, CA ",
			plannedDate: "01/11/2021",
			rate: "$250",
			droppedDate: "02/11/2021",
			actions: "Edit",
		},
	]);

	const getEdit = (value) => {
		setSelect(value.id);
		setTitle(value.name);
	};

	const getEditSave = () => {
		const newEditSaveData = data.map((value) => {
			return select === value.id
				? {
						...value,
						trailer: title,
						type: title,
						broker: title,
						reference: title,
						origin: title,
						pickUp: title,
						destination: title,
						plannedDate: title,
						rate: title,
						droppedDate: title,
				  }
				: value;
		});
		setData(newEditSaveData);
		setSelect(null);
	};

	const handleChangeStatus = (id, statusValue) => {
		setData((d) =>
			d.map((i) => {
				if (i.id === id) {
					i.status = statusValue;
				}
				return i;
			})
		);
	};

	const getStatusProps = (statusValue) => {
		const currentStatusObject = statusList.find((i) => i.value === statusValue);
		if (currentStatusObject) {
			return {
				color: currentStatusObject.color,
				backgroundColor: currentStatusObject.backgroundColor,
			};
		}
		return {};
	};

	const getDeleteElem = (ids) => {
		const newArr = data.filter((value) => value.id !== ids);
		setData(newArr)
	}

	return (
		<Container>
			<TableContainer>
				<TableContainerInfo>
					<TableContainerInfoLeft>
						<TableContainerTitle>Trailer Movies</TableContainerTitle>
					</TableContainerInfoLeft>
					<TableContainerInfoRight>
						<TableContainerInfoRightExp>Export</TableContainerInfoRightExp>
						<TableContainerInfoRightFilter>
							Filter
						</TableContainerInfoRightFilter>
						<TableContainerInfoRightAdd>+ Add</TableContainerInfoRightAdd>
					</TableContainerInfoRight>
				</TableContainerInfo>
				<Table>
					<Thead>
						<TR>
							<TH>TRAILER</TH>
							<TH>TYPE</TH>
							<TH>BROKER/CARIER</TH>
							<TH>REFERENC NUMBER</TH>
							<TH>ORIGIN</TH>
							<TH>PICK-UP DATE</TH>
							<TH>DESTINATION</TH>
							<TH>PLANNED DATE</TH>
							<TH>RATE</TH>
							<TH>DROPPED DATE</TH>
							<TH>STATUS</TH>
							<TH>ACTIONS</TH>
							<TH>Del</TH>
						</TR>
					</Thead>
					{data.map((value, index) => {
						return (
							<Tbody key={value.id}>
								<TR>
									<TD>
										{select === value.id ? (
											<TRinput
												onChange={(e) => setTitle(e.target.value)}
												value={data.trailer}
												type="text"
											/>
										) : (
											value.trailer
										)}
									</TD>
									<TD>
										{select === value.id ? (
											<TRinput
												onChange={(e) => setTitle(e.target.value)}
												value={data.type}
												type="text"
											/>
										) : (
											value.type
										)}
									</TD>
									<TD>
										{select === value.id ? (
											<TRinput
												onChange={(e) => setTitle(e.target.value)}
												value={data.broker}
												type="text"
											/>
										) : (
											value.broker
										)}
									</TD>
									<TD>
										{select === value.id ? (
											<TRinput
												onChange={(e) => setTitle(e.target.value)}
												value={data.reference}
												type="text"
											/>
										) : (
											value.reference
										)}
									</TD>
									<TD>
										{select === value.id ? (
											<TRinput
												onChange={(e) => setTitle(e.target.value)}
												value={data.origin}
												type="text"
											/>
										) : (
											value.origin
										)}
									</TD>
									<TD>
										{select === value.id ? (
											<TRinput
												onChange={(e) => setTitle(e.target.value)}
												value={data.pickUp}
												type="text"
											/>
										) : (
											value.pickUp
										)}
									</TD>
									<TD>
										{select === value.id ? (
											<TRinput
												onChange={(e) => setTitle(e.target.value)}
												value={data.destination}
												type="text"
											/>
										) : (
											value.destination
										)}
									</TD>
									<TD>
										{select === value.id ? (
											<TRinput
												onChange={(e) => setTitle(e.target.value)}
												value={data.plannedDate}
												type="text"
											/>
										) : (
											value.plannedDate
										)}
									</TD>
									<TD>
										{select === value.id ? (
											<TRinput
												onChange={(e) => setTitle(e.target.value)}
												value={data.rate}
												type="text"
											/>
										) : (
											value.rate
										)}
									</TD>
									<TD>
										{select === value.id ? (
											<TRinput
												onChange={(e) => setTitle(e.target.value)}
												value={data.droppedDate}
												type="text"
											/>
										) : (
											value.droppedDate
										)}
									</TD>
									<TD>
										<SelectDiv
											value={value.status}
											onChange={(e) =>
												handleChangeStatus(value.id, e.target.value)
											}
											{...getStatusProps(value.status || "moving")}
										/>
									</TD>
									<TD>
										{select === value.id ? (
											<SaveButton onClick={getEditSave}>Save</SaveButton>
										) : (
											<EditButton onClick={() => getEdit(value)}>
												Edit
											</EditButton>
										)}
									</TD>
									<TD>
										<DeleteBtn onClick={()=> getDeleteElem(value.id)}>Del</DeleteBtn>
									</TD>
								</TR>
							</Tbody>
						);
					})}
				</Table>
			</TableContainer>
		</Container>
	);
};

export default App;
