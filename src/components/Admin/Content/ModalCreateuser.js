import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { toast } from 'react-toastify';


function ModalCreateUser(props) {

    const { modal } = props

    // const [show, setShow] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [role, setRole] = useState('USER');
    const [avatar, setAvatar] = useState()

    useEffect(() => {

        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    // const handleShow = () => setShow(true);
    const handleSubmit = () => modal.setShow(false);
    const handleClose = () => {
        modal.setShow(false)
        setEmail('')
        setPassword('')
        setUserName('')
        setRole('')
        setAvatar('')
    };

    const handleUploadImage = (e) => {
        if (e.target && e.target.files && e.target.files[0]) {
            const file = e.target.files[0] // return a object of filelist
            file.preview = URL.createObjectURL(file) // return url 
            setAvatar(file)
            // setImage(e.target.files[0])
        } else {
            // setPreviewImage('')
        }
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubmitCreateUser = async () => {
        // Validate
        const isValidEmail = validateEmail(email);
        if(!isValidEmail) {
            toast.error('Invalid Email')
            return; 
        }
        
        if(!password) {
            toast.error('Invalid password')
            return
        }

        //submit data
        const FormData = require('form-data');
        const param = new FormData();
        param.append('email', email);
        param.append('password', password);
        param.append('username', userName);
        param.append('role', role);
        param.append('userImage', avatar);

        let res = await axios.post('http://localhost:8081/api/v1/participant', param)

        console.log(res.data);
        if(res.data && res.data.EC === 0) {
            toast.success(res.data.EM)
            handleClose()
        }
        if(res.data && res.data.EC === 1) {
            toast.error(res.data.EM)
        }
    }


    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal
                show={modal.show}
                onHide={handleClose}
                size="lg"
                backdrop='static'
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label" htmlFor='inputEmail'>Email</label>
                            <input
                                value={email}
                                type="email"
                                className="form-control"
                                id='inputEmail'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input
                                value={password}
                                type="password"
                                className="form-control"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">User Name</label>
                            <input
                                value={userName}
                                type="text"
                                className="form-control"
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select"
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option defaultValue={role} >User</option>
                                <option value="ADMIN">Admin</option>
                            </select>
                        </div>
                        <div className='col-md-4'>
                            <label className="form-label">Upload Avatar</label>
                            <input
                                type="file"
                                className="form-control"
                                onChange={(e) => {
                                    handleUploadImage(e)
                                }}
                            />
                        </div>
                        <div className='col-md-12 img-preview border border-primary'>
                            <label className="form-label">Avatar Preview</label>
                            {
                                avatar &&
                                <img src={avatar.preview} />
                            }
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => {
                        handleSubmitCreateUser()
                    }}>
                        Add
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreateUser;