import { useState } from "react";
// import { RiCloseLine } from "react-icons/ri";
import "../../../css/app/CreateUserModal.css"

import { createUser } from '../../../utils/functions/app/createUser'


const CreateUserModal = ({ setIsOpen }) => {

  const [name, setName] = useState("Enter Name");
  const [email, setEmail] = useState("Enter Email");
  const [twitterUsername, setTwitterUsername] = useState("Enter Twitter UserName");

  const handleCreateUser = async () => {
    const data = await createUser(name, email, twitterUsername);
    console.log("CreateUserModal : handleCreateUser() data from db after createUser(): ", data)
    setIsOpen(false);
  }
  return (
    <>
      <div className="darkBG" />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Eyh, never seen you around before ?</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            {/* <RiCloseLine style={{ marginBottom: "-3px" }} /> */}
          </button>
          <div className="modalContent">
            <p> Lets get started ! </p>
            <input type='text' onChange={e => setName(e.target.value)} value={name} />
            <input type='text' onChange={e => setEmail(e.target.value)} value={email} />
            <input type='text' onChange={e => setTwitterUsername(e.target.value)} value={twitterUsername} />

          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={() => handleCreateUser()}>
                Join
              </button>
              <button
                className="cancelBtn"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateUserModal;