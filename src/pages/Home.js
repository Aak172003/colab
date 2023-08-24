import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {

    const navigate = useNavigate();
    const [roomId, setRoomId] = useState('');
    const [username, setUserName] = useState('');

    const CreateNewRoom = (e) => {
        e.preventDefault();
        const id = uuidv4();
        console.log(id);
        setRoomId(id);

        console.log(id);

        toast.success('Created a new room ')
    }

    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error('ROOM ID & username is required');
            return;
        }

        // Redirect 
        navigate(`editor/${roomId}`, {
            // pass username to other component during navid=gate 
            state: {
                username,
            }
        })
    }

    const handleInputEnter = (e) => {
        // console.log('event',e.code);

        // means on press enter , call joinRoom Function
        if (e.code === 'Enter') {
            joinRoom();
        }
    }

    return (
        <div className='homePageWrapper'>
            <div className='formWrapper'>
                <img className='homePageLogo' src='/code-sync.png' alt='code-sync-logo' />
                <h4 className='mainLabel'>Paste invitation ROOM ID </h4>

                <div className='inputGroup'>
                    <input
                        type='text'
                        className='inputBox'
                        placeholder='ROOM ID '
                        onChange={(e) => setRoomId(e.target.value)}
                        value={roomId}
                        onKeyUp={handleInputEnter}
                    />

                    <input
                        type='text'
                        className='inputBox'
                        placeholder='USER NAME'
                        onChange={(e) => setUserName(e.target.value)}
                        value={username}
                        onKeyUp={handleInputEnter}
                    />

                    <button className='btn joinBtn' onClick={joinRoom}>Join</button>

                    <span className='createInfo'>
                        If you Don't have an invite then create &nbsp;
                        <a onClick={CreateNewRoom} href='https://leetcode.com/prajapatiaakash364/' className='createNewBtn'>new room</a>
                    </span>
                </div>

            </div>
            <footer>
                <h4 >Built with ❤️️&nbsp; by️ &nbsp;
                    <a href='https://github.com/Aak172003' target='_blank'>Aakash Prajapati </a>
                </h4>
            </footer>
        </div>
    )
}

export default Home