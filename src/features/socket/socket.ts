import { User } from '@/types';
import io, { Socket } from 'socket.io-client';

let socket: Socket;

export const getSocketInstance = (user: User) => {
  if (!socket) {
    console.log("Creating socket instance");
    socket = io('localhost:3001');
  }

  return socket;
}
