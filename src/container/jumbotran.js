import React from 'react';
import JumboData from '../fixtures/jumbo.json'
import { Jumbotran } from '../components';

export function JumbortronContainer() {
    return(
        <Jumbotran.Container>
			{JumboData.map((item) =>(
				<Jumbotran key={item.id} direction={item.direction}>
					<Jumbotran.Pane>
						<Jumbotran.Title>{item.title}</Jumbotran.Title>
            		<Jumbotran.SubTitle>{item.subTitle}</Jumbotran.SubTitle>
					</Jumbotran.Pane>
					<Jumbotran.Pane>
						<Jumbotran.Image src={item.image} alt={item.alt} />
					</Jumbotran.Pane>
				</Jumbotran>
			))}
           
        </Jumbotran.Container>
    )
}