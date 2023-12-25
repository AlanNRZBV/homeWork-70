import Backdrop from "../Backdrop/Backdrop.tsx";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store.ts";
import { toggleDisplay } from "./contactModalSlice.ts";

const ContactModal = () => {
  const dispatch:AppDispatch = useDispatch()
  const isModalShow = useSelector((state:RootState)=>state.contactModal.isShow)


  return (
      <div className={isModalShow ? ("d-block"):("d-none")}>
      <div className="p-3 border border-1 rounded-3 position-absolute top-50 start-50 translate-middle bg-white z-2">
        <div className="d-flex">
          <img src="" alt="contact picture" style={{ height: '100px', width: '100px' }}
               className="rounded-circle object-fit-cover" />
          <div className="d-flex flex-column">
            <span>Name: </span>
            <span>Phone: </span>
            <span>Email: </span>
          </div>
          <button onClick={()=>dispatch(toggleDisplay())} type="button" className="btn-close"/>
        </div>
        <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-secondary me-3">Edit</button>
          <button type="button" className="btn btn-outline-danger">Delete</button>
        </div>
      </div>
      <Backdrop/>
      </div>
  );
};

export default ContactModal;
