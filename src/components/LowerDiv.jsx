import { UseCartContext } from "../assets/context/CartContext"
import { styled } from "styled-components"
import { FiDelete, FiEdit3 } from "react-icons/fi"
import Checkbox from '@mui/material/Checkbox';
import { MdSystemUpdateAlt } from "react-icons/md"


// let image1=
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function LowerDiv() {
    const { state, Delete, Edit, editing, DoneEditing, DeleteAll } = UseCartContext()
    const { cart, editModes } = state

    return (
        <>
            <Wrapper>
                <div className="box">
                    {cart?.map((e, i) => {
                        return (<>
                            <div className="card" key={i}>
                                <span className="span">
                                    <span>
                                        <Checkbox {...label} />
                                    </span>
                                    <span>
                                        <input className="notes"
                                            // onClick={handleInputClick()} 
                                            onChange={(event) => editing(event, i)}
                                            readOnly={!editModes} value={e}>

                                        </input>
                                    </span>
                                    <span><FiDelete className="icon delete" onClick={() => Delete(i)}></FiDelete>
                                        {!state.editModes[i] ? <FiEdit3 className="icon edit" onClick={()=>Edit(event,i)}></FiEdit3> :
                                            <MdSystemUpdateAlt className="icon update" onClick={DoneEditing}></MdSystemUpdateAlt>
                                        }
                                    </span>
                                </span>
                            </div>
                        </>
                        )
                    })}

                    {cart.length>0?  <button onClick={DeleteAll}>DELETE ALL</button>:null}
                </div>

            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
display: flex;
justify-content: center;
width: 100%;

.box{
min-height: 40vh;
width: 70vw;
border: 1px solid #be32be ;
background-image: url("https://th.bing.com/th/id/OIG.bMwVV8xjDHqHVYRAIG7z?pid=ImgGn");
background-size: cover;
border-radius:0rem 0rem 2rem 2rem;
display: flex;
justify-content:flex-start;
flex-direction: row;
flex-wrap: wrap;
align-items:flex-start;
padding: 2rem;
gap: 1rem;
position: relative;
background-color: white;

}
.card{
    display: flex;
    min-height: 2rem;
    width: 12rem;
border: 1px solid #008080 ;
word-wrap: break-word !important;
    border-radius: .7rem;
    padding: 0;
    align-items: center;
    /* box-shadow:inset 2px 4px 6px rgba(0, 0, 0, 0.5); */
    
    .span{
        display: flex;
word-wrap: break-word !important;
align-items:center;
width: 100%;
justify-content: space-around;
background-color: white;
box-shadow:inset 2px 2px 6px rgba(0, 0, 0, 0.5);
border-radius: .7rem;


        .icon{
            font-size: 1.1rem;
        }
        input{
            display: inline-block;
            padding: .5rem;
            border:none;
            width: 8vw;
            
        }
        input:focus {
    outline: none;
    border-bottom: 1px solid black;
}
    }
    
}
button{
    background-color: #be32be ;
    border: none;
    border-radius: 0.4rem;
    color: white;
    padding: .4rem;
    font-weight: bold;
    position: absolute;
    bottom: 10px;
&:hover{
    background-color: #ffffff ;
    color: #be32be;

}

}
.delete:hover,.update:hover{
    color:red;
}
.edit{
    color:green;
}
`