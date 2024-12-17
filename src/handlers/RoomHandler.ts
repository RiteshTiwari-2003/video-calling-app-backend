import { Socket } from "socket.io";
import {v4 as UUIDv4} from "uuid";
const roomHandler = (socket: Socket) => {
    const createRoom = () => {
        const roomid=UUIDv4();//this will be our unique room id in which multiple connection will exchange data 
        socket.join(roomid);// we will make the socket connection enter a new room 
        socket.emit("room-created",{roomid});// we will emit a event from server side that socket connection has been added to a room 

    };
    const joinRoom=()=>{
        console.log("New room joined ");
    }
    //when to call above two function 
    // we wil call the above two function when the client will emit events to create room and join room 
    socket.on("create-room",createRoom);
    socket.on("join-room",joinRoom);



};
export default roomHandler;
