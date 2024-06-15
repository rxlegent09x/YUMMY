 import {x_secret} from "./X";
import socketIo from 'socket.io-client';
  const uri_back = x_secret.url;
export const socket = socketIo(uri_back,{transports:['websocket']});








