import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalCreateUser() {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [role, setRole] = useState('USER');
    // const [image, setImage] = useState()
    const [avatar, setAvatar] = useState()

    const handleShow = () => setShow(true);
    const handleSubmit = () => setShow(false);
    const handleClose = () => setShow(false);


    const handleUploadImage = (e) => {
        if(e.target && e.target.files && e.target.files[0]) {
            const file = e.target.files[0] // return a object of filelist
            file.preview = URL.createObjectURL(file) // return url 
            setAvatar(file)
            // setImage(e.target.files[0])
        }else {
            // setPreviewImage('')
        }
    }

    useEffect(() => {
        
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal
                show={show}
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
                                <option selected value="USER">User</option>
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
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreateUser;