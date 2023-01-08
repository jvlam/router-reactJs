import ModalCreateUser from './ModalCreateuser'

function ManageUser() {
  return (
    <div className="manage-user-container">
      <div className="title">
        Manage User
      </div>
      <div className="users-content">
        <div>
          <button>Add new users</button>
        </div>
        <div>
          <ModalCreateUser />
        </div>
      </div>
    </div>
  )
}

export default ManageUser