import { Socket } from "socket.io";
import {v4 as UUIDv4} from "uuid";
const roomHandler = (socket: Socket) => {
    const createRoom = () => {
        // this will be our unique room id in which 
        // multiple connection will exchange data
        const roomId = UUIDv4(); 
        // we will make the socket connection enter a new room
        socket.join(roomId); 
        // we will emit a event from server side 
        // that socket connection has been added to a room
        socket.emit("room-created", {roomId}); 
        console.log("room created with id", roomId);

    };
    const joinedRoom = (roomId: string,peerId: string) => {
        console.log("New User has  joined room ", roomId,"with peerId as ",peerId);
    };
    // when to call above two function
    // we wil call the above two function when 
    // the client will emit events to create room and join room
    socket.on("create-room", createRoom);
    socket.on("joined-room", (roomId: string,peerId: string) => joinedRoom(roomId,peerId));

};
export default roomHandler;
