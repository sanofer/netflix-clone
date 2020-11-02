import React from 'react'
import { JumbortronContainer } from '../container/jumbotran'
import { FooterContainer } from '../container/footer'
import { FaqsContainer } from '../container/faq'

export default function Home(){
	return (
		<>
			<JumbortronContainer />
			<FaqsContainer />
			<FooterContainer />
		</>
	)
}