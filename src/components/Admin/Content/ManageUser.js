import ModalCreateUser from './ModalCreateuser'
import './ManageUser.scss'
import { useState } from 'react'
import { FcPlus } from 'react-icons/fc'


function ManageUser() {

  const [showModalCreateUser, setShowModalCreateuser] = useState(false)

  const toggle = {
    show: showModalCreateUser,
    setShow: setShowModalCreateuser
  }

  return (
    <div className="manage-user-container">
      <h1 className="title">
        Manage User
      </h1>
      <div className="users-content">
        <button
          onClick={() => setShowModalCreateuser(!showModalCreateUser)}
          className="btn btn-primary"
        >
          <FcPlus className='btn-plus' />
          Add new users
        </button>
        <div className='table-users'>
          table users
        </div>
        <ModalCreateUser
          modal={toggle}
        />
      </div>
    </div>
  )
}

export default ManageUser