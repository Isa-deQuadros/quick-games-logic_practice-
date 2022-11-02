import { useState } from "react"
import styled from "styled-components"


const Container = styled.div`
    h1{
        margin: 15px auto 10px auto;
        text-decoration: underline;
    }
    .section{
        height: 500px;
        width: 500px;
        margin: auto;
        /* background-color: blue; */
    }
    .grid{
        display: grid;
        grid-template-columns: 160px 160px 160px;
        grid-template-rows: 150px 150px 150px;
        grid-column-gap: 15px;
        grid-row-gap: 15px;
    }

    #one{
        grid-column: 1;
        grid-row: 1;
    }
    #two{
        grid-column: 2;
        grid-row: 1;
    }
    #three{
        grid-column: 3;
        grid-row: 1;
    }
    #four{
        grid-column: 1;
        grid-row: 2;
    }
    #five{
        grid-column: 2;
        grid-row: 2;
    }
    #six{
        grid-column: 3;
        grid-row: 2;
    }
    #seven{
        grid-column: 1;
        grid-row: 3;
    }
    #eight{
        grid-column: 2;
        grid-row: 3;
    }
    #nine{
        grid-column: 3;
        grid-row: 3;
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ADACAC;
        color: #FFE927;
    }
    h2{
        font-size: 120px;
        text-shadow: 3px 3px 3px black;
    }
    h5{
        font-size: 25px;
        margin: 0 0 10px 0;
    }
    .opening{
        margin: 30px auto;
        border-radius: 35px;
        height: 90px;
        width: 180px;
        background-color: black;
    }
    .head{
        width: 500px;
        display: inline-flex;
        justify-content: space-between;
    }
    .new_game{
        height: 30px;
        font-size: 25px;
        border-radius: 30px;
        background-color: black;

    }
`



function TicTacToe(){

    let allSquares = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const squares =["", "", "", "", "", "", "", "", ""]
    const players=["player1", "player2"]

    const [gameinProgress, setGameInProgress]= useState(false)

    const [availableSquares, setAvailableSquares]= useState(squares)
    const [playedSquares, setPlayedSquares]= useState ([])
    const [playerTurn, setPlayerTurn] = useState("player1")
    const [playerOneSquares, setPlayerOneSquares]= useState([])
    const [playerTwoSquares, setPlayerTwoSquares] = useState([])


    
    console.log("This is all the squares:", allSquares)
    console.log("This is available squares:", availableSquares)
    console.log("This is squares:", squares)


    function playingSquares(value){
        let index = allSquares.indexOf(value)
        if(allSquares.includes(value)){
            if(index > -1 && playerTurn === "player1"){
                availableSquares.splice(index, 1, "X")
                setPlayedSquares([value, ...playedSquares])
                setPlayerOneSquares([value, ...playerOneSquares])
                setPlayerTurn("player2")
                
            }else if (index > -1 && playerTurn === "player2"){
                availableSquares.splice(index, 1, "O")
                setPlayedSquares([value, ...playedSquares])
                setPlayerTwoSquares([value, ...playerTwoSquares])
                setPlayerTurn("player1")
            }

        } else
        alert("This is space has already been played")
    }

    return (
        <Container>
            <h1> Tic-Tac-Toe </h1>
            {gameinProgress?
                <> <div className="head">
                        <h5>Turn: {playerTurn}</h5>
                        <button className="new_game"> New Game</button>
                    </div> 
                        <div className='section'>
                            <div className="grid" >
                                <button id="one" onClick={()=> {playingSquares(1)}}> <h2>{availableSquares[0]} </h2> </button>
                                <button id="two" onClick={()=> playingSquares(2)}> <h2> {availableSquares[1]} </h2> </button>
                                <button id="three" onClick={()=> playingSquares(3)}> <h2> {availableSquares[2]} </h2> </button>
                                <button id="four" onClick={()=> playingSquares(4)}> <h2> {availableSquares[3]} </h2> </button>
                                <button id="five" onClick={()=> playingSquares(5)}> <h2> {availableSquares[4]} </h2> </button>
                                <button id="six" onClick={()=> playingSquares(6)}> <h2> {availableSquares[5]} </h2> </button>
                                <button id="seven" onClick={()=> playingSquares(7)}> <h2>  {availableSquares[6]} </h2> </button>
                                <button id="eight" onClick={()=> playingSquares(8)}> <h2> {availableSquares[7]} </h2> </button>
                                <button id="nine" onClick={()=> playingSquares(9)}> <h2> {availableSquares[8]} </h2> </button>
                            </div>
                        </div>
                    </>
                :
                    <><button className="opening" onClick={()=> setGameInProgress(true)}><h4>Start New Game</h4></button></>
            }
            {/* <h5> It's {playerTurn} turn</h5>
            <div className='section'>
                <div className="grid" >
                <button id="one" onClick={()=> {playingSquares(1)}}> <h2>{availableSquares[0]} </h2> </button>
                <button id="two" onClick={()=> playingSquares(2)}> <h2> {availableSquares[1]} </h2> </button>
                <button id="three" onClick={()=> playingSquares(3)}> <h2> {availableSquares[2]} </h2> </button>
                <button id="four" onClick={()=> playingSquares(4)}> <h2> {availableSquares[3]} </h2> </button>
                <button id="five" onClick={()=> playingSquares(5)}> <h2> {availableSquares[4]} </h2> </button>
                <button id="six" onClick={()=> playingSquares(6)}> <h2> {availableSquares[5]} </h2> </button>
                <button id="seven" onClick={()=> playingSquares(7)}> <h2>  {availableSquares[6]} </h2> </button>
                <button id="eight" onClick={()=> playingSquares(8)}> <h2> {availableSquares[7]} </h2> </button>
                <button id="nine" onClick={()=> playingSquares(9)}> <h2> {availableSquares[8]} </h2> </button>
                </div>
            </div> */}
        </Container>
    )
}
export default TicTacToe