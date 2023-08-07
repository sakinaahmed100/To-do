import { styled } from "styled-components"
import TextField from '@mui/material/TextField';
import { MdDoneAll } from 'react-icons/md';
import { UseCartContext } from "../assets/context/CartContext";

export default function UpperDiv() {

    const { getValue, mapValue, state } = UseCartContext();


    return (<>

        <Wrapper>
            <header>
                <h1>TODO APP</h1>
            </header>
            <div className="input">
                <TextField
                    id="outlined-textarea"
                    label="What's on your mind?"
                    placeholder="Enter your text..."
                    multiline
                    onChange={getValue}
                    value={state.value}

                />
                <MdDoneAll className="icon" onClick={mapValue}></MdDoneAll>
            </div>
        </Wrapper>

    </>)
}

const Wrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: .3rem;
header{
    width: 100vw;
    height: 8vw;
    color: white ;
    background-color: #a144bd ;
    display: grid;
    place-items: center;
    font-size: 2vw;
    margin-bottom: 2vw;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);
   
}
.input{
    background-color: white ;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border-radius:2rem 2rem 0rem 0rem ; */
    /* padding-top: 1rem; */
    color: blue;
    position: relative;
 #outlined-textarea{
    color: blue;
    border-color: white;
width: 68vw;
 }

 .icon{
    position: absolute;
    right: 2vw;
 }
}
`