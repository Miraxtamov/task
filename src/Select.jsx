import React from "react";
import { Option, Select } from "./style";
import statusList from "./status";
const SelectDiv = ({ value, onChange, color, backgroundColor }) => {
	return (
		<div>
			<Select
				value={value}
				onChange={onChange}
				color={color}
				backgroundColor={backgroundColor}
			>
				{statusList.map(({ value, label, color, backgroundColor }) => (
					<Option
						key={value}
						value={value}
						color={color}
						backgroundColor={backgroundColor}
					>
						{label}
					</Option>
				))}
			</Select>
		</div>
	);
};

export default SelectDiv;
