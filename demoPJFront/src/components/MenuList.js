import React from "react";
import styled from 'styled-components';

/**
 * menu ul
 */
const Menu = styled.ul`
	list-style: none;
	padding: 0;
`;

/**
 * menu li
 */
const MenuItem = styled.li`
	padding: 10px 20px;
	cursor: pointer;
	background-color: #EEEEEE;
	border: 1px solid #CCCCCC;
		border-top-width: 0px;
		
	&:hover {
		background-color: #A0A0A0;
	}
`;

/**
 * menu list
 */
function MenuList({items}){
	return (
		<Menu>
			{
				items.map((item, index) => (
					<MenuItem key={index}>{item}</MenuItem>
				)
			)}
		</Menu>
	)
}

export default MenuList;