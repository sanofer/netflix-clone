import React from 'react'
import {Container, Item, Inner, Title, SubTitle,Image,Pane} from './styles/jumbotran'

export default function Jumbotran({ children, direction="row", ...restProps }){
	return (
		<Item {...restProps}>
			<Inner direction={direction}>{children}</Inner>
		</Item>
	)
}

Jumbotran.Container = function JumbotronContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Jumbotran.Title = function JumbotronTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

Jumbotran.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
}

Jumbotran.Image = function Jumbotranmage({...restProps}){
	return <Image {...restProps} />
}

Jumbotran.Pane = function JumbotranPane({children,...restProps}){
	return <Pane {...restProps}>{children}</Pane>
}