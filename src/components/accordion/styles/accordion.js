import styled from 'styled-components'

export const Container = styled.section`
x	 border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
	display: flex;
    padding: 70px 45px;
    flex-direction: column;
    max-width: 815px;
    margin: auto;
`;

export const Item = styled.div`
    color: white;
    margin-bottom: 10px;
`;

export const Title = styled.h1`
	font-size: 3rem;
`;
export const Header = styled.div`
	display:flex;
	justify-content: space-between;
    font-size: 26px;
    font-weight: normal;
    background: #303030;
    padding: 0.8em 1.2em 0.8em 1.2em;
    user-select: none;
	align-items: center;
	margin-bottom:1px;
	cursor:pointer

	 @media (max-width: 600px) {
        font-size: 16px;
    }
`;

export const Body = styled.div`
	box-sizing: border-box;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    font-size: 26px;
    font-weight: normal;
    line-height: normal;
    background: #303030;
    padding: 0.8em 1.2em 0.8em 1.2em;
    user-select: none;
    align-items: center;
	width: 100%;
	
	 @media (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
`;
