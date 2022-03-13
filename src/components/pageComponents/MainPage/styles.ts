import styled from "styled-components";

import { ContestType } from "@/types/contestTypes" ;


type ComponetsPropsType ={
    contestStyle : ContestType;
}

function findContestColor(id:string) {
    switch (id) {
        case "mega-sena": 
            return "#6BEFA3"

        case "quina": 
            return "#8666EF"

        case "lotofacil": 
            return "#DD7AC6"

        case "lotomania":
            return "#FFAB64";
            
        case "timemania":
            return " #5AAD7D"

        case "dia-de-sorte":
            return "#BFAF83"

        default :
            break

}

}

export const Container = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #EFEFEF;

    font-family: 'Montserrat', sans-serif;

    
`;


export const Content = styled.div`
    display:flex;
    
    width: 100%;
    @media(max-width: 880px) {
        flex-direction: column;
    }
`;

export const ContestArea = styled.div<ComponetsPropsType>`
    display: flex;
    background-color: ${props => findContestColor(props.contestStyle)};
    width: 30%;

    

    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    
    
    
    padding: 9.6rem ;
    gap: 5.0rem;

    min-height: 820px;
    height: 100vh;


    border-top-right-radius: 20% 100%;
    border-bottom-right-radius: 20% 100%;

    @media(max-width: 880px) {
        height: 40.0rem;
        min-height: 400px;
        width: 100%;
        align-items: center;
        justify-content: center;
        padding: 2.6rem;
        gap: 5.0rem;

        border-top-right-radius: 0 0 ;
        border-bottom-right-radius: 30% 30%;
        border-bottom-left-radius: 30% 30%;
    }

    .contest-dropdown-filter-area {
        background-color: #fff;
        font-size: 1.5rem;
        border-radius: 1.0rem;
        
        padding: 0 1.0rem;
        select {
            background-color: #fff;
            padding: 2.2rem 7.4rem 2.2rem 1.4rem;
            border: none;
            font-weight: 500;
            color:#333333;
            text-transform: uppercase;
            
        }
    }


    .title-contest-area {
        display: flex;
        align-items: center;
        gap: 2.2rem;

        margin: 16.0rem 0;
        p {
            font-size: 3.0rem;
            font-weight: 700;
            color: #fff;
            text-transform: uppercase;
        }

        @media(max-width: 880px) {
            margin: 0;
           flex-direction: column;
        }
    }

    .contest-info-area {
        font-size: 1.6rem;
        display: flex;
        flex-direction: column;


        @media(max-width: 880px) {
            align-items: center;
            justify-content: center;
        }
        p {
            font-size: 1.4rem;
            text-transform: uppercase;
            color: #fff;
            font-weight: 500;

            
        }

        .contest-info-title {
            font-size: 2.0rem;
        }

        .contest-info-text {
            font-size: 2.0rem;
            font-weight: 700;
            color: #fff;

            .acaba {
                font-size: 2.0rem;
                font-weight: 700;
                color: #fff;
            }
        }
    }

    
`;

export const ResultContestArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    align-items: center;
    justify-content: center;
    padding: 1.0rem 2.5rem;
    gap: 5.0rem;
    
    
    background-color: #EFEFEF;

    @media(max-width: 880px) {
        padding: 5.0rem 0 ;
        width: 100%;
        
    }

    .result-field {
        display: flex;
        gap: 1.0rem;
        flex-wrap: wrap;

        padding: 5.0rem 10.0rem ;
        align-items: center;
        justify-content: center;

        
        

    }


    .contest-number-result {
        background-color: #fff;
        font-size: 2.4rem;
        color: #333333;
        font-weight: 700;
        width: 10.0rem;
        height: 10.0rem;
        padding: 2.4rem;
        border-radius: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    p.footer {
        display: flex;
        width: 100%;
        font-size: 1.4rem;
        align-items: center;
        justify-content: center;
        text-align: center;
       
    }
`;