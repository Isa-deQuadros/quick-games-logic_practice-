import { useState } from "react"
import styled from "styled-components"


import startingBlock from './tic-tac-toe-images/Starting-block.png'
import player1Img from './tic-tac-toe-images/player-1.png'
import player2Img from './tic-tac-toe-images/player-2.png'


const Container = styled.div`

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
        grid-column-gap: 20px;
        grid-row-gap: 20px;
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
    }

`



function TicTacToe(){
    const allSquares= ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    const players=["player1", "player2"]

    const [availableSquares, setAvailableSquares]= useState(allSquares)

    const [playedSquares, setPlayedSquares]= useState ([])
    const [playerTurn, setPlayerTurn] = useState("player1")

    const [playerOneSquares, setPlayerOneSquares]= useState([])
    const [playerTwoSquares, setPlayerTwoSquares] = useState([])

    const [one, setSquare1]=useState(false)
    const [two, setSquare2]=useState(false)
    const [three, setSquare3]=useState(false)
    const [four, setSquare4]=useState(false)
    const [five, setSquare5]=useState(false)
    const [six, setSquare6]=useState(false)
    const [seven, setSquare7]=useState(false)
    const [eight, setSquare8]=useState(false)
    const [nine, setSquare9]=useState(false)



    console.log("Before Playing:", availableSquares)
    console.log("Player Turn:", playerTurn)
    console.log("Before Playing: played squares", playedSquares)
    console.log("Player 1 Spaces ", playerOneSquares)
    console.log("Player 2 Spaces", playerTwoSquares)
    console.log("Square 1", one)
    console.log("Square 2", two)
    console.log("Square 3", three)
    console.log("Square 4", four)
    console.log("Square 5", five)
    console.log("Square 6", six)
    console.log("Square 7", seven)
    console.log("Square 8", eight)
    console.log("Square 9", nine)




    
    function playingSquares(value){
        let index = availableSquares.indexOf(value)
        if(availableSquares.includes(value)){
            if(index > -1 && playerTurn === "player1"){
                availableSquares.splice(index, 1)
                setPlayedSquares([value, ...playedSquares])
                setPlayerOneSquares([value, ...playerOneSquares])
                setPlayerTurn("player2")
                if(value === "one"){
                    setSquare1(true)
                }else if( value === "two"){
                    setSquare2(true)
                }else if( value === "three"){
                    setSquare3(true)
                }else if( value === "four"){
                    setSquare4(true)
                }else if( value === "five"){
                    setSquare5(true)
                }else if( value === "six"){
                    setSquare6(true)
                }else if( value === "seven"){
                    setSquare7(true)
                }else if( value === "eight"){
                    setSquare8(true)
                }else if( value === "nine"){
                    setSquare9(true)
                }
            }else if (index > -1 && playerTurn === "player2"){
                availableSquares.splice(index, 1)
                setPlayedSquares([value, ...playedSquares])
                setPlayerTwoSquares([value, ...playerTwoSquares])
                setPlayerTurn("player1")
                if(value === "one"){
                    setSquare1(true)
                }else if( value === "two"){
                    setSquare2(true)
                }else if( value === "three"){
                    setSquare3(true)
                }else if( value === "four"){
                    setSquare4(true)
                }else if( value === "five"){
                    setSquare5(true)
                }else if( value === "six"){
                    setSquare6(true)
                }else if( value === "seven"){
                    setSquare7(true)
                }else if( value === "eight"){
                    setSquare8(true)
                }else if( value === "nine"){
                    setSquare9(true)
                }
            }
        } else
        alert("This is space has already been played")
    }

        function displaysquares(val){
            if (val === false){
                return <img  src={startingBlock} height={150} width={150} quality={100}
                    onClick={()=> {playingSquares("val")}}
                />
            }else if (val === true && playerTurn === "player1"){
                return <img src={player1Img} alt="space occupied" height={150} width={150} quality={180}/>
            }else if (val === true && playerTurn === "player1"){
                return <img src={player1Img} alt="space occupied" height={150} width={150} quality={180}/>
        }
    }

    return (
        <Container>
            <h2> Tic-Tac-Toe </h2>
            <h5> It's {playerTurn} turn</h5>
            <div className='section'>
                <div className="grid" >
                {/* <button id="one" onClick={()=> playingSquares("one")}> </button> */}
                {displaysquares(one)}
                <button id="two" onClick={()=> playingSquares("two")} > </button>
                <button id="three" onClick={()=> playingSquares("three")} > </button>
                <button id="four" onClick={()=> playingSquares("four")} > </button>
                <button id="five" onClick={()=> playingSquares("five")} > </button>
                <button id="six" onClick={()=> playingSquares("six")} >  </button>
                <button id="seven" onClick={()=> playingSquares("seven")} > </button>
                <button id="eight" onClick={()=> playingSquares("eight")} > </button>
                <button id="nine" onClick={()=> playingSquares("nine")} > </button>
                </div>
            </div>
        </Container>
    )
}
export default TicTacToe