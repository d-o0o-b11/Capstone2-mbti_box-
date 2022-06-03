import React, { useEffect, useState } from "react";
import "./chat.css"
import { Container, Row, Col} from "react-bootstrap";
import img5 from "../images/chat.png"
import "./modal.css"
import Modal from "./Modal.js"
import ListItemchat from './innerchat/ListItemchat.js';
import Axios from "axios"

function useFetch(url) {

    const [data, setData] = useState([]);
    
    async function fetchUrl() {
        const response = await fetch(url);
        const json = await response.json();
        
        setData(json);
    }
    
    useEffect(() => {
        fetchUrl();
    }, []);
    return data;
  }


const Chatmain = () => {

    const [modalOpen, SetmodalOpen] = useState(false);

    const openModal = () => {
        SetmodalOpen(true);
    };
    
    //창 닫으면서 axios로 mbti보내기
    const closeModal = () => {
        SetmodalOpen(false); 
    };

    const [roomname, Setroomname] = useState("");  //roomname

    const data = useFetch("/chat");

    //방 이름
    const RoomHandler = (e) => {
        e.preventDefault();
        Setroomname(e.target.value);
    };

    const submitHandler = (e)=>{
        e.preventDefault();

        if(roomname===""){
            alert("방이름을 입력해주세요");
        }
        else{
            Axios({
                method:'post',
                url: '/chat',
                data:
                {name: roomname},
            })
            .then((Response)=>{
                console.log("채팅방이름 잘 전달됨");
            })
            .catch((error)=>{
                console.log("채팅방 오류남");
                console.log(error);
            })
        }
    }


  return (
    <>
        <Container>
            <div className="chatting backin">
                <div className="banner">
                    <img src={img5} height="150" />
                </div>
            <Row>
                <Col className="sickbang">
                    <div className="back">
                        <h1 className="test11" src={img5} height="30" width="30">단체 채팅<button onClick={openModal}>click</button></h1>

                        <div className="mbticontent">
                            <Modal open={modalOpen} close={closeModal} header="개인채팅 매칭" submit={submitHandler}>
                                <h5>개설할 방 이름을 적어주세요!</h5>
                                <input type="text" placeholder="방이름" maxlength="14" style={{width:"250px"}} value={roomname} onChange={RoomHandler}/>
                            </Modal>
                        </div>  

                            <div className="in">
                                <section className="list-wrapper">
                                    {data.map(
                                        ({ name }) => (
                                            <ListItemchat
                                                name={name}
                                                key={name}
                                            />
                                        )
                                    )}
                                </section>
                            </div>
                    </div>
                </Col>

                

            </Row>
            </div>
        </Container>
    </>
    
  );
};
export default Chatmain;